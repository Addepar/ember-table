###*
* Tables Container
* @class
* @alias Ember.Table.TablesContainer
###
Ember.Table.TablesContainer = Ember.View.extend Ember.ResizeHandler,
  templateName: 'tables-container'
  classNames:   'tables-container'

  ###*
  * Did insert element callback
  * @memberof Ember.Table.TablesContainer
  * @instance
  * @todo Contains (Peter) hack to detect if user is using lion and scroll
  ###
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

  ###*
  * On resize callback
  * @memberof Ember.Table.TablesContainer
  * @instance
  ###
  onResize: ->
    @elementSizeDidChange()

  ###*
  * Element size did change callback
  * @memberof Ember.Table.TablesContainer
  * @instance
  ###
  elementSizeDidChange: ->
    @set 'controller._width', @$().width()
    @set 'controller._height', @$().height()

###*
* Table Container
* @class
* @alias Ember.Table.TableContainer
###
Ember.Table.TableContainer = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['table-container']
  styleBindings:  ['height', 'width']

###*
* Table Block
* @class
* @alias Ember.Table.TableBlock
* @todo This should be a mixin
###
Ember.Table.TableBlock = Ember.CollectionView.extend Ember.StyleBindingsMixin,
  classNames:     ['table-block']
  styleBindings:  ['width', 'height']
  itemViewClass:  Ember.computed.alias 'controller.tableRowViewClass'
  columns: null
  content: null
  scrollLeft: null

  ###*
  * On scroll left did change callback
  * @memberof Ember.Table.TableBlock
  * @instance
  ###
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

###*
* Lazy Table Block
* @class
* @alias Ember.Table.LazyTableBlock
###
Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend
  classNames:       ['table-block']
  styleBindings:    ['width']
  itemViewClass:    Ember.computed.alias 'controller.tableRowViewClass'
  rowHeight:        Ember.computed.alias 'controller.rowHeight'
  columns:    null
  content:    null
  scrollLeft: null
  scrollTop:  null

  ###*
  * On scroll left did change callback
  * @memberof Ember.Table.LazyTableBlock
  * @instance
  ###
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

###*
* Table Row
* @class
* @alias Ember.Table.TableRow
###
Ember.Table.TableRow = Ember.LazyItemView.extend
  templateName:   'table-row'
  classNames:     'table-row'
  classNameBindings: ['row.isActive:active', 'row.isSelected:selected']
  styleBindings:  ['width', 'height']
  row:      Ember.computed.alias 'content'
  columns:  Ember.computed.alias 'parentView.columns'
  width:    Ember.computed.alias 'controller._rowWidth'
  height:   Ember.computed.alias 'controller.rowHeight'

  ###*
  * Mouse enter callback
  * @memberof Ember.Table.TableRow
  * @instance
  * @param event jQuery event
  ###
  mouseEnter: (event) ->
    row = @get 'row'
    row.set 'isActive', yes if row

  ###*
  * Mouse leave callback
  * @memberof Ember.Table.TableRow
  * @instance
  * @param event jQuery event
  ###
  mouseLeave: (event) ->
    row = @get 'row'
    row.set 'isActive', no if row

  ###*
  * Teardown content
  * @memberof Ember.Table.TableRow
  * @instance
  ###
  teardownContent: ->
    row = @get 'row'
    row.set 'isActive', no if row

###*
* Table Cell
* @class
* @alias Ember.Table.TableCell
###
Ember.Table.TableCell = Ember.View.extend Ember.StyleBindingsMixin,
  defaultTemplate: Ember.Handlebars.compile(
    "<span class='content'>{{view.cellContent}}</span>")
  classNames:     ['table-cell']
  styleBindings:  ['width']
  row:        Ember.computed.alias 'parentView.row'
  column:     Ember.computed.alias 'content'
  rowContent: Ember.computed.alias 'row.content'
  width:      Ember.computed.alias 'column.columnWidth'

  ###*
  * Computed Cell Content
  * @memberof Ember.Table.TableCell
  * @instance
  ###
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

###*
* HeaderBlock
* @class
* @alias Ember.Table.HeaderBlock
* @augments Ember.Table.TableBlock
###
Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend
  classNames:    ['header-block']
  itemViewClass: 'Ember.Table.HeaderRow'

  ###*
  * Computed Content
  * @memberof Ember.Table.HeaderBlock
  * @instance
  ###
  content: Ember.computed ->
    [@get('columns')]
  .property 'columns'

###*
* Header Row
* @class
* @alias Ember.Table.HeaderRow
###
Ember.Table.HeaderRow = Ember.View.extend Ember.StyleBindingsMixin,
  templateName:   'header-row'
  classNames:     ['table-row', 'header-row']
  styleBindings:  ['height', 'width']
  columns: Ember.computed.alias 'content'
  height:  Ember.computed.alias 'controller.headerHeight'
  width:   Ember.computed.alias 'controller._tableColumnsWidth'

  ###*
  * Options for jQuery UI sortable
  * @memberof Ember.Table.HeaderRow
  * @instance
  ###
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

  ###*
  * Did insert element callback
  * @memberof Ember.Table.HeaderRow
  * @instance
  ###
  didInsertElement: ->
    @_super()
    @$('> div').sortable(@get('sortableOption'))

  ###*
  * On column sort callback
  * @memberof Ember.Table.HeaderRow
  * @instance
  * @argument event jQuery event
  * @argument ui
  ###
  onColumnSort: (event, ui) ->
    newIndex = ui.item.index()
    view     = Ember.View.views[ui.item.attr('id')]
    columns  = @get 'columns'
    column   = view.get 'column'
    columns.removeObject column
    columns.insertAt newIndex, column

