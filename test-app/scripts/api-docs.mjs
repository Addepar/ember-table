// Generates the API reference pages (docs/api/*.md) from ember-table's type
// declarations: each component's `<Name>Signature` interface supplies its
// arguments, yielded values and element, with descriptions and `@default`s
// from the doc comments in the addon's source.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

/** Public components, in the order the reference lists them. */
const COMPONENTS = [
  { name: 'EmberTable', yieldedAs: null },
  { name: 'EmberThead', yieldedAs: 't.head' },
  { name: 'EmberTbody', yieldedAs: 't.body' },
  { name: 'EmberTfoot', yieldedAs: 't.foot' },
  { name: 'EmberTableLoadingMore', yieldedAs: 't.loadingMore' },
  { name: 'EmberTr', yieldedAs: 'h.row / b.row' },
  { name: 'EmberTh', yieldedAs: 'r.cell (header rows)' },
  { name: 'EmberTd', yieldedAs: 'r.cell (body rows)' },
  { name: 'EmberThSortIndicator', yieldedAs: null },
  { name: 'EmberThResizeHandle', yieldedAs: null },
];

function kebab(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/** Escapes text for a Markdown table cell. */
function cell(text) {
  return text.replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ');
}

/** Inline code for a table cell; types may contain pipes and backticks. */
function code(text) {
  return '`' + cell(text.replace(/\s+/g, ' ').trim()) + '`';
}

export function generateApiDocs({ declarations, outDir }) {
  let entry = path.join(declarations, 'index.d.ts');
  if (!fs.existsSync(entry)) {
    console.warn(`[api-docs] ${entry} not found; build ember-table first. Skipping the API reference.`);
    return;
  }

  let program = ts.createProgram([entry], {
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ES2022,
    types: ['ember-source/types'],
    skipLibCheck: true,
    noEmit: true,
  });
  let checker = program.getTypeChecker();
  let exports = checker.getExportsOfModule(checker.getSymbolAtLocation(program.getSourceFile(entry)));

  let resolve = (symbol) => (symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol);
  let docOf = (symbol) => ts.displayPartsToString(symbol.getDocumentationComment(checker)).trim();
  let tagOf = (symbol, name) => {
    let tag = symbol.getJsDocTags(checker).find((t) => t.name === name);
    return tag ? ts.displayPartsToString(tag.text ?? []).trim() || true : undefined;
  };
  // The type as written in the declaration (`RowType[]`), falling back to the
  // checker. Aliases of literal unions (`SelectionMode`) show their values.
  let typeText = (symbol) => {
    let node = symbol.declarations?.[0];
    if (node && ts.isMethodSignature(node)) {
      let params = node.parameters.map((p) => p.getText()).join(', ');
      return `(${params}) => ${node.type ? node.type.getText() : 'void'}`;
    }
    let type = checker.getNonNullableType(checker.getTypeOfSymbol(symbol));
    let literals = type.isUnion() ? type.types : [type];
    if (literals.length > 1 && literals.every((t) => t.isStringLiteral())) {
      return literals.map((t) => JSON.stringify(t.value)).join(' | ');
    }
    // A component's own type parameter (`Api`) shows its constraint; row and
    // column types read better as written (`RowType`).
    if (type.flags & ts.TypeFlags.TypeParameter && !/^(Row|Column)Type$/.test(type.symbol.name)) {
      let constraintNode = type.symbol.declarations?.[0]?.constraint;
      if (constraintNode) {
        return constraintNode.getText();
      }
    }
    if (node && 'type' in node && node.type) {
      return node.type.getText();
    }
    return checker.typeToString(type);
  };
  let isOptional = (symbol) => (symbol.flags & ts.SymbolFlags.Optional) !== 0;

  function signatureOf(classSymbol) {
    let file = classSymbol.declarations[0].getSourceFile();
    let moduleSymbol = checker.getSymbolAtLocation(file);
    let signature = checker
      .getExportsOfModule(moduleSymbol)
      .find((s) => s.name.endsWith('Signature') && s.flags & ts.SymbolFlags.Interface);
    return signature ? checker.getDeclaredTypeOfSymbol(signature) : undefined;
  }

  function propertyTable(type, { withDefaults }) {
    let rows = checker.getPropertiesOfType(type).map((prop) => {
      let internal = tagOf(prop, 'internal');
      let description = docOf(prop);
      if (internal) {
        description = `Set by the yielded component. ${description}`;
      }
      let columns = [`\`${prop.name}\``, code(typeText(prop))];
      if (withDefaults) {
        columns.push(isOptional(prop) ? '' : 'yes');
        let defaultValue = tagOf(prop, 'default');
        columns.push(typeof defaultValue === 'string' ? code(defaultValue) : '');
      }
      columns.push(cell(description));
      return `| ${columns.join(' | ')} |`;
    });
    let header = withDefaults
      ? '| Argument | Type | Required | Default | Description |\n| --- | --- | --- | --- | --- |'
      : '| Name | Type | Description |\n| --- | --- | --- |';
    return [header, ...rows].join('\n');
  }

  /**
    Documents a block's parameters from its declaration: a single anonymous hash
    lists its properties; positional (labeled) parameters are listed in order.
    Returns `null` for `EmberTr`'s cell, whose shape depends on its `@api`.
  */
  function blockParams(block) {
    let tuple = block.declarations?.[0]?.type;
    if (!tuple || !ts.isTupleTypeNode(tuple)) {
      return code(typeText(block));
    }
    if (tuple.elements.length === 0) {
      return 'Yields nothing.';
    }
    let [first] = tuple.elements;
    let firstType = ts.isNamedTupleMember(first) ? first.type : first;
    if (tuple.elements.length === 1 && ts.isTypeReferenceNode(firstType) && firstType.typeName.getText() === 'EmberTrCell') {
      return null;
    }
    if (tuple.elements.length === 1 && ts.isTypeLiteralNode(firstType)) {
      return propertyTable(checker.getTypeAtLocation(firstType), { withDefaults: false });
    }
    let rows = tuple.elements.map((element, index) => {
      let name = ts.isNamedTupleMember(element) ? element.name.getText() : `${index + 1}`;
      let type = ts.isNamedTupleMember(element) ? element.type : element;
      return `| ${index + 1} | \`${name}\` | ${code(type.getText())} |`;
    });
    return ['Yields positional block params:', '', '| # | Name | Type |', '| --- | --- | --- |', ...rows].join('\n');
  }

  function interfaceTable(name) {
    let symbol = exports.map(resolve).find((s) => s.name === name);
    if (!symbol) {
      let found = program
        .getSourceFiles()
        .flatMap((f) => (checker.getSymbolAtLocation(f) ? checker.getExportsOfModule(checker.getSymbolAtLocation(f)) : []))
        .find((s) => s.name === name);
      symbol = found;
    }
    return symbol ? propertyTable(checker.getDeclaredTypeOfSymbol(symbol), { withDefaults: false }) : '';
  }

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  COMPONENTS.forEach(({ name, yieldedAs }, index) => {
    let symbol = exports.find((s) => s.name === name);
    if (!symbol) {
      throw new Error(`[api-docs] ember-table does not export ${name}`);
    }
    let classSymbol = resolve(symbol);
    let signature = signatureOf(classSymbol);
    if (!signature) {
      throw new Error(`[api-docs] no Signature interface next to ${name}`);
    }

    let lines = [
      '---',
      `title: ${name}`,
      `order: ${index + 1}`,
      '---',
      '',
      `# ${name}`,
      '',
    ];

    let description = docOf(classSymbol);
    if (description) {
      lines.push(description, '');
    }

    lines.push('```gjs', `import { ${name} } from 'ember-table';`, '```', '');
    if (yieldedAs) {
      lines.push(`Inside \`<EmberTable>\` it is also yielded as \`${yieldedAs}\`, with \`@api\` already set.`, '');
    }

    let args = checker.getPropertyOfType(signature, 'Args');
    lines.push('## Arguments', '');
    let argsType = args && checker.getTypeOfSymbol(args);
    if (argsType && checker.getPropertiesOfType(argsType).length > 0) {
      lines.push(propertyTable(argsType, { withDefaults: true }), '');
    } else {
      lines.push('None.', '');
    }

    let blocks = checker.getPropertyOfType(signature, 'Blocks');
    if (blocks) {
      for (let block of checker.getPropertiesOfType(checker.getTypeOfSymbol(blocks))) {
        let label = block.name === 'default' ? 'Yields' : `Yields to \`<:${block.name}>\``;
        lines.push(`## ${label}`, '');
        let blockDoc = docOf(block);
        if (blockDoc) {
          lines.push(blockDoc, '');
        }
        let table = blockParams(block);
        if (table === null) {
          lines.push(
            'A header row (`@api` from `<EmberThead>`) yields header cells; a body or footer row yields body cells.',
            '',
            '### Header cells',
            '',
            interfaceTable('EmberTrHeaderCell'),
            '',
            '### Body cells',
            '',
            interfaceTable('EmberTrBodyCell'),
            ''
          );
        } else {
          lines.push(table, '');
        }
      }
    }

    let element = checker.getPropertyOfType(signature, 'Element');
    if (element) {
      let elementType = checker.typeToString(checker.getTypeOfSymbol(element));
      lines.push('## Element', '', `\`...attributes\` are applied to an \`${elementType}\`.`, '');
    }

    fs.writeFileSync(path.join(outDir, `${kebab(name)}.md`), lines.join('\n'));
  });
}
