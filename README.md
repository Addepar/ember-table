# Ember Table by Addepar

Table built using [Ember.js](http://emberjs.com/) that lazily renders rows.

## Demo
http://addepar.github.com/ember-table/

## JS Bin Starter Kit
http://emberjs.jsbin.com/zozonuxu/1/edit

## Getting Started

### Take ember-table.js and modify it according to your liking with CSS.

### Compile with grunt (see http://gruntjs.com/getting-started)
```
$ npm install -g grunt-cli
$ npm install
$ grunt
```

### Viewing Examples
From the root directory: `$ node examples.js`.
Hit up : `http://localhost:8000/examples`

## Dependencies
* ember.js
* jquery-ui
* jquery.mousewheel.js
* antiscroll.js

## TODO
* Bug fixes—we are aware that there are bugs. Please help us out by filing github issues or submitting pull requests!
* Better documentation
* Unit tests
* Cell single and multi selection
* Better column drag and drop
* Support for colspan and rowspan
* Switch to ember/list-view for lazy rendering

### Maintainers
Update version numbers and release using https://github.com/webpro/release-it. Install:
```
$ npm install -g release-it
$ alias release="release-it"
```
Release process:
```
$ vim CHANGELOG.md
$ release <options>
```

### Copyright and License
Copyright © 2013 Addepar, Inc. All Rights Reserved

Licensed under the BSD License (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file.
