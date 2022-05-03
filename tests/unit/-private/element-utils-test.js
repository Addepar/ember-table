import { module, test } from 'qunit';
import { getScale } from 'ember-table/-private/utils/element';

module('Unit | Private | element', function(hooks) {
  hooks.beforeEach(function() {
    /*
     * Use an element outside the normal test harness as that harness
     * uses scale() on the test container.
     */
    this.element = document.createElement('div');
    document.body.append(this.element);
  });

  hooks.afterEach(function() {
    this.element.remove();
  });

  test('can get the scale of a transformed element', function(assert) {
    let div = document.createElement('div');
    div.style.height = '4px';
    this.element.append(div);

    assert.equal(getScale(div), 1, 'scale on a simple element is correct');

    div.style.transform = 'scale(0.5)';

    assert.equal(getScale(div), 2, 'scale on a scaled element is correct');

    div.style.height = '1.5px';

    assert.equal(getScale(div), 2, 'scale on a scaled element is correct');
  });

  test('gets an integer when a scale is very close to its rounded integer value', function(assert) {
    let div = document.createElement('div');
    div.style.height = '4px';
    this.element.append(div);

    assert.equal(getScale(div), 1, 'scale on a simple element is correct');

    div.style.transform = 'scale(1.000001)';

    assert.equal(getScale(div), 1, 'scale on a scaled element is correct');

    div.style.height = '1.5px';

    assert.equal(getScale(div), 1, 'scale on a scaled element is correct');
  });

  test('throws if the height from getComputedStyle is diverged from offsetHeight', function(assert) {
    let div = document.createElement('div');
    div.textContent = 'aBc';
    div.style.padding = '10px';
    this.element.append(div);

    assert.throws(() => {
      getScale(div);
    });
  });
});
