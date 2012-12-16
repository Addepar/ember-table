Ember.Table.TablesContainer = Ember.View.extend Ember.ResizeHandler,
  templateName:   'tables-container'
  classNames:     ['tables-container']
  didInsertElement: ->
    @_super()
    @elementSizeDidChange()
  onResize: ->
    @elementSizeDidChange()
  elementSizeDidChange: ->
    @set 'controller._scrollbarSize', $.getScrollbarWidth()
    @set 'controller._width', @$().width()
    @set 'controller._height', @$().height()

Ember.Table.TableContainer = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['table-container']
  styleBindings:  ['height', 'width']

# This should be a mixin
Ember.Table.TableBlock = Ember.CollectionView.extend Ember.StyleBindingsMixin,
  classNames:     ['table-block']
  itemViewClass:  'Ember.Table.TableRow'
  styleBindings:  ['width', 'height']
  columns: null
  content: null
  scrollLeft: null
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend
  classNames:       ['table-block']
  itemViewClass:    'Ember.Table.TableRow'
  rowHeightBinding: 'controller.rowHeight'
  styleBindings:    ['width']
  columns:    null
  content:    null
  scrollLeft: null
  scrollTop:  null
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

Ember.Table.TableRow = Ember.LazyItemView.extend
  templateName:   'table-row'
  classNames:     ['table-row']
  styleBindings:  ['width', 'height']
  rowBinding:     'content'
  columnsBinding: 'parentView.columns'
  widthBinding:   'controller._rowWidth'
  heightBinding:  'controller.rowHeight'

Ember.Table.TableCell = Ember.View.extend Ember.StyleBindingsMixin,
  templateName:   'table-cell'
  classNames:     ['table-cell']
  styleBindings:  ['width']

  rowBinding:       'parentView.row'
  columnBinding:    'content'
  rowContentBinding:'row.content'
  widthBinding:     'column.columnWidth'

  cellContent: Ember.computed (key, value) ->
    row     = @get 'rowContent'
    column  = @get 'column'
    return unless row and column
    if arguments.length is 1
      value = column.getCellContent row
    else
      column.setCellContent row, value
    value
  .property 'rowContent', 'column'

################################################################################

Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend
  classNames:    ['header-block']
  itemViewClass: 'Ember.Table.HeaderRow'
  content: Ember.computed ->
    [@get('columns')]
  .property 'columns'

Ember.Table.HeaderRow = Ember.View.extend Ember.StyleBindingsMixin,
  templateName:   'header-row'
  classNames:     ['table-row', 'header-row']
  styleBindings:  ['height']
  columnsBinding: 'content'
  heightBinding:  'controller.headerHeight'

  # options for jQuery UI sortable
  sortableOption: Ember.computed ->
    axis: 'x'
    cursor: 'pointer'
    helper: 'clone'
    containment: 'parent'
    placeholder: 'ui-state-highlight'
    scroll: true
    tolerance: 'pointer'
    update: _.bind(@onColumnSort, this)
  .property()

  didInsertElement: ->
    @_super()
    @$('> div').sortable(@get('sortableOption'))

  onColumnSort: (event, ui) ->
    newIndex = ui.item.index()
    view     = Ember.View.views[ui.item.attr('id')]
    columns  = @get 'columns'
    column   = view.get 'column'
    columns.removeObject column
    columns.insertAt newIndex, column

Ember.Table.HeaderCell = Ember.View.extend Ember.StyleBindingsMixin,
  templateName:   'header-cell'
  classNames:     ['table-cell', 'header-cell']
  styleBindings:  ['width', 'height']
  columnBinding:  'content'
  widthBinding:   'column.columnWidth'
  heightBinding:  'controller.headerHeight'

  # jQuery UI resizable option
  resizableOption: Ember.computed ->
    handles: 'e'
    minHeight: 40
    minWidth: 100
    maxWidth: 500
    resize: _.bind(@onColumnResize, this)
  .property()

  didInsertElement: ->
    @$().resizable(@get('resizableOption'))

  onColumnResize: (event, ui) ->
    @set 'width', ui.size.width

################################################################################

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend
  templateName:   'header-container'
  classNames:     ['table-container', 'fixed-table-container',
                   'header-container']
  heightBinding:  'controller.headerHeight'
  widthBinding:   'controller._tableContainerWidth'

Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.ScrollHandlerMixin,
Ember.MouseWheelHandlerMixin,
  templateName:   'body-container'
  classNames:     ['table-container', 'body-container']
  heightBinding:  'controller._bodyHeight'
  widthBinding:   'controller._width'
  scrollTopBinding:'controller._tableScrollTop'
  scrollLeftBinding:'controller._tableScrollLeft'
  onScroll: (event) ->
    @set 'scrollTop', event.target.scrollTop
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    return unless Math.abs(deltaX) > Math.abs(deltaY)
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.FooterTableContainer = Ember.Table.TableContainer.extend
  templateName:   'footer-container'
  classNames:     ['table-container', 'fixed-table-container',
                  'footer-container']
  heightBinding:  'controller.footerHeight'
  widthBinding:   'controller._tableContainerWidth'

Ember.Table.ScrollContainer =
Ember.View.extend Ember.StyleBindingsMixin, Ember.ScrollHandlerMixin,
  templateName:     'scroll-container'
  classNames:       ['scroll-container']
  styleBindings:    ['top', 'left', 'width', 'height']
  widthBinding:     'controller._scrollContainerWidth'
  heightBinding:    'controller._scrollContainerHeight'
  topBinding:       'controller.headerHeight'
  leftBinding:      'controller._fixedColumnsWidth'
  scrollTopBinding: 'controller._tableScrollTop'
  scrollLeftBinding:'controller._tableScrollLeft'
  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

Ember.Table.ScrollPanel = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['scroll-panel']
  styleBindings:  ['width', 'height']
  widthBinding:   'controller._tableColumnsWidth'
  heightBinding:  'controller._tableContentHeight'