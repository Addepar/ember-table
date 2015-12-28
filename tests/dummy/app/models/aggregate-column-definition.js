import ColumnDefinition from 'ember-table/models/column-definition';

export default ColumnDefinition.extend({
	savedWidth: 100,
    headerCellView: 'sg-treetable-header-cell',
    tableCellView: 'sg-treetable-cell',
});