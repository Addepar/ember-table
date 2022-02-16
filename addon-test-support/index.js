import TablePage from './pages/ember-table';

import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody/component';
import { setupTHeadForTest } from 'ember-table/components/ember-thead/component';

function setupForTest() {
  setSetupRowCountForTest(true);
  setupTHeadForTest(true);
}

export { TablePage, setupForTest };
