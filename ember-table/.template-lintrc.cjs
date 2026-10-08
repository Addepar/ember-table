'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    // Rows, cells and headers expose click/double-click/contextmenu handling as
    // public API (`@onClick`, `@onDoubleClick`, sorting, selection).
    'no-invalid-interactive': false,
  },
};
