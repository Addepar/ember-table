import { test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';

import { componentModule } from '../../helpers/module';

import { find, findAll, scrollTo } from 'ember-native-dom-helpers';
import wait from 'ember-test-helpers/wait';

import { setupTableStickyPolyfill } from 'ember-table/-private/sticky/table-sticky-polyfill';

const HEADER_PIXEL_EPSILON = 10;
const FOOTER_PIXEL_EPSILON = 10;

function isNearTo(value, expected, epsilon = 0.01) {
  return Math.abs(value - expected) <= epsilon;
}

const standardTemplate = hbs`
  <div style="height: 500px;">
    <div class="ember-table">
      <table>
        <thead>
          {{#each headerRows as |row|}}
            <tr>
              {{#each row as |item|}}
                <th style="width: 100px; min-width: 100px; height: 50px;">{{item}}</th>
              {{/each}}
            </tr>
          {{/each}}
        </thead>
        <tbody>
          {{#each bodyRows as |row|}}
            <tr>
              {{#each row as |item|}}
                <td style="width: 100px; min-width: 100px; height: 50px;">{{item}}</td>
              {{/each}}
            </tr>
          {{/each}}
        </tbody>
        <tfoot>
          {{#each footerRows as |row|}}
            <tr>
              {{#each row as |item|}}
                <td style="width: 100px; min-width: 100px; height: 50px;">{{item}}</td>
              {{/each}}
            </tr>
          {{/each}}
        </tfoot>
      </table>
    </div>
  </div>
`;

/**
 * Constructs a matrix m by n
 * @param m Rows
 * @param n Columns
 * @param prefix Prefix string
 * @param skipPrefixOnRowIndices Skip adding the prefix string to the row (m) indices specified in the list
 * @returns {Array} matrix
 */
function constructMatrix(m, n, prefix = '', skipPrefixOnRowIndices = []) {
  let rows = emberA();

  for (let i = 0; i < m; i++) {
    let cols = emberA();

    for (let j = 0; j < n; j++) {
      let skipPrefix = skipPrefixOnRowIndices.includes(i);
      cols.pushObject(skipPrefix ? n : `${n}${prefix}`);
    }

    rows.pushObject(cols);
  }

  return rows;
}

function verifyHeader(assert) {
  findAll('thead > tr').forEach((row, i) => {
    // account for the scale
    let expectedOffset = i * 25;

    for (let cell of row.children) {
      let cellRect = cell.getBoundingClientRect();
      let containerRect = find('.ember-table').getBoundingClientRect();

      assert.ok(Math.abs(cellRect.top - containerRect.top - expectedOffset) < HEADER_PIXEL_EPSILON);
    }
  });
}

function verifyFooter(assert) {
  findAll('tfoot > tr')
    .reverse()
    .forEach((row, i) => {
      // account for the scale
      let expectedOffset = i * 25;

      for (let cell of row.children) {
        let cellRect = cell.getBoundingClientRect();
        let containerRect = find('.ember-table').getBoundingClientRect();

        assert.ok(
          Math.abs(containerRect.bottom - cellRect.bottom - expectedOffset) < FOOTER_PIXEL_EPSILON
        );
      }
    });
}

/**
 * Verifies multi line header when scrolled to the bottom of the table
 * @param assert
 */
function verifyMultiLineHeader(assert) {
  let firstCellRect = find('thead tr:first-child th:first-child').getBoundingClientRect();
  let expectedOffset = firstCellRect.top;

  findAll('thead > tr').forEach(row => {
    let firstCellRect = row.firstElementChild.getBoundingClientRect();
    expectedOffset += firstCellRect.height;
    assert.equal(expectedOffset, firstCellRect.bottom);
  });
}

/**
 * Verifies multi line footer when scrolled to the top of the table
 * @param assert
 */
function verifyMultiLineFooter(assert) {
  let firstCellRect = find('tfoot tr:first-child td:first-child').getBoundingClientRect();
  let expectedOffset = firstCellRect.top;

  findAll('tfoot > tr').forEach(row => {
    let firstCellRect = row.firstElementChild.getBoundingClientRect();
    expectedOffset += firstCellRect.height;
    assert.equal(expectedOffset, firstCellRect.bottom);
  });
}

componentModule('Unit | Private | TableStickyPolyfill', function() {
  test('it works', async function(assert) {
    this.set('headerRows', constructMatrix(3, 3, 'thead'));
    this.set('bodyRows', constructMatrix(20, 3, 'tbody'));
    this.set('footerRows', constructMatrix(3, 3, 'tfoot'));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await scrollTo('.ember-table', 0, 500);

    verifyHeader(assert);
    verifyFooter(assert);
  });

  test('it updates if cells are added', async function(assert) {
    this.set('headerRows', constructMatrix(3, 3));
    this.set('bodyRows', constructMatrix(20, 3));
    this.set('footerRows', constructMatrix(3, 3));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await scrollTo('.ember-table', 0, 500);

    this.set('headerRows', constructMatrix(3, 5));
    this.set('footerRows', constructMatrix(3, 5));

    await wait();

    verifyHeader(assert);
    verifyFooter(assert);
  });

  test('it updates if rows are added', async function(assert) {
    this.set('headerRows', constructMatrix(3, 3));
    this.set('bodyRows', constructMatrix(20, 3));
    this.set('footerRows', constructMatrix(3, 3));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await scrollTo('.ember-table', 0, 500);

    this.set('headerRows', constructMatrix(5, 3));
    this.set('footerRows', constructMatrix(5, 3));

    await wait();

    verifyHeader(assert);
    verifyFooter(assert);
  });

  test('it updates if rows are added then cells are added', async function(assert) {
    this.set('headerRows', constructMatrix(3, 3));
    this.set('bodyRows', constructMatrix(20, 3));
    this.set('footerRows', constructMatrix(3, 3));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await scrollTo('.ember-table', 0, 500);

    this.set('headerRows', constructMatrix(3, 5));
    this.set('footerRows', constructMatrix(3, 5));

    await wait();

    this.set('headerRows', constructMatrix(5, 5));
    this.set('footerRows', constructMatrix(5, 5));

    await wait();

    verifyHeader(assert);
    verifyFooter(assert);
  });

  test('maxStickyProportion: when the footer is > 50% of the height', async function(assert) {
    let maxStickyProportion = 0.5;
    this.set('headerRows', constructMatrix(3, 3, 'header'));
    this.set('bodyRows', constructMatrix(30, 3, 'body'));
    this.set('footerRows', constructMatrix(30, 3, 'footer'));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await wait();

    let firstCell = find('tfoot tr:first-child td:first-child');
    let lastCell = find('tfoot tr:last-child td:first-child');
    let container = find('.ember-table');

    let firstCellRect = firstCell.getBoundingClientRect();
    let lastCellRect = lastCell.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    assert.ok(
      find('tfoot').getBoundingClientRect().height > maxStickyProportion * containerRect.height,
      'precond - footer is > 50% of the table height'
    );

    assert.ok(
      isNearTo((firstCellRect.top - containerRect.top) / containerRect.height, maxStickyProportion),
      'the top of the first footer cell is close to 50% of the way up the table'
    );

    assert.ok(
      isNearTo(
        (containerRect.bottom - firstCellRect.top) / containerRect.height,
        maxStickyProportion
      ),
      'the top of the first footer cell is close to 50% of the way down the table'
    );

    assert.ok(lastCellRect.top > containerRect.bottom, 'last footer cell is out of view');

    await scrollTo('.ember-table', 0, container.scrollHeight);

    // Recompute dimensions
    lastCellRect = lastCell.getBoundingClientRect();
    containerRect = container.getBoundingClientRect();

    assert.equal(
      lastCellRect.bottom,
      containerRect.bottom,
      'after scroll, last footer cell is at bottom of table'
    );
  });

  test('maxStickyProportion: when the header > 50% of the height', async function(assert) {
    let maxStickyProportion = 0.5;
    this.set('headerRows', constructMatrix(30, 3, 'header'));
    this.set('bodyRows', constructMatrix(30, 3, 'body'));
    this.set('footerRows', constructMatrix(3, 3, 'footer'));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await wait();

    let firstCell = find('thead tr:first-child th:first-child');
    let lastCell = find('thead tr:last-child th:first-child');
    let container = find('.ember-table');

    let firstCellRect = firstCell.getBoundingClientRect();
    let lastCellRect = lastCell.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    assert.ok(
      find('thead').getBoundingClientRect().height > maxStickyProportion * containerRect.height,
      'precond - header is > 50% of the table height'
    );

    assert.equal(
      firstCellRect.top,
      containerRect.top,
      'top of first header cell is at top of table'
    );
    assert.ok(lastCellRect.top > containerRect.bottom, 'last header cell is out of view');

    await scrollTo('.ember-table', 0, container.scrollHeight);

    // recompute dimensions
    lastCellRect = lastCell.getBoundingClientRect();
    containerRect = container.getBoundingClientRect();

    assert.ok(
      isNearTo(
        (lastCellRect.bottom - containerRect.top) / containerRect.height,
        maxStickyProportion
      ),
      'the bottom of the last header cell is close to 50% of the way up the table'
    );
    assert.ok(
      isNearTo(
        (containerRect.bottom - lastCellRect.bottom) / containerRect.height,
        maxStickyProportion
      ),
      'the bottom of the last header cell is close to 50% of the way down the table'
    );
  });

  test('when the header has rows with varying heights', async function(assert) {
    this.set(
      'headerRows',
      constructMatrix(2, 3, 'table header has multiple lines of content', [1])
    );
    this.set('bodyRows', constructMatrix(20, 3, 'body'));
    this.set('footerRows', constructMatrix(1, 3, 'footer'));

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await wait();

    let container = find('.ember-table');
    await scrollTo('.ember-table', 0, container.scrollHeight);

    verifyMultiLineHeader(assert);
  });

  test('when the footer has rows with varying heights', async function(assert) {
    this.set('headerRows', constructMatrix(1, 3, 'header'));
    this.set('bodyRows', constructMatrix(20, 3, 'body'));
    this.set(
      'footerRows',
      constructMatrix(2, 3, 'table footer has multiple lines of content', [1])
    );

    await this.render(standardTemplate);

    setupTableStickyPolyfill(find('thead'));
    setupTableStickyPolyfill(find('tfoot'));

    await wait();

    verifyMultiLineFooter(assert);
  });
});
