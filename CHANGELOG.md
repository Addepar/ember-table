# Ember Table Changelog

### Ember Table 0.4.0 _(January 6, 2015)_

* Change `canAutoResize` default to `false`
  * This is more consistent with previous versions (0.2.x)
  * We recommend skipping version 0.3.0 in favor of this version
* Update contributing guidelines

### Ember Table 0.3.0 _(January 5, 2015)_

* Add savedWidth column to configurable demo
* Revert "Fix rendering issue in Linux Chrome v38"
* New column resizing behavior and modes
  * Remove `forceFillColumns` from API
  * Add `columnMode: 'standard/fluid'` to API
  * Enable "fluid" mode out of the box, remove old fluid example
  * Add Configurable Column Demo to explain new resize behavior

### Ember Table 0.2.4 _(December 4, 2014)_

* Fix Ember.Set deprecation warnings
* Allow bower to pull in the src directory
  * This makes it easier to import and override LESS properties
* Fix ember-table with Ember.EXTEND_PROTOTYPES=false

### Ember Table 0.2.3 _(October 31, 2014)_

* Link to new version of charts/widgets docs
* Fix rendering issue in Linux Chrome v38
* Fix usebanner and default grunt build
* Fix jquery-mousewheel dependency
* Use the correct syntax to reference a github repository in bower.json
* Update copy:tests task to allow localhost:8000/tests to run
* Update docs pages
* Clean up comments, adding inputs/output docs

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

