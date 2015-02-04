Ember.Table.TableContainer =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
  classNames:     ['ember-table-table-container']
  styleBindings:  ['height', 'width']


# TODO: This should be a mixin
Ember.Table.TableBlock =
Ember.CollectionView.extend Ember.AddeparMixins.StyleBindingsMixin,
Ember.Table.RegisterTableComponentMixin,
  classNames:     ['ember-table-table-block']
  styleBindings:  ['width', 'height']
  itemViewClass:  Ember.computed.alias 'tableComponent.tableRowViewClass'
  columns: null
  content: null
  scrollLeft: null

  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'

  height: Ember.computed ->
    @get('tableComponent._headerHeight')
  .property('tableComponent._headerHeight')


Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend \
Ember.Table.RegisterTableComponentMixin,
  classNames:       ['ember-table-table-block']
  styleBindings:    ['width']
  itemViewClass:    Ember.computed.alias 'tableComponent.tableRowViewClass'
  rowHeight:        Ember.computed.alias 'tableComponent.rowHeight'
  columns:    null
  content:    null
  scrollLeft: null
  scrollTop:  null

  onScrollLeftDidChange: Ember.observer ->
    @$().scrollLeft @get('scrollLeft')
  , 'scrollLeft'


Ember.Table.TableRow = Ember.LazyItemView.extend \
Ember.Table.RegisterTableComponentMixin,
  templateName:   'table-row'
  classNames:     'ember-table-table-row'
  classNameBindings: ['row.isHovered:ember-table-hover', 'row.isSelected:ember-table-selected',
                      'row.rowStyle', 'isLastRow:ember-table-last-row']
  styleBindings:  ['width', 'height']
  row:      Ember.computed.alias 'content'
  columns:  Ember.computed.alias 'parentView.columns'
  width:    Ember.computed.alias 'tableComponent._rowWidth'
  height:   Ember.computed.alias 'tableComponent.rowHeight'

  isLastRow: Ember.computed ->
    @get('row') is @get('tableComponent.bodyContent.lastObject')
  .property 'tableComponent.bodyContent.lastObject', 'row'

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
  width:      Ember.computed.alias 'column.width'

  contentDidChange: ->
    @notifyPropertyChange 'cellContent'

  contentPathWillChange: Ember.beforeObserver('column.contentPath', ->
    contentPath = @get 'column.contentPath'
    if contentPath
      @removeObserver("row.#{contentPath}", this, @contentDidChange)
  )

  contentPathDidChange: Ember.beforeObserver('column.contentPath', ->
    contentPath = @get 'column.contentPath'
    if contentPath
      @addObserver("row.#{contentPath}", this, @contentDidChange)
  )

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
Ember.Table.RegisterTableComponentMixin,
  templateName:   'header-row'
  classNames:     ['ember-table-table-row', 'ember-table-header-row']
  styleBindings: ['width']
  columns:        Ember.computed.alias 'content'
  width:          Ember.computed.alias 'tableComponent._rowWidth'
  scrollLeft:     Ember.computed.alias 'tableComponent._tableScrollLeft'

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
    if @get('tableComponent.enableColumnReorder')
      @$('> div').sortable(@get('sortableOption'))

  willDestroyElement: ->
    if @get('tableComponent.enableColumnReorder')
      @$('> div')?.sortable('destroy')
    @_super()

  onScroll: (event) ->
    @set 'scrollLeft', event.target.scrollLeft
    event.preventDefault()

  onColumnSortStop: (event, ui) ->
    @set 'tableComponent._isShowingSortableIndicator', no

  onColumnSortChange: (event, ui) ->
    left = @$('.ui-state-highlight').offset().left -
           @$().closest('.ember-table-tables-container').offset().left
    @set 'tableComponent._isShowingSortableIndicator', yes
    @set 'tableComponent._sortableIndicatorLeft', left

  onColumnSortDone: (event, ui) ->
    newIndex = ui.item.index()
    @$('> div').sortable('cancel') # Prevent jQuery UI from moving the DOM itself
    view     = Ember.View.views[ui.item.attr('id')]
    column   = view.get 'column'
    @get('tableComponent').onColumnSort column, newIndex
    @set 'tableComponent._isShowingSortableIndicator', no