###*
* Header Cell
* @class
* @alias Ember.Table.HeaderCell
###
Ember.Table.HeaderCell = Ember.View.extend Ember.StyleBindingsMixin,
  templateName:   'header-cell'
  classNames:     ['table-cell', 'header-cell']
  styleBindings:  ['width', 'height']
  column:         Ember.computed.alias 'content'
  width:          Ember.computed.alias 'column.columnWidth'
  height:         Ember.computed.alias 'controller.headerHeight'

  ###*
  * jQuery UI resizable option
  * @memberof Ember.Table.HeaderCell
  * @instance
  ###
  resizableOption: Ember.computed ->
    handles: 'e'
    minHeight: 40
    minWidth: @get("column.minWidth") || 100
    maxWidth: @get("column.maxWidth") || 500
    resize: jQuery.proxy(@onColumnResize, this)
    stop: jQuery.proxy(@onColumnResize, this)
  .property()

  ###*
  * Did insert element callback
  * @memberof Ember.Table.HeaderCell
  * @instance
  ###
  didInsertElement: ->
    fluid = @get("controller.fluidTable")
    if !fluid || (fluid and @get("column._nextColumn"))
      @$().resizable(@get('resizableOption'))
      @_resizableWidget = @$().resizable('widget')

  ###*
  * On column resize callback
  * @memberof Ember.Table.HeaderCell
  * @instance
  * @argument event jQuery event
  ###
  onColumnResize: (event, ui) ->
    max = @get("column").resize(ui.size.width)
    @$().resizable("option", "maxWidth", max) if max

################################################################################

###*
* Header Table Container
* @class
* @alias Ember.Table.HeaderTableContainer
* @augments Ember.Table.TableContainer
###
Ember.Table.HeaderTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.TouchMoveHandlerMixin,
  templateName:   'header-container'
  classNames:     ['table-container', 'fixed-table-container',
                   'header-container']
  height:         Ember.computed.alias 'controller.headerHeight'
  width:          Ember.computed.alias 'controller._tableContainerWidth'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'

  ###*
  * On mouse wheel callback - handle and stop propagation
  * @memberof Ember.Table.HeaderTableContainer
  * @instance
  * @argument event jQuery event
  * @argument delta
  * @argument deltaX {Integer}
  * @argument deltaY {Integer}
  ###
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

  ###*
  * On touch move callback - handle and stop propagation
  * @memberof Ember.Table.HeaderTableContainer
  * @instance
  * @argument event jQuery event
  * @argument deltaX
  * @argument deltaY
  ###
  onTouchMove: (event, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

###*
* Body Table Container
* @class
* @alias Ember.Table.BodyTableContainer
###
Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.TouchMoveHandlerMixin,
Ember.ScrollHandlerMixin,
  templateName:   'body-container'
  classNames:     ['table-container', 'body-container']
  height:         Ember.computed.alias 'controller._bodyHeight'
  width:          Ember.computed.alias 'controller._width'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'

  ###*
  * On scroll top did change observer
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  ###
  onScrollTopDidChange: Ember.observer ->
    @$().scrollTop @get('scrollTop')
  , 'scrollTop'

  ###*
  * On scroll callback
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  * @argument event jQuery event
  ###
  onScroll: (event) ->
    @set 'scrollTop', event.target.scrollTop
    event.preventDefault()

  ###*
  * On mouse wheel callback callback
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  * @argument event jQuery event
  * @argument delta
  * @argument deltaX {Integer}
  * @argument deltaY {Integer}
  ###
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    return unless Math.abs(deltaX) > Math.abs(deltaY)
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

  ###*
  * On touch move callback
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  * @argument event jQuery event
  * @argument deltaX {Integer}
  * @argument deltaY {Integer}
  ###
  onTouchMove: (event, deltaX, deltaY) ->
    return unless Math.abs(deltaX) > Math.abs(deltaY)
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

###*
* Footer Table Container
* @class
* @alias Ember.Table.FooterTableContainer
###
Ember.Table.FooterTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.TouchMoveHandlerMixin,
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
  onTouchMove: (event, deltaX, deltaY) ->
    scrollLeft = @$('.right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

###*
* Scroll Container
* @class
* @alias Ember.Table.ScrollContainer
###
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

  ###*
  * On scroll callback
  * @memberof Ember.Table.ScrollContainer
  * @instance
  * @argument event jQuery event
  ###
  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
    event.preventDefault()

  ###*
  * On scroll left did change observer
  * @memberof Ember.Table.ScrollContainer
  * @instance
  ###
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

###*
* ScrollPanel
* @class
* @alias Ember.Table.ScrollPanel
###
Ember.Table.ScrollPanel = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['scroll-panel']
  styleBindings:  ['width', 'height']
  width:   Ember.computed.alias 'controller._tableColumnsWidth'
  height:  Ember.computed.alias 'controller._tableContentHeight'
