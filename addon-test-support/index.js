import TablePage from './pages/ember-table';
import registerWaiter from 'ember-raf-scheduler/test-support/register-waiter';
import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody';
import { setupTHeadForTest } from 'ember-table/components/ember-thead';
import { setSimpleCheckboxForTest } from 'ember-table/components/ember-td';

function setupForTest() {
  registerWaiter();
  setSetupRowCountForTest(true);
  setupTHeadForTest(true);
  setSimpleCheckboxForTest(true);
}

export { TablePage, setupForTest };
