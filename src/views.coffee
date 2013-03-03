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
    @set 'controller._tableScrollTop', 0
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
  styleBindings:  ['width', 'height']
  itemViewClass:  Ember.computed.alias 'controller.tableRowViewClass'
  columns: null
  content: null
  scrollLeft: null
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend
  classNames:       ['table-block']
  styleBindings:    ['width']
  itemViewClass:    Ember.computed.alias 'controller.tableRowViewClass'
  rowHeight:        Ember.computed.alias 'controller.rowHeight'
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
  classNameBindings: ['row.isActive:active', 'row.isSelected:selected']
  styleBindings:  ['width', 'height']
  row:      Ember.computed.alias 'content'
  columns:  Ember.computed.alias 'parentView.columns'
  width:    Ember.computed.alias 'controller._rowWidth'
  height:   Ember.computed.alias 'controller.rowHeight'
  mouseEnter: (event) ->
    row = @get 'row'
    row.set 'isActive', yes if row
  mouseLeave: (event) ->
    row = @get 'row'
    row.set 'isActive', no if row
  teardownContent: ->
    row = @get 'row'
    row.set 'isActive', no if row

Ember.Table.TableCell = Ember.View.extend Ember.StyleBindingsMixin,
  defaultTemplate: Ember.Handlebars.compile(
    "<span class='content'>{{view.cellContent}}</span>")
  classNames:     ['table-cell']
  styleBindings:  ['width']
  row:        Ember.computed.alias 'parentView.row'
  column:     Ember.computed.alias 'content'
  rowContent: Ember.computed.alias 'row.content'
  width:      Ember.computed.alias 'column.columnWidth'

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
  columns: Ember.computed.alias 'content'
  height:  Ember.computed.alias 'controller.headerHeight'

  # options for jQuery UI sortable
  sortableOption: Ember.computed ->
    axis: 'x'
    cursor: 'pointer'
    helper: 'clone'
    containment: 'parent'
    placeholder: 'ui-state-highlight'
    scroll: true
    tolerance: 'pointer'
    update: jQuery.proxy(@onColumnSort, this)
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
  column:         Ember.computed.alias 'content'
  width:          Ember.computed.alias 'column.columnWidth'
  height:         Ember.computed.alias 'controller.headerHeight'

  # jQuery UI resizable option
  resizableOption: Ember.computed ->
    handles: 'e'
    minHeight: 40
    minWidth: 100
    maxWidth: 500
    resize: jQuery.proxy(@onColumnResize, this)
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
  height:         Ember.computed.alias 'controller.headerHeight'
  width:          Ember.computed.alias 'controller._tableContainerWidth'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.ScrollHandlerMixin,
  templateName:   'body-container'
  classNames:     ['table-container', 'body-container']
  height:         Ember.computed.alias 'controller._bodyHeight'
  width:          Ember.computed.alias 'controller._width'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  onScrollTopDidChange: Ember.observer ->
    @$().scrollTop @get('scrollTop')
  , 'scrollTop'
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
  styleBindings:  ['top']
  height:         Ember.computed.alias 'controller.footerHeight'
  width:          Ember.computed.alias 'controller._tableContainerWidth'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  top: Ember.computed ->
    headerHeight  = @get 'controller.headerHeight'
    contentHeight = @get('controller._tableContentHeight') + headerHeight
    bodyHeight    = @get('controller._bodyHeight') + headerHeight
    if contentHeight < bodyHeight then contentHeight else bodyHeight
  .property('controller._bodyHeight', 'controller.headerHeight'
            'controller._tableContentHeight')
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.ScrollContainer =
Ember.View.extend Ember.StyleBindingsMixin, Ember.ScrollHandlerMixin,
  template: Ember.Handlebars.compile("{{view Ember.Table.ScrollPanel}}")
  classNames:     'scroll-container'
  styleBindings:  ['top', 'left', 'width', 'height']
  width:          Ember.computed.alias 'controller._scrollContainerWidth'
  height:         Ember.computed.alias 'controller._scrollContainerHeight'
  top:            Ember.computed.alias 'controller.headerHeight'
  left:           Ember.computed.alias 'controller._fixedColumnsWidth'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
    event.preventDefault()
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

Ember.Table.ScrollPanel = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['scroll-panel']
  styleBindings:  ['width', 'height']
  width:   Ember.computed.alias 'controller._tableColumnsWidth'
  height:  Ember.computed.alias 'controller._tableContentHeight'
