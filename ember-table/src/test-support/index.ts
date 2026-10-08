import TablePage from './pages/ember-table.ts';
import { setSetupRowCountForTest } from '../components/ember-tbody/component.gts';
import { setupTHeadForTest } from '../components/ember-thead/component.gts';
import { setSimpleCheckboxForTest } from '../components/ember-td/component.gts';

function setupForTest(): void {
  setSetupRowCountForTest(true);
  setupTHeadForTest(true);
  setSimpleCheckboxForTest(true);
}

export { TablePage, setupForTest };

// Page object helpers, for extending `TablePage` (see the "Testing" docs).
export { default as PageObject } from './-private/page-object.ts';
export { collection } from './-private/collection.ts';
export { findElement, findElementWithAssert } from './-private/find-element.ts';
export {
  attribute,
  blurrable,
  clickOnText,
  clickable,
  contains,
  count,
  fillable,
  hasClass,
  isHidden,
  isPresent,
  isVisible,
  notHasClass,
  property,
  text,
  triggerable,
  value,
} from 'ember-cli-page-object';
export { alias } from 'ember-cli-page-object/macros';
