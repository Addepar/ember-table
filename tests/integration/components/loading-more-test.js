import { module, test } from 'qunit';
import { componentModule } from '../../helpers/module';
import TablePage from 'ember-table/test-support/pages/ember-table';
import hbs from 'htmlbars-inline-precompile';
import { render, settled } from '@ember/test-helpers';
import { generateColumns } from '../../helpers/generate-table';
import scrollTo from '../../helpers/scroll-to';

let table = new TablePage();

module('Integration | loading more', function() {
  componentModule('basic', function() {
    test('it renders a custom spinner', async function(assert) {
      await render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=this.columns api=t}}
          {{ember-tbody api=t}}
          {{#ember-table-loading-more isLoading=true api=t}}
            <span data-test-custom-spinner></span>
          {{/ember-table-loading-more}}
        {{/ember-table}}
      `);

      await settled();

      let customSpinner = document.querySelector('[data-test-custom-spinner]');
      assert.ok(customSpinner, 'Renders a custom spinner');
    });

    test('it is shown when isLoading is true', async function(assert) {
      await render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=this.columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more isLoading=true api=t}}
        {{/ember-table}}
      `);

      await settled();

      assert.ok(table.loadingMore.isShown, 'Loading more indicator is shown');
    });

    test('it is not shown when isLoading is false', async function(assert) {
      await render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=this.columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more isLoading=false api=t}}
        {{/ember-table}}
      `);

      await settled();

      assert.notOk(table.loadingMore.isShown, 'Loading more indicator is not shown');
    });

    test('it is included in layout when canLoadMore is true', async function(assert) {
      await render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=this.columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more canLoadMore=true api=t}}
        {{/ember-table}}
      `);

      await settled();

      assert.ok(table.loadingMore.isIncludedInLayout, 'Loading more indicator included in layout');
    });

    test('it is not included in layout when canLoadMore is false', async function(assert) {
      await render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=this.columns api=t}}
          {{ember-tbody api=t}}
          {{ember-table-loading-more canLoadMore=false api=t}}
        {{/ember-table}}
      `);

      await settled();

      assert.notOk(
        table.loadingMore.isIncludedInLayout,
        'Loading more indicator not included in layout'
      );
    });

    test('it centers the indicator in the scroll viewport', async function(assert) {
      let scrollLeft = 2000;
      let indicatorWidth = 10;

      this.set('columns', generateColumns(4, { width: 1000 }));
      await render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead columns=this.columns api=t}}
          {{ember-tbody api=t}}
          {{#ember-table-loading-more isLoading=true center=true api=t}}
            <div style="display: inline-block; width: 10px; height: 10px; background: red"></div>
          {{/ember-table-loading-more}}
        {{/ember-table}}
      `);

      await settled();
      await scrollTo(table.overflow(), scrollLeft, 0);

      let expectedTranslateX = scrollLeft + (table.containerWidth - indicatorWidth) / 2;
      assert.equal(table.loadingMore.translateX, expectedTranslateX, 'X translation is correct');
    });
  });
});