Ember.Table.HeaderCell =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
Ember.Table.RegisterTableComponentMixin,

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

  column: Ember.computed.alias 'content'
  width: Ember.computed.alias 'column.width'
  minWidth: Ember.computed.alias 'column.minWidth'
  maxWidth: Ember.computed.alias 'column.maxWidth'
  nextResizableColumn: Ember.computed.alias 'column.nextResizableColumn'
  height: Ember.computed.alias 'tableComponent._headerHeight'

  effectiveMinWidth: Ember.computed ->
    return @get('minWidth') if @get('tableComponent.columnMode') is 'standard'
    nextColumnMaxDiff = @get('nextResizableColumn.maxWidth') -
      @get('nextResizableColumn.width')
    if @get('minWidth') and nextColumnMaxDiff
      return Math.min(@get('minWidth'),
        @get('width') - nextColumnMaxDiff)
    else if @get('minWidth')
      return @get('minWidth')
    else
      return @get('width') - nextColumnMaxDiff
  .property('width', 'minWidth', 'tableComponent.columnMode',
    'nextResizableColumn.{width,maxWidth}')

  effectiveMaxWidth: Ember.computed ->
    return @get('maxWidth') if @get('tableComponent.columnMode') is 'standard'
    nextColumnMaxDiff = @get('nextResizableColumn.width') -
      @get('nextResizableColumn.minWidth')
    if @get('maxWidth') and not Ember.isNone(nextColumnMaxDiff)
      return Math.min(@get('maxWidth'), @get('width') +
        nextColumnMaxDiff)
    else if @get('maxWidth')
      return @get('maxWidth')
    else
      return @get('width') + nextColumnMaxDiff
  .property('width', 'minWidth', 'tableComponent.columnMode',
    'nextResizableColumn.{width,minWidth}')

  # jQuery UI resizable option
  resizableOption: Ember.computed ->
    handles: 'e'
    # We need about 10px as absolute minimums for the columns
    minWidth: Math.max(@get('effectiveMinWidth') or 0, 10)
    maxWidth: @get('effectiveMaxWidth')
    # TODO(azirbel): This is unexpected and needs documentation or removal
    grid:     @get('column.snapGrid')
    resize: jQuery.proxy(@onColumnResize, this)
    stop:   jQuery.proxy(@onColumnResize, this)
  .property 'effectiveMinWidth', 'effectiveMaxWidth'

  didInsertElement: ->
    @elementSizeDidChange()
    @recomputeResizableHandle()

  willDestroyElement: ->
    @$().resizable('destroy') if @$().is('.ui-resizable')
    @_super()

  _isResizable: Ember.computed ->
    if @get('tableComponent.columnMode') is 'standard'
      @get('column.isResizable')
    else
      @get('column.isResizable') and @get('nextResizableColumn')
  .property('column.isResizable', 'tableComponent.columnMode',
    'nextResizableColumn')

  # `event` here is a jQuery event
  onColumnResize: (event, ui) ->
    if @get('tableComponent.columnMode') is 'standard'
      @get('column').resize(ui.size.width)
      @set 'tableComponent.columnsFillTable', no
    else
      diff = @get('width') - ui.size.width
      @get('column').resize(ui.size.width)
      @get('nextResizableColumn').resize(
        @get('nextResizableColumn.width') + diff)

    @elementSizeDidChange()

    # Trigger the table resize (and redraw of layout) when resizing is done
    if event.type is 'resizestop'
      this.get('tableComponent').elementSizeDidChange()
    return

  elementSizeDidChange: ->
    maxHeight = 0
    # TODO(Louis): This seems bad...
    $('.ember-table-header-block .ember-table-content').each ->
      thisHeight = $(this).outerHeight()
      if thisHeight > maxHeight then maxHeight = thisHeight
    @set 'tableComponent._contentHeaderHeight', maxHeight

  resizableObserver: Ember.observer ->
    @recomputeResizableHandle()
  , 'resizableOption', 'column.isResizable', 'tableComponent.columnMode', \
    'nextResizableColumn'

  recomputeResizableHandle: ->
    if @get('_isResizable')
      @$().resizable(@get('resizableOption'))
    else
      @$().resizable('destroy') if @$().is('.ui-resizable')


