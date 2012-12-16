# Ember Table by Addepar

![Ember Table Image](https://github.com/downloads/ppong/ember-table/table.png)
Table built with [Ember.js](http://emberjs.com/) that renders rows lazily.

## Demo

View Demos here:

Simple
Frozen Header
Frozen Column
Frozen Footer
Frozen Header, Column & Footer combined

## Features

The table supports over 1 million rows. This is because lazy rendering and lazy loading.
Supports custom header, body and footer cell class.
Supports frozen header and footer panels
Supports frozen column on the left
Collapsable rows
Sort rows
Selection or rows
Rearrange columns
Resizable columns
Resize frozen column
Table automatically resizes to the container it sits in

## Getting Started

### Take ember-table.js and modify it according to your liking with CSS.

### Compliling with grunt
    $ npm install -g grunt
    $ grunt

### Installing
    $ npm install

### Compiling
    $ grunt w


### Viewing Examples
From the root directory: `$ python -m SimpleHTTPServer`.
Hit up : `http://localhost:8000/examples/table/`

### Limitations
The table was originally designed and optimized for the use case of having a header, footer and frozen columm.

### TODO
Editable cells
Remove the concept of table left and table right into viewport and sub-table concept.
Remove the dependency on css line-height and row height between CSS and JS.

### BUGS
Selection over 100'000 rows causes issues.

### Copyright and License
Copyright © 2012 Addepar, Inc. All Rights Reserved

Licensed under the BSD License (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file.
