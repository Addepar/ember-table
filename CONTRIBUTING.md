# Contributing to Ember Table

Looking to contribute something to Ember Table? Here's how you can help.

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/Addepar/ember-table/issues) is
the preferred channel for [bug reports](#bug-reports),
[feature requests](#feature-requests) and
[submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** use the issue tracker for personal support requests.  Stack
  Overflow
  ([`ember-table`](http://stackoverflow.com/questions/tagged/ember-table) tag)
  is a better place to get help.

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.


## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a reduced test
   case and a live example. The starter kit JS Bin on the README page is a
   helpful template.


## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

## Writing Code in Ember Table

Ember-table is written in [CoffeeScript](http://coffeescript.org/) and compiled
into JavaScript using [Grunt](http://gruntjs.com/). Contributing to ember-table
requires that you have grunt and NPM (for pulling in dependencies) locally
installed.

The `src` folder contains all the source code for the ember-table project
itself. The `app` folder contains the sample app and documentation, and should
be updated whenever changes will add functionality, modify or remove existing
functionality, or change public APIs. The `dist` folder contains the compiled
ember-table code and should not be directly modified but instead generated using
`grunt dist`.

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

For now, pull requests aren't required to have tests. Once we've established
a testing infrastructure, pull requests that introduce new functionality should
come with tests for that functionality.

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/ember-table.git
   # Navigate to the newly cloned directory
   cd ember-table
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/Addepar/ember-table.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Before committing changes, make sure to compile modified CoffeeScript files.

   ```bash
   grunt dist
   ```

5. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

6. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

7. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description against the `master` branch.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [BSD License](LICENSE).


## Running tests

Coming soon!


## Syntax:

* Two spaces, no tabs.
* No trailing whitespace. Blank lines should not have any space.
* a = b and not a=b.
* Follow the conventions you see used in the source already.


## License

By contributing your code, you agree to license your contribution under the
[BSD license](LICENSE).


#### NOTE: Largely copied from https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md
