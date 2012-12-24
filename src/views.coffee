Ember.Table.TablesContainer = Ember.View.extend Ember.ResizeHandler,
  templateName: 'tables-container'
  classNames:   'tables-container'
  didInsertElement: ->
    @_super()
    @elementSizeDidChange()
    # TODO(Peter): This is a hack to detect if user is using lion and scroll
    # bars are set to show when scrolling
    scrollBarWidth = $.getScrollbarWidth()
    isLion = navigator?.appVersion['10_7'] isnt -1 and scrollBarWidth is 0
    scrollBarWidth = 8 if isLion
    @set 'controller._scrollbarSize', scrollBarWidth
  onResize: ->
    @elementSizeDidChange()
  elementSizeDidChange: ->
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
  classNames:     'table-row'
  classNameBindings: ['row.active:active', 'row.selected:selected']
  styleBindings:  ['width', 'height']
  rowBinding:     'content'
  columnsBinding: 'parentView.columns'
  widthBinding:   'controller._rowWidth'
  heightBinding:  'controller.rowHeight'
  mouseEnter: (event) ->
    @set 'row.active', yes
  mouseLeave: (event) ->
    @set 'row.active', no
  teardownContent: ->
    return unless @get 'row'
    @set 'row.active', no

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
  .property 'rowContent.isLoaded', 'column'

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

Ember.Table.HeaderTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
  templateName:   'header-container'
  classNames:     ['table-container', 'fixed-table-container',
                   'header-container']
  heightBinding:  'controller.headerHeight'
  widthBinding:   'controller._tableContainerWidth'
  scrollLeftBinding:'controller._tableScrollLeft'
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.ScrollHandlerMixin, Ember.Table.RowSelectionMixin,
  templateName:   'body-container'
  classNames:     ['table-container', 'body-container']
  contentBinding:   Ember.Binding.oneWay 'controller.bodyContent'
  rowHeightBinding: Ember.Binding.oneWay 'controller.rowHeight'
  heightBinding:  'controller._bodyHeight'
  widthBinding:   'controller._width'
  scrollTopBinding:'controller._tableScrollTop'
  scrollLeftBinding:'controller._tableScrollLeft'

  numItemsShowing: Ember.computed ->
    Math.floor @get('height') / @get('rowHeight')
  .property 'height', 'rowHeight'

  startIndex: Ember.computed ->
    numContent  = @get 'content.length'
    numViews    = @get 'numItemsShowing'
    rowHeight   = @get 'rowHeight'
    scrollTop   = @get 'scrollTop'
    index = Math.floor(scrollTop / rowHeight)
    # adjust start index so that end index doesn't exceed content length
    if index + numViews >= numContent
      index = numContent - numViews
    if index < 0 then 0 else index
  .property 'content.length', 'numItemsShowing', 'rowHeight', 'scrollTop'

  onScroll: (event) ->
    @set 'scrollTop', event.target.scrollTop
    event.preventDefault()
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    return unless Math.abs(deltaX) > Math.abs(deltaY)
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.FooterTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
  templateName:   'footer-container'
  classNames:     ['table-container', 'fixed-table-container',
                  'footer-container']
  heightBinding:  'controller.footerHeight'
  widthBinding:   'controller._tableContainerWidth'
  scrollLeftBinding:'controller._tableScrollLeft'
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

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
    event.preventDefault()
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

Ember.Table.ScrollPanel = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['scroll-panel']
  styleBindings:  ['width', 'height']
  widthBinding:   'controller._tableColumnsWidth'
  heightBinding:  'controller._tableContentHeight'