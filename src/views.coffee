Ember.Table.TablesContainer = Ember.View.extend Ember.StyleBindingsMixin, Ember.ResizeHandler,
  templateName:   'tables-container'
  classNames:     'tables-container'
  styleBindings:  ['height']
  height:         Ember.computed.alias 'controller._tablesContainerHeight'

  didInsertElement: ->
    @_super()
    @elementSizeDidChange()
    scrollBarWidth = $.getScrollbarWidth()
    @set 'controller._scrollbarSize', scrollBarWidth
    @set 'controller._tableScrollTop', 0
  onResize: ->
    @elementSizeDidChange() if event.srcElement is window
  elementSizeDidChange: ->
    @set 'controller._width', @$().outerWidth()
    @set 'controller._height', @$().outerHeight()

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
  classNameBindings: ['row.isActive:active', 'row.isSelected:selected',
                      'row.rowStyle', 'isLastRow:last-row']
  styleBindings:  ['width', 'height']
  row:      Ember.computed.alias 'content'
  columns:  Ember.computed.alias 'parentView.columns'
  width:    Ember.computed.alias 'controller._rowWidth'
  height:   Ember.computed.alias 'controller.rowHeight'
  isLastRow: Ember.computed ->
    @get('row') is @get('controller.bodyContent.lastObject')
  .property 'controller.bodyContent.lastObject', 'row'
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
  classNames:         'table-cell'
  classNameBindings:  'column.textAlign'
  styleBindings:      'width'
  row:        Ember.computed.alias 'parentView.row'
  column:     Ember.computed.alias 'content'
  rowContent: Ember.computed.alias 'row.content'
  width:      Ember.computed.alias 'column.columnWidth'

  init: ->
    @_super.apply(this, arguments)
    @contentPathDidChange()

  contentDidChange: ->
    @notifyPropertyChange 'cellContent'

  contentPathWillChange: (->
    contentPath = @get 'column.contentPath'
    if contentPath
      @removeObserver("rowContent.#{contentPath}", this, this.contentDidChange)
  ).observesBefore 'column.contentPath'

  contentPathDidChange: (->
    contentPath = this.get 'column.contentPath'
    if contentPath
      @addObserver("rowContent.#{contentPath}", this, this.contentDidChange)
  ).observesBefore 'column.contentPath'

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

# We hacked this. There is an inconsistency at the level in which we are
# handling scroll event...
Ember.Table.HeaderRow = Ember.View.extend Ember.ScrollHandlerMixin,
  templateName:   'header-row'
  classNames:     ['table-row', 'header-row']
  columns: Ember.computed.alias 'content'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'

  # options for jQuery UI sortable
  sortableOption: Ember.computed ->
    axis: 'x'
    containment: 'parent'
    cursor: 'pointer'
    cursorAt: { left: 20, top: 20 }
    helper: 'clone'
    items: ".header-cell.sortable"
    opacity: 0.9
    placeholder: 'ui-state-highlight'
    scroll: true
    tolerance: 'intersect'
    update: jQuery.proxy(@onColumnSortDone,   this)
    stop:   jQuery.proxy(@onColumnSortStop,   this)
    sort:   jQuery.proxy(@onColumnSortChange, this)
  .property()

  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

  didInsertElement: ->
    @_super()
    @$('> div').sortable(@get('sortableOption'))

  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
    event.preventDefault()

  onColumnSortStop: (event, ui) ->
    @set 'controller._isShowingSortableIndicator', no

  onColumnSortChange: (event, ui) ->
    left = @$('.ui-state-highlight').offset().left -
           @$().closest('.tables-container').offset().left
    @set 'controller._isShowingSortableIndicator', yes
    @set 'controller._sortableIndicatorLeft', left

  onColumnSortDone: (event, ui) ->
    newIndex = ui.item.index()
    view     = Ember.View.views[ui.item.attr('id')]
    column   = view.get 'column'
    @get('controller').send 'onColumnSort', column, newIndex
    @set 'controller._isShowingSortableIndicator', no

Ember.Table.HeaderCell = Ember.View.extend Ember.StyleBindingsMixin,
  templateName:       'header-cell'
  classNames:         ['table-cell', 'header-cell']
  classNameBindings:  ['column.isSortable:sortable', 'column.textAlign']
  styleBindings:      ['width', 'height']
  column:         Ember.computed.alias 'content'
  width:          Ember.computed.alias 'column.columnWidth'
  height:         Ember.computed.alias 'controller.headerHeight'

  # jQuery UI resizable option
  resizableOption: Ember.computed ->
    handles: 'e'
    minHeight: 40
    minWidth: @get('column.minWidth') || 100
    maxWidth: @get('column.maxWidth') || 500
    grid:     @get('column.snapGrid')
    resize: jQuery.proxy(@onColumnResize, this)
    stop: jQuery.proxy(@onColumnResize, this)
  .property()

  didInsertElement: ->
    if @get('column.isResizable')
      @$().resizable(@get('resizableOption'))
      @_resizableWidget = @$().resizable('widget')

  onColumnResize: (event, ui) ->
    max = @get("column").resize(ui.size.width)
    @$().resizable("option", "maxWidth", max) if max

################################################################################

Ember.Table.AddColumnButton = Ember.View.extend Ember.StyleBindingsMixin,
  tagName: 'span'
  template: Ember.Handlebars.compile(
    '<span class="border-top"></span><a href="#">+</a>')
  styleBindings: ['height']
  classNames: 'add-column-button'
  height: Ember.computed ->
    # 20 is the table-header-cell-control-group height, 2 is for the two borders
    @get('controller.headerHeight') - 18
  .property 'controller.headerHeight'
  click: (event) ->
    @get('controller').send 'addColumn'

Ember.Table.ColumnSortableIndicator =
Ember.View.extend Ember.StyleBindingsMixin,
  classNames: 'column-sortable-indicator'
  classNameBindings: 'controller._isShowingSortableIndicator:active'
  styleBindings: ['left', 'height']
  left:   Ember.computed.alias 'controller._sortableIndicatorLeft'
  height: Ember.computed.alias 'controller._height'

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend
  templateName:   'header-container'
  classNames:     ['table-container', 'fixed-table-container',
                   'header-container']
  height:         Ember.computed.alias 'controller.headerHeight'
  width:          Ember.computed.alias 'controller._tableContainerWidth'

  # jQuery UI resizable option
  resizableOption: Ember.computed ->
    handles: 's'
    minHeight: 20
    resize: jQuery.proxy(@onColumnResize, this)
    stop: jQuery.proxy(@onColumnResize, this)
  .property()

  didInsertElement: ->
    if @get 'controller.isHeaderHeightResizable'
      @$().resizable(@get('resizableOption'))

  onColumnResize: (event, ui) ->
    @set 'controller.headerHeight', ui.size.height

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
  styleBindings:  'top'
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
