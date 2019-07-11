import { module, test as qunitTest, skip as qunitSkip } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import config from 'dummy/config/environment';

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
});
