import TablePage from './pages/ember-table';

import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody/component';
import { setSimpleCheckboxForTest } from 'ember-table/components/ember-td/component';

function setupForTest() {
  setSetupRowCountForTest(true);
  setSimpleCheckboxForTest(true);
}

export { TablePage, setupForTest };
