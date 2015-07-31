import ColumnDefinition from 'ember-table/models/column-definition';

export default ColumnDefinition.extend({
	headerCellName: "",
    // savedWidth: 240,
    canAutoResize: true,
    isTreeColumn: true,
    isSortable: false,
    textAlign: 'text-align-left',
    headerCellView: 'sg-treetable-header-tree-cell',
    tableCellView: 'sg-treetable-tree-cell',
    contentPath: 'content'
});