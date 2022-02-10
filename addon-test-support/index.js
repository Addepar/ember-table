import TablePage from './pages/ember-table';

import { setSetupRowCountForTest } from 'ember-table/components/ember-tbody/component';

function setupForTest() {
  setSetupRowCountForTest(true);
}

export { TablePage, setupForTest };
