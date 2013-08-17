/*! ember-table 2013-08-17 */
(function(e, t, n) {
    function i(n, s) {
        if (!t[n]) {
            if (!e[n]) {
                var o = "function" == typeof require && require;
                if (!s && o) return o(n, !0);
                if (r) return r(n, !0);
                throw new Error("Cannot find module '" + n + "'");
            }
            var u = t[n] = {
                exports: {}
            };
            e[n][0].call(u.exports, function(t) {
                var r = e[n][1][t];
                return i(r ? r : t);
            }, u, u.exports);
        }
        return t[n].exports;
    }
    for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
    return i;
})({
    1: [ function() {
        /*
jQuery.browser shim that makes HT working with jQuery 1.8+
*/
        jQuery.browser || function() {
            var browser, matched;
            return matched = void 0, browser = void 0, jQuery.uaMatch = function(ua) {
                var match;
                return ua = ua.toLowerCase(), match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [], 
                {
                    browser: match[1] || "",
                    version: match[2] || "0"
                };
            }, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, 
            browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), 
            jQuery.browser = browser;
        }();
    }, {} ],
    2: [ function() {
        (function($) {
            return $.getScrollbarWidth = function() {
                var $div, $textarea1, $textarea2, scrollbarWidth;
                return scrollbarWidth = 0, scrollbarWidth || ($.browser.msie ? ($textarea1 = $('<textarea cols="10" rows="2"></textarea>').css({
                    position: "absolute",
                    top: -1e3,
                    left: -1e3
                }).appendTo("body"), $textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({
                    position: "absolute",
                    top: -1e3,
                    left: -1e3
                }).appendTo("body"), scrollbarWidth = $textarea1.width() - $textarea2.width(), $textarea1.add($textarea2).remove()) : ($div = $("<div />").css({
                    width: 100,
                    height: 100,
                    overflow: "auto",
                    position: "absolute",
                    top: -1e3,
                    left: -1e3
                }).prependTo("body").append("<div />").find("div").css({
                    width: "100%",
                    height: 200
                }), scrollbarWidth = 100 - $div.width(), $div.parent().remove())), scrollbarWidth;
            };
        })(jQuery);
    }, {} ],
    3: [ function() {
        var debounce;
        Ember.ResizeHandler = Ember.Mixin.create({
            resizeEndDelay: 200,
            resizing: !1,
            onResizeStart: Ember.K,
            onResizeEnd: Ember.K,
            onResize: Ember.K,
            debounceResizeEnd: Ember.computed(function() {
                var _this = this;
                return debounce(function(event) {
                    return _this.isDestroyed ? void 0 : (_this.set("resizing", !1), "function" == typeof _this.onResizeEnd ? _this.onResizeEnd(event) : void 0);
                }, this.get("resizeEndDelay"));
            }).property("resizeEndDelay"),
            resizeHandler: Ember.computed(function() {
                return jQuery.proxy(this.handleWindowResize, this);
            }).property(),
            handleWindowResize: function(event) {
                return this.get("resizing") || (this.set("resizing", !0), "function" == typeof this.onResizeStart && this.onResizeStart(event)), 
                "function" == typeof this.onResize && this.onResize(event), this.get("debounceResizeEnd")(event);
            },
            didInsertElement: function() {
                return this._super(), $(window).bind("resize", this.get("resizeHandler"));
            },
            willDestroy: function() {
                return $(window).unbind("resize", this.get("resizeHandler")), this._super();
            }
        }), debounce = function(func, wait, immediate) {
            var result, timeout;
            return timeout = result = null, function() {
                var args, callNow, context, later;
                return context = this, args = arguments, later = function() {
                    return timeout = null, immediate ? void 0 : result = func.apply(context, args);
                }, callNow = immediate && !timeout, clearTimeout(timeout), timeout = setTimeout(later, wait), 
                callNow && (result = func.apply(context, args)), result;
            };
        };
    }, {} ],
    4: [ function() {
        Ember.StyleBindingsMixin = Ember.Mixin.create({
            concatenatedProperties: [ "styleBindings" ],
            attributeBindings: [ "style" ],
            unitType: "px",
            createStyleString: function(styleName, property) {
                var value;
                return value = this.get(property), void 0 !== value ? ("number" === Ember.typeOf(value) && (value += this.get("unitType")), 
                "" + styleName + ":" + value + ";") : void 0;
            },
            applyStyleBindings: function() {
                var lookup, properties, styleBindings, styleComputed, styles, _this = this;
                return (styleBindings = this.styleBindings) ? (lookup = {}, styleBindings.forEach(function(binding) {
                    var property, style, _ref;
                    return _ref = binding.split(":"), property = _ref[0], style = _ref[1], lookup[style || property] = property;
                }), styles = Ember.keys(lookup), properties = styles.map(function(style) {
                    return lookup[style];
                }), styleComputed = Ember.computed(function() {
                    var styleString, styleTokens;
                    return styleTokens = styles.map(function(style) {
                        return _this.createStyleString(style, lookup[style]);
                    }), styleString = styleTokens.join(""), 0 !== styleString.length ? styleString : void 0;
                }), styleComputed.property.apply(styleComputed, properties), Ember.defineProperty(this, "style", styleComputed)) : void 0;
            },
            init: function() {
                return this.applyStyleBindings(), this._super();
            }
        });
    }, {} ],
    5: [ function() {
        Ember.LazyContainerView = Ember.ContainerView.extend(Ember.StyleBindingsMixin, {
            classNames: "lazy-list-container",
            styleBindings: [ "height" ],
            content: null,
            itemViewClass: null,
            rowHeight: null,
            scrollTop: null,
            startIndex: null,
            init: function() {
                return this._super(), this.onNumChildViewsDidChange();
            },
            height: Ember.computed(function() {
                return this.get("content.length") * this.get("rowHeight");
            }).property("content.length", "rowHeight"),
            numChildViews: Ember.computed(function() {
                return this.get("numItemsShowing") + 2;
            }).property("numItemsShowing"),
            onNumChildViewsDidChange: Ember.observer(function() {
                var itemViewClass, newNumViews, numViewsToInsert, oldNumViews, view, viewsToAdd, viewsToRemove, _results;
                return view = this, itemViewClass = Ember.get(this.get("itemViewClass")), newNumViews = this.get("numChildViews"), 
                itemViewClass && newNumViews ? (oldNumViews = this.get("length"), numViewsToInsert = newNumViews - oldNumViews, 
                0 > numViewsToInsert ? (viewsToRemove = this.slice(newNumViews, oldNumViews), this.removeObjects(viewsToRemove)) : numViewsToInsert > 0 ? (viewsToAdd = function() {
                    _results = [];
                    for (var _i = 0; numViewsToInsert >= 0 ? numViewsToInsert > _i : _i > numViewsToInsert; numViewsToInsert >= 0 ? _i++ : _i--) _results.push(_i);
                    return _results;
                }.apply(this).map(function() {
                    return view.createChildView(itemViewClass);
                }), this.pushObjects(viewsToAdd)) : void 0) : void 0;
            }, "numChildViews", "itemViewClass"),
            viewportDidChange: Ember.observer(function() {
                var clength, content, numShownViews, startIndex;
                return content = this.get("content") || [], clength = content.get("length"), numShownViews = Math.min(this.get("length"), clength), 
                startIndex = this.get("startIndex"), startIndex + numShownViews >= clength && (startIndex = clength - numShownViews), 
                this.forEach(function(childView, i) {
                    var item, itemIndex;
                    return i >= numShownViews ? (childView = this.objectAt(i), childView.set("content", null), 
                    void 0) : (itemIndex = startIndex + i, childView = this.objectAt(itemIndex % numShownViews), 
                    item = content.objectAt(itemIndex), item !== childView.get("content") ? (childView.teardownContent(), 
                    childView.set("itemIndex", itemIndex), childView.set("content", item), childView.prepareContent()) : void 0);
                }, this);
            }, "content.length", "length", "startIndex")
        }), Ember.LazyItemView = Ember.View.extend(Ember.StyleBindingsMixin, {
            itemIndex: null,
            prepareContent: Ember.K,
            teardownContent: Ember.K,
            rowHeightBinding: "parentView.rowHeight",
            styleBindings: [ "width", "top", "display" ],
            top: Ember.computed(function() {
                return this.get("itemIndex") * this.get("rowHeight");
            }).property("itemIndex", "rowHeight"),
            display: Ember.computed(function() {
                return this.get("content") ? void 0 : "none";
            }).property("content")
        });
    }, {} ],
    6: [ function() {
        Ember.MultiItemViewCollectionView = Ember.CollectionView.extend({
            itemViewClassField: null,
            createChildView: function(view, attrs) {
                var itemViewClass, itemViewClassField;
                return itemViewClassField = this.get("itemViewClassField"), itemViewClass = attrs.content.get(itemViewClassField), 
                "string" == typeof itemViewClass && (itemViewClass = Ember.get(Ember.lookup, itemViewClass)), 
                this._super(itemViewClass, attrs);
            }
        }), Ember.MouseWheelHandlerMixin = Ember.Mixin.create({
            onMouseWheel: Ember.K,
            didInsertElement: function() {
                var _this = this;
                return this._super(), this.$().bind("mousewheel", function(event, delta, deltaX, deltaY) {
                    return Ember.run(_this, _this.onMouseWheel, event, delta, deltaX, deltaY);
                });
            },
            willDestroy: function() {
                var _ref;
                return null != (_ref = this.$()) && _ref.unbind("mousewheel"), this._super();
            }
        }), Ember.ScrollHandlerMixin = Ember.Mixin.create({
            onScroll: Ember.K,
            didInsertElement: function() {
                var _this = this;
                return this._super(), this.$().bind("scroll", function(event) {
                    return Ember.run(_this, _this.onScroll, event);
                });
            },
            willDestroy: function() {
                var _ref;
                return null != (_ref = this.$()) && _ref.unbind("scroll"), this._super();
            }
        });
    }, {} ],
    7: [ function() {
        Ember.Table = Ember.Namespace.create(), Ember.Table.ColumnDefinition = Ember.Object.extend({
            headerCellName: null,
            resize: function(pxWidth, tableWidth) {
                var diff, newMaxWidth, newWidth, nextCol, oldWidth, percent;
                return newMaxWidth = null, tableWidth = tableWidth || this.get("controller._tableContainerWidth"), 
                this.get("controller.fluidTable") ? tableWidth ? (percent = function(val) {
                    return "string" == typeof val ? +val.replace("%", "") : 100 * val / tableWidth;
                }, oldWidth = percent(this.get("columnWidth")), newWidth = "number" == typeof pxWidth ? percent(pxWidth) : oldWidth, 
                nextCol = this.get("_nextColumn"), nextCol && (diff = oldWidth - newWidth + percent(nextCol.get("columnWidth")), 
                nextCol.set("columnWidth", diff / 100 * tableWidth), newMaxWidth = (newWidth + diff) / 100 * tableWidth - 100), 
                this.set("columnWidth", newWidth / 100 * tableWidth), this.notifyPropertyChange("columnWidth"), 
                newMaxWidth) : void 0 : (pxWidth && this.set("columnWidth", pxWidth), null);
            },
            _convertColumnToWidth: Ember.beforeObserver(function() {
                var tableWidth;
                if (this.get("controller.fluidTable")) return tableWidth = this.get("controller._tableContainerWidth"), 
                tableWidth ? this.set("columnWidth", 100 * (this.get("columnWidth") / tableWidth) + "%") : void 0;
            }, "controller._tableContainerWidth"),
            _resizeToTable: Ember.observer(function() {
                return this.resize();
            }, "controller._tableContainerWidth"),
            columnWidth: 150,
            headerCellViewClass: "Ember.Table.HeaderCell",
            tableCellViewClass: "Ember.Table.TableCell",
            getCellContent: function(row) {
                var path;
                return path = this.get("contentPath"), Ember.assert("You must either provide a contentPath or override getCellContent in your column definition", null != path), 
                Ember.get(row, path);
            },
            setCellContent: Ember.K
        }), Ember.Table.Row = Ember.ObjectProxy.extend({
            content: null,
            isHovering: !1,
            isSelected: !1,
            isShowing: !0,
            isActive: !1
        }), Ember.Table.RowArrayProxy = Ember.ArrayProxy.extend({
            tableRowClass: null,
            content: null,
            rowContent: Ember.computed(function() {
                return [];
            }).property(),
            objectAt: function(idx) {
                var item, row, tableRowClass;
                return (row = this.get("rowContent")[idx]) ? row : (tableRowClass = this.get("tableRowClass"), 
                item = this.get("content").objectAt(idx), row = tableRowClass.create({
                    content: item
                }), this.get("rowContent")[idx] = row, row);
            }
        }), Ember.Table.TableController = Ember.Controller.extend({
            columns: null,
            numFixedColumns: 0,
            numFooterRow: 0,
            rowHeight: 30,
            headerHeight: 50,
            footerHeight: 30,
            hasHeader: !0,
            hasFooter: !0,
            tableRowViewClass: "Ember.Table.TableRow",
            fluidTable: !1,
            bodyContent: Ember.computed(function() {
                return Ember.Table.RowArrayProxy.create({
                    tableRowClass: Ember.Table.Row,
                    content: this.get("content")
                });
            }).property("content"),
            footerContent: Ember.computed(function(key, value) {
                return value ? value : Ember.A();
            }).property(),
            fixedColumns: Ember.computed(function() {
                var columns, numFixedColumns;
                return (columns = this.get("columns")) ? (numFixedColumns = this.get("numFixedColumns") || 0, 
                columns.slice(0, numFixedColumns)) : Ember.A();
            }).property("columns.@each", "numFixedColumns"),
            tableColumns: Ember.computed(function() {
                var columns, numFixedColumns;
                return (columns = this.get("columns")) ? (numFixedColumns = this.get("numFixedColumns") || 0, 
                columns = columns.slice(numFixedColumns, columns.get("length")), this.prepareTableColumns(columns), 
                columns) : Ember.A();
            }).property("columns.@each", "numFixedColumns"),
            prepareTableColumns: Ember.observer(function(tableColumns) {
                var col, columns, i, _i, _len, _results;
                for (columns = Ember.isArray(tableColumns) ? tableColumns : this.get("tableColumns"), 
                _results = [], i = _i = 0, _len = columns.length; _len > _i; i = ++_i) col = columns[i], 
                col.set("_nextColumn", columns.objectAt(i + 1)), _results.push(col.set("controller", this));
                return _results;
            }, "tableColumns.@each", "tableColumns"),
            sortByColumn: Ember.K,
            _tableScrollTop: 0,
            _tableScrollLeft: 0,
            _width: null,
            _height: null,
            _scrollbarSize: null,
            _fixedColumnsWidth: Ember.computed(function() {
                return this._getTotalWidth(this.get("fixedColumns"));
            }).property("fixedColumns.@each.columnWidth"),
            _tableColumnsWidth: Ember.computed(function() {
                return this.get("fluidTable") ? "100%" : this._getTotalWidth(this.get("tableColumns"));
            }).property("tableColumns.@each.columnWidth", "fluidTable"),
            _rowWidth: Ember.computed(function() {
                var columnsWidth, nonFixedTableWidth;
                return columnsWidth = this.get("_tableColumnsWidth"), nonFixedTableWidth = this.get("_tableContainerWidth") - this.get("_fixedColumnsWidth"), 
                nonFixedTableWidth > columnsWidth ? nonFixedTableWidth : columnsWidth;
            }).property("_fixedColumnsWidth", "_tableColumnsWidth", "_tableContainerWidth"),
            _bodyHeight: Ember.computed(function() {
                var bodyHeight, footerHeight, headerHeight, scrollbarSize;
                return bodyHeight = this.get("_height"), headerHeight = this.get("headerHeight"), 
                footerHeight = this.get("footerHeight"), scrollbarSize = this.get("_scrollbarSize"), 
                this.get("_tableColumnsWidth") > this.get("_width") - this.get("_fixedColumnsWidth") && (bodyHeight -= scrollbarSize), 
                this.get("hasHeader") && (bodyHeight -= headerHeight), this.get("hasFooter") && (bodyHeight -= footerHeight), 
                bodyHeight;
            }).property("_height", "headerHeight", "footerHeight", "_scrollbarSize", "hasHeader", "hasFooter", "_tableColumnsWidth", "_width", "_fixedColumnsWidth"),
            _tableBlockWidth: Ember.computed(function() {
                return this.get("_width") - this.get("_fixedColumnsWidth") - this.get("_scrollbarSize");
            }).property("_width", "_fixedColumnsWidth", "_scrollbarSize"),
            _fixedBlockWidthBinding: "_fixedColumnsWidth",
            _tableContentHeight: Ember.computed(function() {
                return this.get("rowHeight") * this.get("bodyContent.length");
            }).property("rowHeight", "bodyContent.length"),
            _tableContainerWidth: Ember.computed(function() {
                return this.get("_width") - this.get("_scrollbarSize");
            }).property("_width", "_scrollbarSize"),
            _scrollContainerWidth: Ember.computed(function() {
                return this.get("_width") - this.get("_fixedColumnsWidth") - this.get("_scrollbarSize");
            }).property("_width", "_fixedColumnsWidth", "_scrollbarSize"),
            _scrollContainerHeight: Ember.computed(function() {
                var containerHeight;
                return containerHeight = this.get("_height") - this.get("headerHeight");
            }).property("_height", "headerHeight"),
            _numItemsShowing: Ember.computed(function() {
                return Math.floor(this.get("_bodyHeight") / this.get("rowHeight"));
            }).property("_bodyHeight", "rowHeight"),
            _startIndex: Ember.computed(function() {
                var index, numContent, numViews, rowHeight, scrollTop;
                return numContent = this.get("bodyContent.length"), numViews = this.get("_numItemsShowing"), 
                rowHeight = this.get("rowHeight"), scrollTop = this.get("_tableScrollTop"), index = Math.floor(scrollTop / rowHeight), 
                index + numViews >= numContent && (index = numContent - numViews), 0 > index ? 0 : index;
            }).property("bodyContent.length", "_numItemsShowing", "rowHeight", "_tableScrollTop"),
            _getTotalWidth: function(columns) {
                var widths;
                return columns ? (widths = columns.getEach("columnWidth") || [], widths.reduce(function(total, w) {
                    return total + w;
                }, 0)) : 0;
            }
        });
    }, {} ],
    8: [ function() {
        var indexesOf;
        indexesOf = Ember.EnumerableUtils.indexesOf, Ember.Table.RowSelectionMixin = Ember.Mixin.create({
            attributeBindings: "tabindex",
            content: Ember.computed.alias("controller.bodyContent"),
            rowHeight: Ember.computed.alias("controller.rowHeight"),
            numItemsShowing: Ember.computed.alias("controller._numItemsShowing"),
            startIndex: Ember.computed.alias("controller._startIndex"),
            scrollTop: Ember.computed.alias("controller._tableScrollTop"),
            tabindex: -1,
            KEY_EVENTS: {
                37: "leftArrowPressed",
                38: "upArrowPressed",
                39: "rightArrowPressed",
                40: "downArrowPressed"
            },
            _calculateSelectionIndices: function(value) {
                var content, indices, rows, selection;
                return selection = this.get("selectionIndices"), selection.clear(), rows = this.get("content"), 
                rows ? (content = rows.mapProperty("content"), indices = indexesOf(content, value), 
                selection.addObjects(indices)) : void 0;
            },
            contentDidChange: Ember.observer(function() {
                return this._calculateSelectionIndices(this.get("selection"));
            }, "content.@each.content"),
            selection: Ember.computed(function(key, value) {
                var rows, selection;
                return rows = this.get("content") || [], selection = this.get("selectionIndices"), 
                value = value || [], 1 === arguments.length ? value = selection.map(function(index) {
                    return rows.objectAt(index).get("content");
                }) : this._calculateSelectionIndices(value), value;
            }).property("selectionIndices.[]"),
            selectionIndices: Ember.computed(function() {
                var set;
                return set = new Ember.Set(), set.addEnumerableObserver(this), set;
            }).property(),
            enumerableDidChange: Ember.K,
            enumerableWillChange: function(set, removing, adding) {
                var content;
                return (content = this.get("content")) ? ("number" == typeof removing ? set.forEach(function(index) {
                    var row;
                    return row = content.objectAt(index), row ? row.set("isSelected", !1) : void 0;
                }) : removing && removing.forEach(function(index) {
                    var row;
                    return row = content.objectAt(index), row ? row.set("isSelected", !1) : void 0;
                }), adding && "number" != typeof adding ? adding.forEach(function(index) {
                    var row;
                    return row = content.objectAt(index), row ? row.set("isSelected", !0) : void 0;
                }) : void 0) : void 0;
            },
            mouseDown: function(event) {
                var index, sel;
                return index = this.getIndexForEvent(event), sel = this.get("selectionIndices"), 
                sel.contains(index) && 1 === sel.length ? sel.clear() : this.setSelectionIndex(index);
            },
            keyDown: function(event) {
                var map, method, _ref;
                return map = this.get("KEY_EVENTS"), method = map[event.keyCode], method ? null != (_ref = this.get(method)) ? _ref.apply(this, arguments) : void 0 : void 0;
            },
            upArrowPressed: function(event) {
                var index, sel;
                return event.preventDefault(), sel = this.get("selectionIndices.lastObject"), index = event.ctrlKey || event.metaKey ? 0 : sel - 1, 
                this.setSelectionIndex(index);
            },
            downArrowPressed: function(event) {
                var clen, index, sel;
                return event.preventDefault(), sel = this.get("selectionIndices.lastObject"), clen = this.get("content.length"), 
                index = event.ctrlKey || event.metaKey ? clen - 1 : sel + 1, this.setSelectionIndex(index);
            },
            getIndexForEvent: function(event) {
                return this.getRowIndexFast(this.getRowForEvent(event));
            },
            getRowForEvent: function(event) {
                var $rowView, view;
                return $rowView = $(event.target).parents(".table-row"), view = Ember.View.views[$rowView.attr("id")], 
                view ? view.get("row") : void 0;
            },
            getRowIndexFast: function(row) {
                var index, numRows, startIndex, sublist;
                return startIndex = this.get("startIndex"), numRows = this.get("numItemsShowing") + 1, 
                sublist = this.get("content").slice(startIndex, startIndex + numRows), index = sublist.indexOf(row), 
                0 > index ? index : index + startIndex;
            },
            setSelectionIndex: function(index) {
                var sel;
                if (this.ensureIndex(index)) return sel = this.get("selectionIndices"), this.get("selectionIndices").clear(), 
                this.toggleSelectionIndex(index);
            },
            toggleSelectionIndex: function(index) {
                var sel;
                if (this.ensureIndex(index)) return sel = this.get("selectionIndices"), sel.contains(index) ? sel.remove(index) : sel.add(index), 
                this.ensureVisible(index);
            },
            ensureIndex: function(index) {
                var clen;
                return clen = this.get("content.length"), index >= 0 && clen > index;
            },
            ensureVisible: function(index) {
                var endIndex, numRows, startIndex;
                return startIndex = this.get("startIndex"), numRows = this.get("numItemsShowing"), 
                endIndex = startIndex + numRows, startIndex > index ? this.scrollToRowIndex(index) : index >= endIndex ? this.scrollToRowIndex(index - numRows + 1) : void 0;
            },
            scrollToRowIndex: function(index) {
                var rowHeight, scrollTop;
                return rowHeight = this.get("rowHeight"), scrollTop = index * rowHeight, this.set("scrollTop", scrollTop);
            }
        }), Ember.Table.RowMultiSelectionMixin = Ember.Mixin.create(Ember.Table.RowSelectionMixin, {
            selectionRange: void 0,
            enumerableDidChange: function(set, removing, adding) {
                return "number" == typeof removing ? this.set("selectionRange", void 0) : removing && this.reduceSelectionRange(removing), 
                adding && "number" != typeof adding ? this.expandSelectionRange(adding) : void 0;
            },
            expandSelectionRange: function(indices) {
                var max, min, range, _ref;
                return range = this.get("selectionRange"), _ref = [ Math.min.apply(null, indices), Math.max.apply(null, indices) ], 
                min = _ref[0], max = _ref[1], range || (range = {
                    min: min,
                    max: max
                }), range = {
                    min: Math.min(range.min, min),
                    max: Math.max(range.max, max)
                }, this.set("selectionRange", range);
            },
            reduceSelectionRange: function(indices) {
                var max, min, range, _ref;
                return indices = this.get("selectionIndices"), _ref = [ Math.min.apply(null, indices), Math.max.apply(null, indices) ], 
                min = _ref[0], max = _ref[1], range = {
                    min: min,
                    max: max
                }, this.set("selectionRange", range);
            },
            mouseDown: function(event) {
                var index, range, row;
                return row = this.getRowForEvent(event), index = this.getRowIndexFast(row), event.ctrlKey || event.metaKey ? this.toggleSelectionIndex(index) : event.shiftKey ? (range = this.get("selectionRange")) ? this.setSelectionRange(range.min, index, index) : void 0 : this._super(event);
            },
            upArrowPressed: function(event) {
                var index, range;
                return event.preventDefault(), event.shiftKey ? (range = this.get("selectionRange"), 
                index = range.min - 1, range ? this.setSelectionRange(index, range.max, index) : void 0) : this._super(event);
            },
            downArrowPressed: function(event) {
                var index, range;
                return event.preventDefault(), event.shiftKey ? (range = this.get("selectionRange"), 
                index = range.max + 1, range ? this.setSelectionRange(range.min, index, index) : void 0) : this._super(event);
            },
            setSelectionRange: function(start, end, visibleIndex) {
                var beg, sel, _results;
                if (this.ensureIndex(start) && this.ensureIndex(end)) return beg = end > start ? start : end, 
                end = end > start ? end : start, sel = this.get("selectionIndices"), sel.clear(), 
                sel.addObjects(function() {
                    _results = [];
                    for (var _i = beg; end >= beg ? end >= _i : _i >= end; end >= beg ? _i++ : _i--) _results.push(_i);
                    return _results;
                }.apply(this)), this.ensureVisible(visibleIndex);
            }
        });
    }, {} ],
    9: [ function() {
        Ember.Table.TablesContainer = Ember.View.extend(Ember.ResizeHandler, {
            templateName: "tables-container",
            classNames: "tables-container",
            didInsertElement: function() {
                var isLion, scrollBarWidth;
                return this._super(), this.elementSizeDidChange(), scrollBarWidth = $.getScrollbarWidth(), 
                isLion = -1 !== ("undefined" != typeof navigator && null !== navigator ? navigator.appVersion["10_7"] : void 0) && 0 === scrollBarWidth, 
                isLion && (scrollBarWidth = 8), this.set("controller._scrollbarSize", scrollBarWidth), 
                this.set("controller._tableScrollTop", 0);
            },
            onResize: function() {
                return this.elementSizeDidChange();
            },
            elementSizeDidChange: function() {
                return this.set("controller._width", this.$().width()), this.set("controller._height", this.$().height());
            }
        }), Ember.Table.TableContainer = Ember.View.extend(Ember.StyleBindingsMixin, {
            classNames: [ "table-container" ],
            styleBindings: [ "height", "width" ]
        }), Ember.Table.TableBlock = Ember.CollectionView.extend(Ember.StyleBindingsMixin, {
            classNames: [ "table-block" ],
            styleBindings: [ "width", "height" ],
            itemViewClass: Ember.computed.alias("controller.tableRowViewClass"),
            columns: null,
            content: null,
            scrollLeft: null,
            onScrollLeftDidChange: Ember.observer(function() {
                return this.$().scrollLeft(this.get("scrollLeft"));
            }, "scrollLeft")
        }), Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend({
            classNames: [ "table-block" ],
            styleBindings: [ "width" ],
            itemViewClass: Ember.computed.alias("controller.tableRowViewClass"),
            rowHeight: Ember.computed.alias("controller.rowHeight"),
            columns: null,
            content: null,
            scrollLeft: null,
            scrollTop: null,
            onScrollLeftDidChange: Ember.observer(function() {
                return this.$().scrollLeft(this.get("scrollLeft"));
            }, "scrollLeft")
        }), Ember.Table.TableRow = Ember.LazyItemView.extend({
            templateName: "table-row",
            classNames: "table-row",
            classNameBindings: [ "row.isActive:active", "row.isSelected:selected" ],
            styleBindings: [ "width", "height" ],
            row: Ember.computed.alias("content"),
            columns: Ember.computed.alias("parentView.columns"),
            width: Ember.computed.alias("controller._rowWidth"),
            height: Ember.computed.alias("controller.rowHeight"),
            mouseEnter: function() {
                var row;
                return row = this.get("row"), row ? row.set("isActive", !0) : void 0;
            },
            mouseLeave: function() {
                var row;
                return row = this.get("row"), row ? row.set("isActive", !1) : void 0;
            },
            teardownContent: function() {
                var row;
                return row = this.get("row"), row ? row.set("isActive", !1) : void 0;
            }
        }), Ember.Table.TableCell = Ember.View.extend(Ember.StyleBindingsMixin, {
            defaultTemplate: Ember.Handlebars.compile("<span class='content'>{{view.cellContent}}</span>"),
            classNames: [ "table-cell" ],
            styleBindings: [ "width" ],
            row: Ember.computed.alias("parentView.row"),
            column: Ember.computed.alias("content"),
            rowContent: Ember.computed.alias("row.content"),
            width: Ember.computed.alias("column.columnWidth"),
            cellContent: Ember.computed(function(key, value) {
                var column, row;
                return row = this.get("rowContent"), column = this.get("column"), row && column ? (1 === arguments.length ? value = column.getCellContent(row) : column.setCellContent(row, value), 
                value) : void 0;
            }).property("rowContent.isLoaded", "column")
        }), Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend({
            classNames: [ "header-block" ],
            itemViewClass: "Ember.Table.HeaderRow",
            content: Ember.computed(function() {
                return [ this.get("columns") ];
            }).property("columns")
        }), Ember.Table.HeaderRow = Ember.View.extend(Ember.StyleBindingsMixin, {
            templateName: "header-row",
            classNames: [ "table-row", "header-row" ],
            styleBindings: [ "height", "width" ],
            columns: Ember.computed.alias("content"),
            height: Ember.computed.alias("controller.headerHeight"),
            width: Ember.computed.alias("controller._tableColumnsWidth"),
            sortableOption: Ember.computed(function() {
                return {
                    axis: "x",
                    cursor: "pointer",
                    helper: "clone",
                    containment: "parent",
                    placeholder: "ui-state-highlight",
                    scroll: !0,
                    tolerance: "pointer",
                    update: jQuery.proxy(this.onColumnSort, this)
                };
            }).property(),
            didInsertElement: function() {
                return this._super(), this.$("> div").sortable(this.get("sortableOption"));
            },
            onColumnSort: function(event, ui) {
                var column, columns, newIndex, view;
                return newIndex = ui.item.index(), view = Ember.View.views[ui.item.attr("id")], 
                columns = this.get("columns"), column = view.get("column"), columns.removeObject(column), 
                columns.insertAt(newIndex, column);
            }
        }), Ember.Table.HeaderCell = Ember.View.extend(Ember.StyleBindingsMixin, {
            templateName: "header-cell",
            classNames: [ "table-cell", "header-cell" ],
            styleBindings: [ "width", "height" ],
            column: Ember.computed.alias("content"),
            width: Ember.computed.alias("column.columnWidth"),
            height: Ember.computed.alias("controller.headerHeight"),
            resizableOption: Ember.computed(function() {
                return {
                    handles: "e",
                    minHeight: 40,
                    minWidth: this.get("column.minWidth") || 100,
                    maxWidth: this.get("column.maxWidth") || 500,
                    resize: jQuery.proxy(this.onColumnResize, this),
                    stop: jQuery.proxy(this.onColumnResize, this)
                };
            }).property(),
            didInsertElement: function() {
                var fluid;
                return fluid = this.get("controller.fluidTable"), !fluid || fluid && this.get("column._nextColumn") ? (this.$().resizable(this.get("resizableOption")), 
                this._resizableWidget = this.$().resizable("widget")) : void 0;
            },
            onColumnResize: function(event, ui) {
                var max;
                return max = this.get("column").resize(ui.size.width), max ? this.$().resizable("option", "maxWidth", max) : void 0;
            }
        }), Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, {
            templateName: "header-container",
            classNames: [ "table-container", "fixed-table-container", "header-container" ],
            height: Ember.computed.alias("controller.headerHeight"),
            width: Ember.computed.alias("controller._tableContainerWidth"),
            scrollLeft: Ember.computed.alias("controller._tableScrollLeft"),
            onMouseWheel: function(event, delta, deltaX) {
                var scrollLeft;
                return scrollLeft = this.$(".right-table-block").scrollLeft() + 50 * deltaX, this.set("scrollLeft", scrollLeft), 
                event.preventDefault();
            }
        }), Ember.Table.BodyTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.ScrollHandlerMixin, {
            templateName: "body-container",
            classNames: [ "table-container", "body-container" ],
            height: Ember.computed.alias("controller._bodyHeight"),
            width: Ember.computed.alias("controller._width"),
            scrollTop: Ember.computed.alias("controller._tableScrollTop"),
            scrollLeft: Ember.computed.alias("controller._tableScrollLeft"),
            onScrollTopDidChange: Ember.observer(function() {
                return this.$().scrollTop(this.get("scrollTop"));
            }, "scrollTop"),
            onScroll: function(event) {
                return this.set("scrollTop", event.target.scrollTop), event.preventDefault();
            },
            onMouseWheel: function(event, delta, deltaX, deltaY) {
                var scrollLeft;
                if (Math.abs(deltaX) > Math.abs(deltaY)) return scrollLeft = this.$(".right-table-block").scrollLeft() + 50 * deltaX, 
                this.set("scrollLeft", scrollLeft), event.preventDefault();
            }
        }), Ember.Table.FooterTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, {
            templateName: "footer-container",
            classNames: [ "table-container", "fixed-table-container", "footer-container" ],
            styleBindings: [ "top" ],
            height: Ember.computed.alias("controller.footerHeight"),
            width: Ember.computed.alias("controller._tableContainerWidth"),
            scrollLeft: Ember.computed.alias("controller._tableScrollLeft"),
            top: Ember.computed(function() {
                var bodyHeight, contentHeight, headerHeight;
                return headerHeight = this.get("controller.headerHeight"), contentHeight = this.get("controller._tableContentHeight") + headerHeight, 
                bodyHeight = this.get("controller._bodyHeight") + headerHeight, bodyHeight > contentHeight ? contentHeight : bodyHeight;
            }).property("controller._bodyHeight", "controller.headerHeight", "controller._tableContentHeight"),
            onMouseWheel: function(event, delta, deltaX) {
                var scrollLeft;
                return scrollLeft = this.$(".right-table-block").scrollLeft() + 50 * deltaX, this.set("scrollLeft", scrollLeft), 
                event.preventDefault();
            }
        }), Ember.Table.ScrollContainer = Ember.View.extend(Ember.StyleBindingsMixin, Ember.ScrollHandlerMixin, {
            template: Ember.Handlebars.compile("{{view Ember.Table.ScrollPanel}}"),
            classNames: "scroll-container",
            styleBindings: [ "top", "left", "width", "height" ],
            width: Ember.computed.alias("controller._scrollContainerWidth"),
            height: Ember.computed.alias("controller._scrollContainerHeight"),
            top: Ember.computed.alias("controller.headerHeight"),
            left: Ember.computed.alias("controller._fixedColumnsWidth"),
            scrollTop: Ember.computed.alias("controller._tableScrollTop"),
            scrollLeft: Ember.computed.alias("controller._tableScrollLeft"),
            onScroll: function(event) {
                return this.set("scrollLeft", event.target.scrollLeft), event.preventDefault();
            },
            onScrollLeftDidChange: Ember.observer(function() {
                return this.$().scrollLeft(this.get("scrollLeft"));
            }, "scrollLeft")
        }), Ember.Table.ScrollPanel = Ember.View.extend(Ember.StyleBindingsMixin, {
            classNames: [ "scroll-panel" ],
            styleBindings: [ "width", "height" ],
            width: Ember.computed.alias("controller._tableColumnsWidth"),
            height: Ember.computed.alias("controller._tableContentHeight")
        });
    }, {} ]
}, {}, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);