Ember.Table.ColumnSortableIndicator =
Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
Ember.Table.RegisterTableComponentMixin,
  classNames: 'ember-table-column-sortable-indicator'
  classNameBindings: 'tableComponent._isShowingSortableIndicator:active'
  styleBindings: ['left', 'height']
  left:   Ember.computed.alias 'tableComponent._sortableIndicatorLeft'
  height: Ember.computed.alias 'tableComponent._height'


Ember.Table.HeaderTableContainer =
Ember.Table.TableContainer.extend Ember.Table.ShowHorizontalScrollMixin,
Ember.Table.RegisterTableComponentMixin,
  templateName: 'header-container'
  classNames:   ['ember-table-table-container',
                 'ember-table-fixed-table-container',
                 'ember-table-header-container']
  height:       Ember.computed.alias 'tableComponent._headerHeight'
  width:        Ember.computed.alias 'tableComponent._tableContainerWidth'


Ember.Table.BodyTableContainer =
Ember.Table.TableContainer.extend Ember.MouseWheelHandlerMixin,
Ember.TouchMoveHandlerMixin, Ember.ScrollHandlerMixin,
Ember.Table.ShowHorizontalScrollMixin, Ember.Table.RegisterTableComponentMixin,
  templateName:   'body-container'
  classNames:     ['ember-table-table-container', 'ember-table-body-container',
                   'antiscroll-wrap']
  height:         Ember.computed.alias 'tableComponent._bodyHeight'
  width:          Ember.computed.alias 'tableComponent._width'
  scrollTop:      Ember.computed.alias 'tableComponent._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'tableComponent._tableScrollLeft'
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
Ember.Table.RegisterTableComponentMixin,
  templateName:   'footer-container'
  classNames:     ['ember-table-table-container',
                   'ember-table-fixed-table-container',
                   'ember-table-footer-container']
  styleBindings:  'top'
  height:         Ember.computed.alias 'tableComponent.footerHeight'
  width:          Ember.computed.alias 'tableComponent._tableContainerWidth'
  scrollLeft:     Ember.computed.alias 'tableComponent._tableScrollLeft'
  top: Ember.computed ->
    headerHeight  = @get 'tableComponent._headerHeight'
    contentHeight = @get('tableComponent._tableContentHeight') + headerHeight
    bodyHeight    = @get('tableComponent._bodyHeight') + headerHeight
    if contentHeight < bodyHeight then contentHeight else bodyHeight
  .property('tableComponent._bodyHeight', 'tableComponent._headerHeight'
            'tableComponent._tableContentHeight')

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
Ember.ScrollHandlerMixin, Ember.Table.RegisterTableComponentMixin,
  templateName: 'scroll-container'
  classNames:     ['ember-table-scroll-container']
  styleBindings:  ['left', 'width', 'height']
  scrollElementSelector: '.antiscroll-inner'
  width:          Ember.computed.alias 'tableComponent._scrollContainerWidth'
  # 10 is the height of the horizontal scrollbar
  height:         10
  left:           Ember.computed.alias 'tableComponent._fixedColumnsWidth'
  scrollTop:      Ember.computed.alias 'tableComponent._tableScrollTop'
  scrollLeft:     Ember.computed.alias 'tableComponent._tableScrollLeft'

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
Ember.Table.RegisterTableComponentMixin,
  classNames:     ['ember-table-scroll-panel']
  styleBindings:  ['width', 'height']
  width:   Ember.computed.alias 'tableComponent._tableColumnsWidth'
  height:  Ember.computed.alias 'tableComponent._tableContentHeight'
