import EmberTableRow from '../components/ember-table-row';
import Component from '@ember/component';

export default class CustomRow extends EmberTableRow {
  classNames = ['et-tr', 'custom-row']
}
