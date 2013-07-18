Ember.Table.TablesContainer = Ember.View.extend Ember.StyleBindingsMixin, Ember.ResizeHandler,
  templateName:   'tables-container'
  classNames:     ['ember-table-tables-container']
  styleBindings:  ['height']
  height:         Ember.computed.alias 'controller._tablesContainerHeight'

  didInsertElement: ->
    @_super()
    @set 'controller._tableScrollTop', 0
    @elementSizeDidChange()
    # we need to wait for the table to be fully rendered before antiscroll can
    # be used
    Ember.run.next this, @updateAntiscroll

  onBodyContentDidChange: Ember.observer ->
    return unless @get('state') is 'inDOM'
    Ember.run.next this, @updateAntiscroll
  , 'controller.bodyContent'

  onResizeEnd: ->
    @elementSizeDidChange()
    Ember.run.next this, @updateAntiscroll

  updateAntiscroll: -> this.$('.antiscroll-wrap').antiscroll()

  elementSizeDidChange: ->
    @set 'controller._width', @$().parent().outerWidth()
    @set 'controller._height', @$().parent().outerHeight()

Ember.Table.TableContainer = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['ember-table-table-container']
  styleBindings:  ['height', 'width']

# This should be a mixin
Ember.Table.TableBlock = Ember.CollectionView.extend Ember.StyleBindingsMixin,
  classNames:     ['ember-table-table-block']
  styleBindings:  ['width', 'height']
  itemViewClass:  Ember.computed.alias 'controller.tableRowViewClass'
  columns: null
  content: null
  scrollLeft: null
  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'
  height: Ember.computed ->
    @get('controller._headerHeight')
  .property('controller._headerHeight')

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend
  classNames:       ['ember-table-table-block']
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
  classNames:     'ember-table-table-row'
  classNameBindings: ['row.isActive:active', 'row.isSelected:ember-table-selected',
                      'row.rowStyle', 'isLastRow:ember-table-last-row']
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
    "<span class='ember-table-content'>{{view.cellContent}}</span>")
  classNames:         ['ember-table-table-cell']
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
  classNames:    ['ember-table-header-block']
  itemViewClass: 'Ember.Table.HeaderRow'
  content: Ember.computed ->
    [@get('columns')]
  .property 'columns'

# We hacked this. There is an inconsistency at the level in which we are
# handling scroll event...
Ember.Table.HeaderRow = Ember.View.extend Ember.ScrollHandlerMixin,
  templateName:   'header-row'
  classNames:     ['ember-table-table-row', 'ember-table-header-row']
  columns:        Ember.computed.alias 'content'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'

  # options for jQuery UI sortable
  sortableOption: Ember.computed ->
    axis: 'x'
    containment: 'parent'
    cursor: 'pointer'
    cursorAt: { left: 20, top: 20 }
    helper: 'clone'
    items: ".ember-table-header-cell.sortable"
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
           @$().closest('.ember-table-tables-container').offset().left
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
  classNames:         ['ember-table-table-cell', 'ember-table-header-cell']
  classNameBindings:  ['column.isSortable:sortable', 'column.textAlign']
  styleBindings:      ['width', 'height']
  column:         Ember.computed.alias 'content'
  width:          Ember.computed.alias 'column.columnWidth'
  height: Ember.computed ->
    @get('controller._headerHeight')
  .property('controller._headerHeight')

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
    @elementSizeDidChange()
    if @get('column.isResizable')
      @$().resizable(@get('resizableOption'))
      @_resizableWidget = @$().resizable('widget')

  onColumnResize: (event, ui) ->
    @elementSizeDidChange()
    @get("column").resize(ui.size.width)
    # TODO(Louis): Have Peter look at this.. this doesn't seem to work?
    # @$().resizable("option", "maxWidth", max) if max

  elementSizeDidChange: ->
    maxHeight = 0
    # TODO(Louis): This seems bad...
    $('.ember-table-header-block .ember-table-content').each ->
      thisHeight = $(this).outerHeight()
      if thisHeight > maxHeight then maxHeight = thisHeight
    @set 'controller._contentHeaderHeight', maxHeight

################################################################################

