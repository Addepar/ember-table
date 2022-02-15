import TablePage from './pages/ember-table';

import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody/component';
import { setupTHeadForTest } from 'ember-table/components/ember-thead/component';
import { setSimpleCheckboxForTest } from 'ember-table/components/ember-td/component';

function setupForTest() {
  setSetupRowCountForTest(true);
  setupTHeadForTest(true);
  setSimpleCheckboxForTest(true);
}

export { TablePage, setupForTest };
