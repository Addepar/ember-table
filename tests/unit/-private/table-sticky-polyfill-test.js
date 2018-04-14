import { test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';

import { componentModule } from '../../helpers/module';

import { find, findAll, scrollTo } from 'ember-native-dom-helpers';
import wait from 'ember-test-helpers/wait';

import { setupTableStickyPolyfill } from 'ember-table/-private/sticky/table-sticky-polyfill';

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

function constructMatrix(n, m) {
  let rows = emberA();

  for (let i = 0; i < n; i++) {
    let cols = emberA();

    for (let j = 0; j < m; j++) {
      cols.pushObject(m);
    }

    rows.pushObject(cols);
  }

  return rows;
}

function verifyHeader(assert) {
  let containerRect = find('.ember-table').getBoundingClientRect();

  findAll('thead > tr').forEach((row, i) => {
    // account for the scale
    let expectedOffset = i * 25;

    for (let cell of row.children) {
      let cellRect = cell.getBoundingClientRect();

      assert.ok(
        Math.abs(cellRect.top - containerRect.top - expectedOffset) < 10
      );
    }
  });

}

function verifyFooter(assert) {
  let containerRect = find('.ember-table').getBoundingClientRect();

  findAll('tfoot > tr').reverse().forEach((row, i) => {
    // account for the scale
    let expectedOffset = i * 25;

    for (let cell of row.children) {
      let cellRect = cell.getBoundingClientRect();

      assert.ok(
        Math.abs(containerRect.bottom - cellRect.bottom - expectedOffset) < 10
      );
    }
  });
}

componentModule('Unit | Private | TableStickyPolyfill', function() {

  test('it works', async function(assert) {
    this.set('headerRows', constructMatrix(3, 3));
    this.set('bodyRows', constructMatrix(20, 3));
    this.set('footerRows', constructMatrix(3, 3));

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
});
