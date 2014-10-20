module.exports = function (grunt) {
  'use strict';

  var path = require('path');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-release-it');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n* <%=pkg.name %> v<%=pkg.version%>\n' +
            '* Copyright 2012-<%=grunt.template.today("yyyy")%> Addepar Inc.\n' +
            '* See LICENSE.\n*/',

    bower: {
      install: {
        options: {
          targetDir: 'vendor',
          layout: 'byComponent',
          verbose: true,
          copy: false
        }
      }
    },

    coffee: {
      srcs: {
        options: {
          bare: true
        },
        expand: true,
        cwd: "src/",
        src: [ "**/*.coffee" ],
        dest: "build/src/",
        ext: ".js"
      },
      app: {
        expand: true,
        cwd: "app/",
        src: [ "**/*.coffee" ],
        dest: "build/app/",
        ext: ".js"
      }
    },

    emberTemplates: {
      options: {
        templateName: function(sourceFile) {
          return sourceFile.replace(/src\/templates\//, '').replace(/app\/templates\//, '');
        }
      },
      'build/src/templates.js': ["src/templates/**/*.hbs"],
      'build/app/templates.js': ["app/templates/**/*.hbs"]
    },

    neuter: {
      options: {
        includeSourceURL: false,
        separator: "\n"
      },
      "dist/ember-table.js":  "build/src/main.js",
      "gh_pages/app.js":      "build/app/app.js"
    },

    clean: [
      "./dist",
      "./build",
      "./gh_pages"
    ],

    jsdoc: {
      all: {
        src: [
          "./build/src/*.js",
          "./build/src/**/*.js"
        ],
        dest: "doc/"
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          next: true,
          require: true
        }
      },
      all: ["Gruntfile.js", "build/src/**/*.js"]
    },

    less: {
      development: {
        options: {
          yuicompress: true
        },
        files: {
          "./dist/ember-table.css": ["./src/css/ember-table.less"],
          "./gh_pages/css/app.css": ["./app/assets/css/app.less"]
        }
      }
    },

    copy: {
      gh_pages: {
        files: [
          {
            src: ['app/index.html'],
            dest: 'gh_pages/index.html'
          }, {
            expand: true,
            cwd: 'dependencies/',
            src: ['**/*.js'],
            dest: 'gh_pages/lib'
          }, {
            expand: true,
            cwd: 'vendor/',
            src: ['**/*.js'],
            dest: 'gh_pages/lib'
          }, {
            expand: true,
            cwd: 'dependencies/',
            src: ['**/*.css'],
            dest: 'gh_pages/lib'
          }, {
            expand: true,
            cwd: 'vendor/',
            src: ['**/*.css'],
            dest: 'gh_pages/lib'
          }, {
            expand: true,
            cwd: 'vendor/font-awesome/font/',
            src: ['**'],
            dest: 'gh_pages/lib/font-awesome/font'
          }, {
            expand: true,
            cwd: 'app/assets/font/',
            src: ['**'],
            dest: 'gh_pages/font'
          }, {
            expand: true,
            cwd: 'app/assets/img/',
            src: ['**'],
            dest: 'gh_pages/img'
          }
        ]
      },
      tests: {
        files: [
          {
            src: ['vendor/qunit/qunit/qunit.css'],
            dest: 'tests/css/qunit.css'
          }, {
            flatten: true,
            expand: true,
            src: [
              'vendor/qunit/qunit/qunit.js',
              'vendor/ember/ember.js',
              'vendor/handlebars/handlebars.js',
              'vendor/modernizr/modernizr.js',
              'vendor/d3/d3.js',
              'vendor/jquery/jquery.js',
              'vendor/jquery-ui/ui/jquery-ui.custom.js',
              'vendor/jquery-mousewheel/jquery.mousewheel.js'
            ],
            dest: 'tests/lib/'
          }
        ]
      }
    },

    qunit: {
      all: ['tests/*.html']
    },

    uglify: {
      file: {
        options: {
          preserveComments: false,
          beautify: false,
          mangle: true,
          report: 'min'
        },

        files: {
          './dist/ember-table.min.js': ['./dist/ember-table.js']
        }
      }
    },

    // Add a banner to dist files which includes version & year of release
    usebanner: {
      js: {
        options: {
          banner: '<%=banner%>'
        },
        files: {
          src: ['dist/*.js']
        }
      },
      css: {
        options: {
          banner: '<%=banner%>'
        },
        files: {
          src: ['dist/*.css']
        }
      }
    },

    replace: {
      global_version: {
        src: ['VERSION'],
        overwrite: true,
        replacements: [{
          from: /.*\..*\..*/,
          to: '<%=pkg.version%>'
        }]
      },
      main_coffee_version: {
        src: ['src/main.coffee'],
        overwrite: true,
        replacements: [{
          from: /Ember.Table.VERSION = '.*\..*\..*'/,
          to: "Ember.Table.VERSION = '<%=pkg.version%>'"
        }]
      },
      overview_page: {
        src: ['app/templates/ember_table/overview.hbs'],
        overwrite: true,
        replacements: [{
          from: /The current version is .*\..*\..*./,
          to: "The current version is <%=pkg.version%>."
        }]
      }
    },

    watch: {
      grunt: {
        files: ["Gruntfile.coffee"],
        tasks: ["default"]
      },
      code: {
        files: ["src/**/*.coffee", "app/**/*.coffee", "dependencies/**/*.js", "vendor/**/*.js"],
        tasks: ["coffee", "neuter", "uglify", "usebanner:js"]
      },
      handlebars: {
        files: ["src/**/*.hbs", "app/**/*.hbs"],
        tasks: ["emberTemplates", "neuter", "uglify", "usebanner:js"]
      },
      less: {
        files: ["app/assets/**/*.less", "app/assets/**/*.css", "src/**/*.less"],
        tasks: ["less", "copy", "usebanner:css"]
      },
      copy: {
        files: ["app/index.html"],
        tasks: ["copy"]
      }
    },

    "release-it": {
      options: {
        "pkgFiles": ["package.json", "bower.json"],
        "commitMessage": "Release %s",
        "tagName": "v%s",
        "tagAnnotation": "Release %s",
        "increment": "patch",
        "buildCommand": "grunt dist",
        "distRepo": "-b gh-pages git@github.com:addepar/ember-table",
        "distStageDir": ".stage",
        "distBase": "gh_pages",
        "distFiles": ["**/*"],
        "publish": false
      }
    }
  });

  // Build tasks
  grunt.registerTask("build_srcs", ["coffee:srcs", "emberTemplates", "neuter"]);
  grunt.registerTask("build_app", ["coffee:app", "emberTemplates", "neuter"]);

  grunt.registerTask("dist", ["clean", "bower", "replace", "build_srcs", "build_app", "less", "copy", "uglify", "usebanner"]);

  grunt.registerTask("default", ["dist", "watch"]);
};

