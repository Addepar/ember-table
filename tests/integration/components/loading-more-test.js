import { module, test } from 'qunit';
import { componentModule } from '../../helpers/module';
import TablePage from 'ember-table/test-support/pages/ember-table';
import hbs from 'htmlbars-inline-precompile';
import { render, settled } from '@ember/test-helpers';
import { generateColumns } from '../../helpers/generate-table';
import { scrollTo } from '@ember/test-helpers';

let table = new TablePage();

module('Integration | loading more', function() {
  componentModule('basic', function() {
    test('it renders a custom spinner', async function(assert) {
      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @columns={{this.columns}} @api={{t}} />
          <EmberTbody @api={{t}} />
          <EmberTableLoadingMore @isLoading={{true}} @api={{t}}>
            <span data-test-custom-spinner></span>
          </EmberTableLoadingMore>
        </EmberTable>
      `);

      await settled();

      assert.dom('[data-test-custom-spinner]').exists('Renders a custom spinner');
    });

    test('it is shown when isLoading is true', async function(assert) {
      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @columns={{this.columns}} @api={{t}} />
          <EmberTbody @api={{t}} />
          <EmberTableLoadingMore @isLoading={{true}} @api={{t}} />
        </EmberTable>
      `);

      await settled();

      assert.true(table.loadingMore.isShown, 'Loading more indicator is shown');
    });

    test('it is not shown when isLoading is false', async function(assert) {
      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @columns={{this.columns}} @api={{t}} />
          <EmberTbody @api={{t}} />
          <EmberTableLoadingMore @isLoading={{false}} @api={{t}} />
        </EmberTable>
      `);

      await settled();

      assert.false(table.loadingMore.isShown, 'Loading more indicator is not shown');
    });

    test('it is included in layout when canLoadMore is true', async function(assert) {
      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @columns={{this.columns}} @api={{t}} />
          <EmberTbody @api={{t}} />
          <EmberTableLoadingMore @canLoadMore={{true}} @api={{t}} />
        </EmberTable>
      `);

      await settled();

      assert.true(
        table.loadingMore.isIncludedInLayout,
        'Loading more indicator included in layout'
      );
    });

    test('it is not included in layout when canLoadMore is false', async function(assert) {
      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @columns={{this.columns}} @api={{t}} />
          <EmberTbody @api={{t}} />
          <EmberTableLoadingMore @canLoadMore={{false}} @api={{t}} />
        </EmberTable>
      `);

      await settled();

      assert.false(
        table.loadingMore.isIncludedInLayout,
        'Loading more indicator not included in layout'
      );
    });

    test('it centers the indicator in the scroll viewport', async function(assert) {
      let scrollLeft = 2000;
      let indicatorWidth = 10;

      this.set('columns', generateColumns(4, { width: 1000 }));
      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @columns={{this.columns}} @api={{t}} />
          <EmberTbody @api={{t}} />
          <EmberTableLoadingMore @isLoading={{true}} @center={{true}} @api={{t}}>
            <div style="display: inline-block; width: 10px; height: 10px; background: red"></div>
          </EmberTableLoadingMore>
        </EmberTable>
      `);

      await settled();
      await scrollTo(table.overflow(), scrollLeft, 0);

      let expectedTranslateX = scrollLeft + (table.containerWidth - indicatorWidth) / 2;
      assert.strictEqual(
        table.loadingMore.translateX,
        expectedTranslateX,
        'X translation is correct'
      );
    });
  });
});
