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

    assert.strictEqual(getScale(div), 1, 'scale on a simple element is correct');

    div.style.transform = 'scale(0.5)';

    assert.strictEqual(getScale(div), 2, 'scale on a scaled element is correct');

    div.style.height = '1.5px';

    assert.strictEqual(getScale(div), 2, 'scale on a scaled element is correct');
  });

  test('gets an integer when a scale is very close to its rounded integer value', function(assert) {
    let div = document.createElement('div');
    div.style.height = '4px';
    this.element.append(div);

    assert.strictEqual(getScale(div), 1, 'scale on a simple element is correct');

    div.style.transform = 'scale(1.000001)';

    assert.strictEqual(getScale(div), 1, 'scale on a scaled element is correct');

    div.style.height = '1.5px';

    assert.strictEqual(getScale(div), 1, 'scale on a scaled element is correct');
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

  test('can get the scale of element with table header', function(assert) {
    let table = document.createElement('table');
    table.style.borderSpacing = '0';

    let thead = document.createElement('thead');
    table.append(thead);

    let row = document.createElement('tr');
    row.style.lineHeight = '8.5px';
    row.style.height = '8.5px';
    let cell = document.createElement('td');
    cell.style.padding = '0px';
    cell.textContent = 'header cell';
    row.append(cell);
    thead.append(row);

    let tbody = document.createElement('tbody');
    tbody.style.borderTopWidth = '1px';
    tbody.style.borderTopStyle = 'solid';
    table.append(tbody);

    for (let i = 0; i < 50; i++) {
      let row = document.createElement('tr');
      row.style.lineHeight = '40px';
      row.style.height = '40px';
      let cell = document.createElement('td');
      cell.style.padding = '0px';
      cell.textContent = `cell ${i}`;
      row.append(cell);
      tbody.append(row);
    }

    this.element.append(table);

    assert.strictEqual(getScale(table), 1, 'scale on a simple element is correct');

    table.style.transform = 'scale(0.5)';

    assert.strictEqual(getScale(table), 2, 'scale on a scaled element is correct');
  });

  /*
   * For very large numbers of items and rows, Chrome seems to start to
   * yield internally inconsistent values between computed height and
   * offset height. Assert that we've covered that case.
   */
  test('can get the scale of element with table header and extraordinary item count and height', function(assert) {
    let table = document.createElement('table');
    table.style.borderSpacing = '0';

    let thead = document.createElement('thead');
    table.append(thead);

    let row = document.createElement('tr');
    row.style.lineHeight = '1.5px';
    row.style.height = '1.5px';
    let cell = document.createElement('td');
    cell.style.padding = '0px';
    cell.textContent = 'header cell';
    row.append(cell);
    thead.append(row);

    let tbody = document.createElement('tbody');
    tbody.style.borderTopWidth = '1px';
    tbody.style.borderTopStyle = 'solid';
    table.append(tbody);

    /*
     * This pushes the height of the box above 7 digits, which
     * seems to reliably trigger the internal bug is triggered.
     * It has been observed on macOS at a lower value of 500k.
     */
    for (let i = 0; i < 250; i++) {
      let row = document.createElement('tr');
      row.style.lineHeight = '4000px';
      row.style.height = '4000px';
      let cell = document.createElement('td');
      cell.style.padding = '0px';
      cell.textContent = `cell ${i}`;
      row.append(cell);
      tbody.append(row);
    }

    this.element.append(table);

    assert.strictEqual(getScale(table), 1, 'scale on a simple element is correct');

    table.style.transform = 'scale(0.5)';

    assert.strictEqual(getScale(table), 2, 'scale on a scaled element is correct');
  });
});
