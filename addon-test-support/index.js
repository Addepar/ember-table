import TablePage from './pages/ember-table';
import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody';
import { setupTHeadForTest } from 'ember-table/components/ember-thead';
import { setSimpleCheckboxForTest } from 'ember-table/components/ember-td';

function setupForTest() {
  setSetupRowCountForTest(true);
  setupTHeadForTest(true);
  setSimpleCheckboxForTest(true);
}

export { TablePage, setupForTest };
