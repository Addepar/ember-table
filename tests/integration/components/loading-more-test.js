import { module, test } from 'ember-qunit';
import { componentModule } from '../../helpers/module';
import TablePage from 'ember-table/test-support/pages/ember-table';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { generateColumns } from '../../helpers/generate-table';
import { scrollTo } from 'ember-native-dom-helpers';

let table = new TablePage();

module('Integration | loading more', function() {
  componentModule('basic', function() {
    test('it renders a custom spinner', async function(assert) {
      await this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=columns api=t}}
          {{ember-tbody api=t}}
          {{#ember-table-loading-more isLoading=true api=t}}
            <span data-test-custom-spinner></span>
          {{/ember-table-loading-more}}
        {{/ember-table}}
      `);

      await wait();

      let customSpinner = document.querySelector('[data-test-custom-spinner]');
      assert.ok(customSpinner, 'Renders a custom spinner');
    });

    test('it is shown when isLoading is true', async function(assert) {
      await this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more isLoading=true api=t}}
        {{/ember-table}}
      `);

      await wait();

      assert.ok(table.loadingMore.isShown, 'Loading more indicator is shown');
    });

    test('it is not shown when isLoading is false', async function(assert) {
      await this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more isLoading=false api=t}}
        {{/ember-table}}
      `);

      await wait();

      assert.notOk(table.loadingMore.isShown, 'Loading more indicator is not shown');
    });

    test('it is included in layout when canLoadMore is true', async function(assert) {
      await this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more canLoadMore=true api=t}}
        {{/ember-table}}
      `);

      await wait();

      assert.ok(table.loadingMore.isInLayout, 'Loading more indicator included in layout');
    });

    test('it is not included in layout when canLoadMore is false', async function(assert) {
      await this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more canLoadMore=false api=t}}
        {{/ember-table}}
      `);

      await wait();

      assert.notOk(table.loadingMore.isInLayout, 'Loading more indicator not included in layout');
    });

    test('it centers the indicator in the scroll viewport', async function(assert) {
      let scrollLeft = 2000;
      let indicatorWidth = 10;

      this.set('columns', generateColumns(4, { width: 1000 }));
      await this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=columns api=t}}
          {{ember-tbody api=t}}
          {{#ember-table-loading-more isLoading=true center=true api=t}}
            <div style="display: inline-block; width: 10px; height: 10px; background: red"></div>
          {{/ember-table-loading-more}}
        {{/ember-table}}
      `);

      await wait();
      await scrollTo(table.overflow(), scrollLeft, 0);

      let expectedTranslateX = scrollLeft + (table.containerWidth - indicatorWidth) / 2;
      assert.equal(table.loadingMore.translateX, expectedTranslateX, 'X translation is correct');
    });
  });
});
