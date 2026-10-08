import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildMacros } from '@embroider/macros/babel';

const macros = buildMacros();

export default function (api) {
  // `vite build` runs with NODE_ENV=production; `--mode development` (the test
  // build) and the dev server keep `data-test-*` attributes.
  let isProduction = api.env('production');

  return {
    plugins: [
      [
        '@babel/plugin-transform-typescript',
        {
          allExtensions: true,
          onlyRemoveTypeImports: true,
          allowDeclareFields: true,
        },
      ],
      [
        'babel-plugin-ember-template-compilation',
        {
          transforms: [
            ...macros.templateMacros,
            // Strips `data-test-*` from app and addon templates (ember-table and
            // Docfy ship uncompiled templates that this config compiles).
            ...(isProduction ? ['strip-test-selectors'] : []),
          ],
        },
      ],
      [
        'module:decorator-transforms',
        {
          runtime: {
            import: fileURLToPath(
              import.meta.resolve('decorator-transforms/runtime-esm'),
            ),
          },
        },
      ],
      [
        '@babel/plugin-transform-runtime',
        {
          absoluteRuntime: dirname(fileURLToPath(import.meta.url)),
          useESModules: true,
          regenerator: false,
        },
      ],
      ...macros.babelMacros,
    ],

    generatorOpts: {
      compact: false,
    },
  };
}
