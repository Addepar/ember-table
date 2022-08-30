import TablePage from './pages/ember-table';
import registerWaiter from 'ember-raf-scheduler/test-support/register-waiter';
import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody/component';
import { setupTHeadForTest } from 'ember-table/components/ember-thead/component';
import { setSimpleCheckboxForTest } from 'ember-table/components/ember-td/component';

function setupForTest() {
  registerWaiter();
  setSetupRowCountForTest(true);
  setupTHeadForTest(true);
  setSimpleCheckboxForTest(true);
}

export { TablePage, setupForTest };
