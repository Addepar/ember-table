# Ember Table [![Build Status](https://secure.travis-ci.org/Addepar/ember-table.svg?branch=master)](http://travis-ci.org/Addepar/ember-table)

A table built using [Ember.js](http://emberjs.com/) that lazily renders rows.

Ember Table allows you to handle very large data sets by only rendering the
rows that are being displayed. It is written as an ember component with an API
that is easy to understand and extend.


## Demo and Documentation
http://addepar.github.com/ember-table/


## Getting Started

#### JS Bin Starter Kit

http://emberjs.jsbin.com/bihemir/edit

#### Installation with Ember CLI (Recommended)

```bash
# ember-cli >= 0.2.0
ember install:addon ember-table

# ember-cli >= 0.2.3
ember install ember-table
```

Once it's installed, you can customize the look of ember-table with CSS.

#### Installation with Bower (Globals-Based Version)

`bower install ember-table --save`

Or, just include `dist/ember-table.js` and `dist/ember-table.css` in your app.

Using Ember Table with bower is **deprecated** and will eventually be removed.
We recommend that you migrate your apps to Ember CLI! Documentation has been
updated to show Ember CLI usage. If you need documentation for globals-based
use, please check out version 0.4.1 of Ember Table and follow the setup
instructions under "Running Old Versions" to display the old guides.

#### Developing or Testing

After cloning this repo, install dependencies and run the demo app:

```bash
$ npm install
$ ember serve
```

You can view the examples at http://localhost:4200.

You can run the tests at http://localhost:4200/tests. Tests are a work in
progress - no need to run them right now.

Before submitting a pull request, please compile the globals-based version of
Ember Table (the `dist` folder):

```bash
$ npm install -g grunt-cli      # install grunt
$ grunt dist
```

#### Running Old Versions (pre-0.4.3)

If you are running an old version of Ember Table (pre-0.4.3), setup for
development uses grunt and node rather than `ember serve`:

```bash
$ npm install -g grunt-cli
$ npm install
$ bower install
$ grunt
$ node examples.js              # run the demo app
```

You can then view the examples at http://localhost:8000/gh_pages.

## Using with other Ember versions

Support for Ember 1.9, 1.10, and 1.11 (1.11.1 required) is available via
branches of that name (e.g. `ember-1.9`)

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


## Maintainers
Update version numbers and release using https://github.com/webpro/grunt-release-it:

```
$ vim CHANGELOG.md
$ grunt release-it:<options>
```

By default, this will release a new patch version. Other suggested commands:

```
$ grunt release-it:minor
$ grunt release-it:major
$ grunt release-it:X.Y.Z
```

Ember Table uses the "distribution repository" feature of `release-it` to push to
the `gh-pages` branch and update documentation. When prompted, do NOT update the
tag for the distribution repository. We'll streamline the release process a bit
more soon.


## Copyright and License
Copyright © 2013 Addepar, Inc. All Rights Reserved

Licensed under the BSD License (the "License"); you may not use this work
except in compliance with the License. You may obtain a copy of the License in
the LICENSE.md file.
