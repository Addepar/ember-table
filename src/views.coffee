Ember.Table.TableContainer =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
  classNames:     ['ember-table-table-container']
  styleBindings:  ['height', 'width']


# TODO: This should be a mixin
Ember.Table.TableBlock =
Ember.CollectionView.extend Ember.AddeparMixins.StyleBindingsMixin,
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
  classNameBindings: ['row.isHovered:ember-table-hover', 'row.isSelected:ember-table-selected',
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
    row.set 'isHovered', yes if row

  mouseLeave: (event) ->
    row = @get 'row'
    row.set 'isHovered', no if row

  teardownContent: ->
    row = @get 'row'
    row.set 'isHovered', no if row


Ember.Table.TableCell =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,

  # ---------------------------------------------------------------------------
  # API - Inputs
  # ---------------------------------------------------------------------------

  # TODO: Doc
  templateName:       'table-cell'
  classNames:         ['ember-table-cell']
  classNameBindings:  'column.textAlign'
  styleBindings:      'width'

  # ---------------------------------------------------------------------------
  # Internal properties
  # ---------------------------------------------------------------------------

  init: ->
    @_super()
    @contentPathDidChange()
    @contentDidChange()

  row:        Ember.computed.alias 'parentView.row'
  column:     Ember.computed.alias 'content'
  width:      Ember.computed.alias 'column.columnWidth'

  contentDidChange: ->
    @notifyPropertyChange 'cellContent'

  contentPathWillChange: (->
    contentPath = @get 'column.contentPath'
    if contentPath
      @removeObserver("row.#{contentPath}", this, this.contentDidChange)
  ).observesBefore 'column.contentPath'

  contentPathDidChange: (->
    contentPath = this.get 'column.contentPath'
    if contentPath
      @addObserver("row.#{contentPath}", this, this.contentDidChange)
  ).observesBefore 'column.contentPath'

  cellContent: Ember.computed (key, value) ->
    row     = @get 'row'
    column  = @get 'column'
    return unless row and column
    if arguments.length is 1
      value = column.getCellContent row
    else
      column.setCellContent row, value
    value
  .property 'row.isLoaded', 'column'


Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend
  classNames:    ['ember-table-header-block']
  itemViewClass: 'Ember.Table.HeaderRow'

  content: Ember.computed ->
    [@get('columns')]
  .property 'columns'


# We hacked this. There is an inconsistency at the level in which we are
# handling scroll event...
Ember.Table.HeaderRow =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
  templateName:   'header-row'
  classNames:     ['ember-table-table-row', 'ember-table-header-row']
  styleBindings: ['width']
  columns:        Ember.computed.alias 'content'
  width:          Ember.computed.alias 'controller._rowWidth'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'

  # Options for jQuery UI sortable
  sortableOption: Ember.computed ->
    axis: 'x'
    containment: 'parent'
    cursor: 'move'
    helper: 'clone'
    items: ".ember-table-header-cell.sortable"
    opacity: 0.9
    placeholder: 'ui-state-highlight'
    scroll: true
    tolerance: 'intersect'
    update: jQuery.proxy(@onColumnSortDone,   this)
    stop:   jQuery.proxy(@onColumnSortStop,   this)
    sort:   jQuery.proxy(@onColumnSortChange, this)

  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

  didInsertElement: ->
    @_super()
    if @get('controller.enableColumnReorder')
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
    @get('controller').onColumnSort column, newIndex
    @set 'controller._isShowingSortableIndicator', no


Ember.Table.HeaderCell =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,

  # ---------------------------------------------------------------------------
  # API - Inputs
  # ---------------------------------------------------------------------------

  # TODO: Doc
  templateName:       'header-cell'
  classNames:         ['ember-table-cell', 'ember-table-header-cell']
  classNameBindings:  ['column.isSortable:sortable', 'column.textAlign']
  styleBindings:      ['width', 'height']

  # ---------------------------------------------------------------------------
  # Internal properties
  # ---------------------------------------------------------------------------

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

  didInsertElement: ->
    @elementSizeDidChange()
    if @get('column.isResizable')
      @$().resizable(@get('resizableOption'))
      @_resizableWidget = @$().resizable('widget')
      return

  # `event` here is a jQuery event
  onColumnResize: (event, ui) ->
    @elementSizeDidChange()
    # Special case for force-filled columns: if this is the last column you
    # resize (or the only column), then it will be reset to before the resize
    # to preserve the table's force-fill property.
    if @get('controller.forceFillColumns') and
        @get('controller.columns').filterProperty('canAutoResize').length > 1
      @set('column.canAutoResize', false)
    @get("column").resize(ui.size.width)

  elementSizeDidChange: ->
    maxHeight = 0
    # TODO(Louis): This seems bad...
    $('.ember-table-header-block .ember-table-content').each ->
      thisHeight = $(this).outerHeight()
      if thisHeight > maxHeight then maxHeight = thisHeight
    @set 'controller._contentHeaderHeight', maxHeight
    return


Ember.Table.ColumnSortableIndicator =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
  classNames: 'ember-table-column-sortable-indicator'
  classNameBindings: 'controller._isShowingSortableIndicator:active'
  styleBindings: ['left', 'height']
  left:   Ember.computed.alias 'controller._sortableIndicatorLeft'
  height: Ember.computed.alias 'controller._height'


Ember.Table.HeaderTableContainer =
Ember.Table.TableContainer.extend Ember.Table.ShowHorizontalScrollMixin,
  templateName: 'header-container'
  classNames:   ['ember-table-table-container',
                 'ember-table-fixed-table-container',
                 'ember-table-header-container']
  height:       Ember.computed.alias 'controller._headerHeight'
  width:        Ember.computed.alias 'controller._tableContainerWidth'


Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.TouchMoveHandlerMixin, Ember.ScrollHandlerMixin,
Ember.Table.ShowHorizontalScrollMixin,
  templateName:   'body-container'
  classNames:     ['ember-table-table-container', 'ember-table-body-container',
                   'antiscroll-wrap']
  height:         Ember.computed.alias 'controller._bodyHeight'
  width:          Ember.computed.alias 'controller._width'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'
  scrollElementSelector: '.antiscroll-inner'

  # `event` here is a jQuery event
  onScroll: (event) ->
    @set 'scrollTop', event.target.scrollTop
    event.preventDefault()

  # `event` here is a jQuery event
  onMouseWheel: (event, delta, deltaX, deltaY) ->
    return unless Math.abs(deltaX) > Math.abs(deltaY)
    scrollLeft = @$('.ember-table-right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

  onTouchMove: (event, deltaX, deltaY) ->
    return unless (Math.abs(deltaX) > Math.abs(deltaY))
    scrollLeft = @$('.ember-table-right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()


Ember.Table.FooterTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.TouchMoveHandlerMixin, Ember.Table.ShowHorizontalScrollMixin,
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
    scrollLeft = @$('.ember-table-right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()

  onTouchMove: (event, deltaX, deltaY) ->
    scrollLeft = @$('.ember-table-right-table-block').scrollLeft() + deltaX
    @set 'scrollLeft', scrollLeft
    event.preventDefault()


Ember.Table.ScrollContainer =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
Ember.ScrollHandlerMixin,
  templateName: 'scroll-container'
  classNames:     ['ember-table-scroll-container']
  styleBindings:  ['left', 'width', 'height']
  scrollElementSelector: '.antiscroll-inner'
  width:          Ember.computed.alias 'controller._scrollContainerWidth'
  # 10 is the height of the horizontal scrollbar
  height:         10
  left:           Ember.computed.alias 'controller._fixedColumnsWidth'
  scrollTop:      Ember.computed.alias 'controller._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'controller._tableScrollLeft'

  # HACK: onScrollLeftDidChange will not fire unless scrollLeft has been get
  # at least once. Therefore, we want to call onScrollLeftDidChange in
  # didInsertElement
  didInsertElement: ->
    @_super()
    @onScrollLeftDidChange()

  # `event` here is a jQuery event
  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
    event.preventDefault()

  onScrollLeftDidChange: Ember.observer ->
    selector = @get('scrollElementSelector')
    @$(selector).scrollLeft @get('scrollLeft')
  , 'scrollLeft', 'scrollElementSelector'


Ember.Table.ScrollPanel = Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
  classNames:     ['ember-table-scroll-panel']
  styleBindings:  ['width', 'height']
  width:   Ember.computed.alias 'controller._tableColumnsWidth'
  height:  Ember.computed.alias 'controller._tableContentHeight'
