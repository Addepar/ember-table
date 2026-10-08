import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import EmberTable from 'ember-table/components/ember-table/component';
import EmberThead from 'ember-table/components/ember-thead/component';
import EmberTbody from 'ember-table/components/ember-tbody/component';
import EmberTr from 'ember-table/components/ember-tr/component';
import EmberTh from 'ember-table/components/ember-th/component';
import EmberTd from 'ember-table/components/ember-td/component';
import type { EmberTableRow, EmberTableSort } from 'ember-table';
import { generateRows, generateColumns } from 'test-app/utils/generators';

// Not `eq`: on Ember 7.1+ Glint reads that as the built-in keyword, but the
// app still runs on Ember 6.4, which lacks it.
const isEqual = (a: unknown, b: unknown) => a === b;

function buildRows() {
  let rows = generateRows(10, 3, (row, key) => `${row.id}${key}`);
  rows[0]!.children![0]!.children![0]!.children = generateRows(10, 1, (row, key) => `${row.id}${key}`);
  return rows;
}

function buildColumns() {
  let columns = generateColumns(20);

  columns[0]!.width = 300;
  columns[0]!.isResizable = false;
  columns[0]!.isReorderable = false;

  columns[1]!.subcolumns = generateColumns(3);
  columns[1]!.subcolumns[0]!.isReorderable = false;
  columns[1]!.subcolumns[1]!.isResizable = false;
  columns[1]!.subcolumns[2]!.isSortable = false;

  return columns;
}

class PerformanceScenario extends Component {
  // Cell values come from `unknownProperty`, not DummyRow's own fields.
  rows: EmberTableRow[] = buildRows();
  columns = buildColumns();

  @tracked selection?: EmberTableRow | EmberTableRow[];
  @tracked sorts: EmberTableSort[] = [];

  @action onSelect(selection: EmberTableRow | EmberTableRow[]) {
    this.selection = selection;
  }

  @action onUpdateSorts(sorts: EmberTableSort[]) {
    this.sorts = sorts;
  }

  <template>
    <div class="demo-container fixed-width">
      <EmberTable as |t|>
        <EmberThead
          @api={{t}}
          @columns={{this.columns}}
          @sorts={{this.sorts}}
          @onUpdateSorts={{this.onUpdateSorts}}
          as |h|
        >
          <EmberTr @api={{h}} as |r|>
            <EmberTh @api={{r}} />
          </EmberTr>
        </EmberThead>

        <EmberTbody
          @api={{t}}
          @rows={{this.rows}}
          @selection={{this.selection}}
          @onSelect={{this.onSelect}}
          as |b|
        >
          <EmberTr @api={{b}} as |r|>
            <EmberTd @api={{r}} as |value _column _row _cellMeta columnMeta|>
              {{value}}

              {{#if (isEqual columnMeta.index 0)}}lorem ipsum dolor{{/if}}
            </EmberTd>
          </EmberTr>
        </EmberTbody>
      </EmberTable>
    </div>
  </template>
}

<template>
  <PerformanceScenario />
</template>
