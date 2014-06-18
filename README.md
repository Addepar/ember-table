# Ember Table

A table built using [Ember.js](http://emberjs.com/) that lazily renders rows.

Ember Table allows you to handle very large data sets by only rendering the
rows that are being displayed. It is written as an ember component with an API
that is easy to understand and extend.


## Demo and Documentation
http://addepar.github.com/ember-table/


## Getting Started

#### JS Bin Starter Kit

http://emberjs.jsbin.com/feqih/1/edit

#### Installation

With bower: `bower install ember-table --save`

Or, just include `dist/ember-table.js` and `dist/ember-table.css` in your app.

Once it's installed, you can customize the look of ember-table with CSS.

#### Developing or Testing

After cloning this repo, install dependencies and compile with grunt:

```bash
$ npm install -g grunt-cli
$ npm install
$ grunt
```

To view examples, start the node server. From the root directory:

`$ node examples.js`.

You can view the examples at http://localhost:8000/gh_pages.

## Dependencies
* ember
* jquery-ui
* jquery.mousewheel
* antiscroll

## Browser Support
We aim to support the last two major versions of every common browser.

If you need to support further browsers, we welcome pull requests with fixes.

Touch support may work but has not been tested.

## Contributing

Got something to add? Great! Bug reports, feature ideas, and (especially) pull
requests are extremely helpful, and this project wouldn't be where it is today
without lots of help from the community.

Please read the [contribution guidelines](CONTRIBUTING.md) for directions on
opening issues and working on the project.


## Versioning

Ember Table uses [Semantic Versioning](http://semver.org) to keep track of
releases using the following format:

`<major>.<minor>.<patch>`

In a nutshell, this means:
* Breaking changes to the API or behavior increases the major version
* Adding functionality in a backwards-compatible way increases the minor version
* Making backwards-compatible bug fixes increases the patch version


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


## Copyright and License
Copyright © 2013 Addepar, Inc. All Rights Reserved

Licensed under the BSD License (the "License"); you may not use this work
except in compliance with the License. You may obtain a copy of the License in
the LICENSE file.