Ember.Table.AddColumnButton = Ember.View.extend Ember.StyleBindingsMixin,
  tagName: 'span'
  template: Ember.Handlebars.compile(
    '<span>+</span>')
  styleBindings: ['height', 'width']
  classNames: 'ember-table-add-column-button'
  height: Ember.computed ->
    # Add
    @get('controller._headerHeight') + 1
  .property 'controller._headerHeight'
  width: Ember.computed ->
    26
    # Is null, ask Peter why?
    # @get('controller._scrollbarSize')
    # scrollbarWidth = $.getScrollbarWidth()
    # Minimum 13px width of plus button
    # if scrollbarWidth < 26 then 26 else scrollbarWidth
  click: (event) ->
    @get('controller').send 'addColumn'

Ember.Table.ColumnSortableIndicator =
Ember.View.extend Ember.StyleBindingsMixin,
  classNames: 'ember-table-column-sortable-indicator'
  classNameBindings: 'controller._isShowingSortableIndicator:active'
  styleBindings: ['left', 'height']
  left:   Ember.computed.alias 'controller._sortableIndicatorLeft'
  height: Ember.computed.alias 'controller._height'

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend
  templateName: 'header-container'
  classNames:   ['ember-table-table-container',
                 'ember-table-fixed-table-container',
                 'ember-table-header-container']
  height:       Ember.computed.alias 'controller._headerHeight'
  width:        Ember.computed.alias 'controller._tableContainerWidth'

Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.ScrollHandlerMixin,
  templateName:   'body-container'
  classNames:     ['ember-table-table-container', 'ember-table-body-container',
                   'antiscroll-wrap']
  height:         Ember.computed.alias 'controller._bodyHeight'
  width:          Ember.computed.alias 'controller._width'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  scrollElementSelector: '.antiscroll-inner'
  firefoxScrollDistance:  52

  onScrollTopDidChange: Ember.observer ->
    @$().scrollTop @get('scrollTop')
  , 'scrollTop'

  mouseEnter: (event) ->
    $tablesContainer = $(event.target).parents('.ember-table-tables-container')
    $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal')
    $horizontalScroll.addClass('antiscroll-scrollbar-shown')

  mouseLeave: (event) ->
    $tablesContainer = $(event.target).parents('.ember-table-tables-container')
    $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal')
    $horizontalScroll.removeClass('antiscroll-scrollbar-shown')

  onScroll: (event) ->
    @set 'scrollTop', event.target.scrollTop
    event.preventDefault()

  onMouseWheel: (event, delta, deltaX, deltaY) ->
    return unless Math.abs(deltaX) > Math.abs(deltaY)
    scrollLeft = @$('.ember-table-right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.FooterTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
  templateName:   'footer-container'
  classNames:     ['ember-table-table-container',
                   'ember-table-fixed-table-container',
                   'ember-table-footer-container']
  styleBindings:  'top'
  height:         Ember.computed.alias 'controller.footerHeight'
  width:          Ember.computed.alias 'controller._tableContainerWidth'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  top: Ember.computed ->
    headerHeight  = @get 'controller._headerHeight'
    contentHeight = @get('controller._tableContentHeight') + headerHeight
    bodyHeight    = @get('controller._bodyHeight') + headerHeight
    if contentHeight < bodyHeight then contentHeight else bodyHeight
  .property('controller._bodyHeight', 'controller._headerHeight'
            'controller._tableContentHeight')
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    scrollLeft = @$('.ember-table-right-table-block').scrollLeft() + deltaX * 50
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

Ember.Table.ScrollContainer =
Ember.View.extend Ember.StyleBindingsMixin, Ember.ScrollHandlerMixin,
  template: Ember.Handlebars.compile(
    '<div class="antiscroll-wrap"><div class="antiscroll-inner">{{view Ember.Table.ScrollPanel}}</div></div>')
  classNames:     ['ember-table-scroll-container']
  styleBindings:  ['left', 'width', 'height']
  scrollElementSelector: '.antiscroll-inner'
  width:          Ember.computed.alias 'controller._scrollContainerWidth'
  # 10 is the height of the horizontal scrollbar
  height:         10
  left:           Ember.computed.alias 'controller._fixedColumnsWidth'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
    event.preventDefault()
  onScrollLeftDidChange: Ember.observer ->
    selector = @get('scrollElementSelector')
    this.$(selector).scrollLeft @get('scrollLeft')
  , 'scrollLeft', 'scrollElementSelector'

Ember.Table.ScrollPanel = Ember.View.extend Ember.StyleBindingsMixin,
  classNames:     ['ember-table-scroll-panel']
  styleBindings:  ['width', 'height']
  width:   Ember.computed.alias 'controller._tableColumnsWidth'
  height:  Ember.computed.alias 'controller._tableContentHeight'
