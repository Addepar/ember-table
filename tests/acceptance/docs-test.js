import { module, test as qunitTest, skip as qunitSkip } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import config from 'dummy/config/environment';
import TablePage from 'ember-table/test-support/pages/ember-table';

let skip = (msg, ...args) =>
  qunitSkip(`Skip because ember-cli-addon-docs is not installed. ${msg}`, ...args);
let test = config.ADDON_DOCS_INSTALLED ? qunitTest : skip;

module('Acceptance | docs', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting / redirects to /docs', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/docs');
  });

  test('pages linked to by /docs nav all render', async function(assert) {
    await visit('/docs');

    let nav = this.element.querySelector('nav');
    assert.ok(!!nav, 'nav exists');

    let links = Array.from(nav.querySelectorAll('a')).filter(link =>
      link.getAttribute('href').startsWith('/docs')
    );
    assert.ok(links.length > 0, `${links.length} nav links found`);
    for (let link of links) {
      let href = link.getAttribute('href');
      await visit(href);
      assert.ok(true, `Visited ${href} successfully`);
      await visit('/docs'); // start over
    }
  });

  test('subcolumns docs renders cell content', async function(assert) {
    let DemoTable = TablePage.extend({
      scope: '[data-test-demo="docs-example-subcolumns"] [data-test-ember-table]',
    });

    await visit('/docs/guides/header/subcolumns');
    let table = new DemoTable();
    assert.equal(table.header.headers.objectAt(0).text, 'A', 'first header cell renders correctly');
    assert.equal(
      table.body.rows.objectAt(0).cells.objectAt(0).text,
      'A A',
      'first body cell renders correclty'
    );
  });
});
