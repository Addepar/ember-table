module.exports = function (grunt) {
  'use strict';

  var path = require('path');

  grunt.loadNpmTasks('grunt-contrib-clean');
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

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          cleanup: true,
          layout: 'byComponent'
        }
      }
    },

    emberTemplates: {
      options: {
        templateName: function(sourceFile) {
          return sourceFile.replace(/src\/templates\//, '').replace(/app\/templates\//, '');
        }
      },
      'src/templates.js': ["src/templates/**/*.hbs"],
      'app/templates.js': ["app/templates/**/*.hbs"]
    },

    neuter: {
      options: {
        includeSourceURL: false,
        separator: "\n"
      },
      "dist/ember-table.js":  "src/main.js",
      "gh_pages/app.js":      "app/app.js"
    },

    clean: [
      "./dist",
      "./gh_pages"
    ],

    jsdoc: {
      all: {
        src: [
          "./src/*.js",
          "./src/**/*.js"
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
      all: ["Gruntfile.js", "src/**/*.js"]
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
            flatten: true,
            cwd: 'dependencies/',
            src: ['**/*.js'],
            dest: 'gh_pages/lib'
          }, {
            expand: true,
            flatten: true,
            cwd: 'dependencies/',
            src: ['**/*.css'],
            dest: 'gh_pages/css'
          }, {
            expand: true,
            cwd: 'lib/font-awesome/font/',
            src: ['**'],
            dest: 'gh_pages/font'
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
            expand: true,
            flatten: true,
            cwd: 'dependencies/',
            src: ['**/*.js'],
            dest: 'tests/lib'
          }, {
            expand: true,
            flatten: true,
            cwd: 'dependencies/',
            src: ['**/*.css'],
            dest: 'tests/css'
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
          './dist/ember-table.min.js': [
            // Include dist in bundle
            './dist/ember-table.js'
          ]
        }
      }
    },

    // Add a banner to dist files which includes version & year of release
    usebanner: {
      dist: {
        options: {
          banner: '/*!\n* <%=pkg.name %> v<%=pkg.version%>\n' +
            '* Copyright 2012-<%=grunt.template.today("yyyy")%> Addepar Inc.\n' +
            '* See LICENSE.\n*/',
        },
        files: {
          src: ['dist/*']
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
      main_js_version: {
        src: ['src/main.js'],
        overwrite: true,
        replacements: [{
          from: /Ember.Table.VERSION = '.*\..*\..*';/,
          to: "Ember.Table.VERSION = '<%=pkg.version%>';"
        }]
      }
    },

    watch: {
      code: {
        files: ["src/**/*.js", "app/**/*.js", "dependencies/**/*.js", "lib/**/*.js"],
        tasks: ["neuter"]
      },
      handlebars: {
        files: ["src/**/*.hbs", "app/**/*.hbs"],
        tasks: ["emberTemplates", "neuter"]
      },
      less: {
        files: ["app/assets/**/*.less", "app/assets/**/*.css", "src/**/*.less"],
        tasks: ["less", "copy"]
      },
      copy: {
        files: ["app/index.html"],
        tasks: ["copy"]
      }
    }
  });

  // Default tasks.
  grunt.registerTask("build_srcs", ["emberTemplates", "neuter"]);

  grunt.registerTask("build_app", ["emberTemplates", "neuter"]);

  grunt.registerTask("dist", ["replace", "build_srcs", "build_app", "less", "copy", "uglify", "usebanner"]);

  grunt.registerTask("default", ["bower", "replace", "build_srcs", "build_app", "less", "copy", "uglify", "usebanner", "watch"]);
};
