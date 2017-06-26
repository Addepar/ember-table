import Ember from 'ember';

const PRESS_OFFSET_THRESHOLD = 5;

export default Ember.Component.extend({
  tagName: 'th',
  attributeBindings: ['style:style'],

  /**
   * X position where user last touches this component.
   */
  touchX: -1,

  /**
   * A variable used for column resizing. When user press mouse at a point that's close to column
   * boundary (using some threshold), this variable set whether it's the left or right column.
   */
  touchLineType: '',

  /**
   * Indicates if this header column can be resized or not. It's false by default.
   */
  enableColumnResize: false,

  hammer: null,

  didInsertElement() {
    this._super(...arguments);

    const hammer = new Hammer(this.element);
    this.set('hammer', hammer)

    hammer.add(new Hammer.Press({ time: 10 }));
    hammer.on('press', (ev) => {
      if (!this.get('enableColumnResize')) {
        this.onTap(ev)
        return
      }

      const box = ev.target.getBoundingClientRect();
      if (box.right - ev.pointers[0].clientX < PRESS_OFFSET_THRESHOLD) {
        this.set('touchLineType', 'right');
      } else if (ev.pointers[0].clientX - box.left < PRESS_OFFSET_THRESHOLD) {
        this.set('touchLineType', 'left');
      } else {
        this.onTap(ev)
      }

      this.set('touchX', ev.pointers[0].clientX)
    })

    hammer.on('pressup', (ev) => {
      this.set('touchLineType', '')
    })

    hammer.on('panmove', (ev) => {
      const touchLineType = this.get('touchLineType');

      if (touchLineType == 'right') {
        this.sendAction('onColumnBoundaryPanned', this.get('index'),
          ev.pointers[0].clientX - this.get('touchX'), true)
      } else if (touchLineType == 'left') {
        this.sendAction('onColumnBoundaryPanned', this.get('index'),
          ev.pointers[0].clientX - this.get('touchX'), false)
      }

      this.set('touchX', ev.pointers[0].clientX)
    })
  },

  willDestroyElement() {
    const hammer = this.get('hammer')

    hammer.off('press')
    hammer.off('pressup')
    hammer.off('panmove')

    this._super(...arguments);
  },

  onTap(ev) {
    this.sendAction('onHeaderClicked', this.get('index'))
  },

  style: Ember.computed('width', function(){
    let width = this.get('width')
    if (width == undefined || typeof(width) !== 'number') {
      width = 100
    }

    return `min-width: ${width}px; max-width: ${width}px;`
  })
});
