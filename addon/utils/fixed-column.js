import Ember from 'ember';

const getHeaderCellStyle = function getHeaderCellStyle(width, columnIndex, fixedColumnWidth) {
  if (width == undefined || typeof(width) !== 'number') {
    width = 100
  }

  let style = `min-width: ${width}px; max-width: ${width}px;`

  // fixedColumnWidth > 0 means this column is a fixed column.
  if (fixedColumnWidth > 0) {
    if (columnIndex === 0) {
      style = `${style} position: absolute; background: white; z-index: 1;`
    } else if (columnIndex === 1) {
      style = `${style} margin-left: ${fixedColumnWidth}px; display: block;`;
    }
  }

  return Ember.String.htmlSafe(style);
}

export {
  getHeaderCellStyle
};
