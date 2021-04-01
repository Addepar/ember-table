import MetaCache from 'ember-table/-private/meta-cache';
import { module, test } from 'qunit';

let metaCache;

module('Unit | Private | MetaCache', function(hooks) {
  hooks.beforeEach(function() {
    metaCache = new MetaCache();
  });

  test('it behaves like Map with no keyPath set', function(assert) {
    let a = { id: 1 };
    let b = { id: 1 };

    metaCache.set(a, 1);
    assert.equal(metaCache.get(a), 1, 'gets value by added object key');
    assert.ok(metaCache.has(a), 'contains added object key');
    assert.equal(metaCache.get(b), undefined, 'gets undefined value when object key unknown');
    assert.notOk(metaCache.has(b), 'does not contain unknown object key');

    metaCache.delete(a);
    assert.equal(metaCache.get(a), undefined, 'gets undefined value when object key removed');
    assert.notOk(metaCache.has(a), 'does not contain removed object key');
  });

  test('it uses keyPath for cache lookup', function(assert) {
    let a = { id: 1 };
    let b = { id: 1 };

    metaCache.keyPath = 'id';

    metaCache.set(a, 1);
    assert.equal(metaCache.get(a), 1, 'gets value by added object key');
    assert.ok(metaCache.has(a), 'contains added object key');
    assert.equal(metaCache.get(b), 1, 'gets same value with equivalent object key');
    assert.ok(metaCache.has(b), 'contains equivalent object key');

    metaCache.delete(a);
    assert.equal(metaCache.get(a), undefined, 'gets undefined value when object key removed');
    assert.notOk(metaCache.has(a), 'does not contain removed object key');
    assert.equal(metaCache.get(b), undefined, 'gets undefined value when equivalent key removed');
    assert.notOk(metaCache.has(b), 'does not contain equivalent object key');
  });
});
