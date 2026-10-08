import EmberTable from 'ember-table/components/ember-table/component';
import EmberThead from 'ember-table/components/ember-thead/component';
import EmberTbody from 'ember-table/components/ember-tbody/component';
import { generateRows, generateColumns } from 'test-app/utils/generators';

const rows = generateRows(100);
const columns = generateColumns(7);

<template>
  <div class="demo-container fixed-width">
    <EmberTable as |t|>
      <EmberThead @api={{t}} @columns={{columns}} />

      <EmberTbody @api={{t}} @rows={{rows}} />
    </EmberTable>
  </div>
</template>
