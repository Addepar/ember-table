# Ember Table Changelog

### Ember Table 0.2.2 _(September 25, 2014)_

* Dasherize stylename for output
  * `styleBindings` definitions are now auto-dasherized
* Check against both undefined and null instead of just undefined
* Fix state deprecation, add quotes to column header sort action name
* Resolve Ember CLI style view references.
  * Now, `tableCellView: 'message/preview'` is also valid
* Check that selection is not null
* Store row objects in _selection rather than their contents
* Automatically publish updated docs with every release
* Add community examples page, and other small docs improvements
* Add multiselect functionality
  * API: `selectionMode="{single|multiple|none}"`
* Upgrade grunt-bower-task and use grunt-release-it
* Use more standard ~ for handlebars version

### Ember Table 0.2.1 _(June 30, 2014)_

* Hide fixedColumns table when numFixedColumns is 0
* Revert "Fix a few minor UI bugs" (fixes antiscroll issue)
  * Fixes #92, where rows are dynamically inserted
* Fix updateLayout to make antiscroll update its dimensions
* Use intersect rather than pointer for sortable
* Header cell span css fix
* Use row rather than content of row object proxy in table cells
  * It's now necessary to use row.get('property') rather than row.property

### Ember Table 0.2.0 _(May 19, 2014)_

* Add versions to proper files; add CHANGELOG.md to manage versions
* Manage dependencies with bower and grunt-bower-task
* Throw exception when ember-table dependencies are missing
* Simpler column resizing when forceFill is enabled
* Add new JS Bin example to README
* Fix a few minor UI bugs
* Migrate to Ember 1.4.0 and Handlebars 1.3.0
* Improvements to enableContentSelection
* Change layoutName to templateName
* Add minimum jQuery UI build info to site
* Change selection to trigger by click instead of mousedown
* Add missing antiscroll dependency to README
* Improve row selection
* Hover and selection fixes

### Ember Table 0.1.0 _(October 23, 2013)_

* Initial release

