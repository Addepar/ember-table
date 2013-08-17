module.exports = function (grunt) {
    'use strict';

    var path = require('path');

    var templatesDir = "./src/templates/";

    grunt.loadNpmTasks('grunt-browserify2');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-neuter');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            banner: '/*! <%=pkg.name%> - v<%=pkg.version%> (build <%=pkg.build%>) - ' +
                '<%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%> */'
        },

        browserify2: {
            // Bundle containing all client scripts (WebApp, Ember.js)
            table: {
                entry: [
                    // Utils
                    './build/src/utils/jquery_fix.js',
                    './build/src/utils/scrollbar_width_helper.js',
                    './build/src/utils/resize_handler.js',
                    './build/src/utils/style_bindings.js',
                    './build/src/utils/lazy_container_view.js',
                    './build/src/utils/utils.js',

                    // Sources
                    './build/src/controllers.js',
                    './build/src/row_selection_mixin.js',
                    './build/src/views.js'
                ],
                compile: './lib/ember-table-lib.js'
            }
        },

        neuter: {
            options:{
                includeSourceURL: false
            },
            "lib/ember-table.js": "build/src/main.js"
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
            examples: {
                expand: true,
                cwd: "examples/",
                src: [ "**/*.coffee" ],
                dest: "examples/",
                ext: ".js"
            }
        },

        clean: [
            "./lib/ember-table.js",
            "./lib/ember-table-bundle.js",
            "./lib/ember-table-bundle.min.js",
            "./lib/ember-table-lib.js",
            "./lib/ember-table-templates.js"
        ],

        emberTemplates: {
            compile: {
                options: {
                    templateName: function (filename) {
                        return filename.replace(templatesDir, '');
                    }
                },
                files: {
                    "./lib/ember-table-templates.js": [
                        templatesDir + "**/*.hbs"
                    ]
                }
            }
        },

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
                    "./stylesheets/ember-table.css": [
                        "./stylesheets/ember-table.less"
                    ]
                }
            }
        },

        uglify: {
            development: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    preserveComments: true,
                    beautify: true,
                    mangle: false,
                    report: 'min'
                },

                files: {
                    './lib/ember-table-bundle.js': [
                        // Include lib in bundle
                        './lib/ember-table-lib.js'
                    ]
                }
            },

            production: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    preserveComments: false,
                    beautify: false,
                    mangle: true,
                    report: 'min'
                },

                files: {
                    './lib/ember-table-bundle.min.js': [
                        // Include lib in bundle
                        './lib/ember-table-lib.js'
                    ]
                }
            }
        }
    });

    // Default tasks.
    grunt.registerTask('default', [
        'clean',
        'less',
        'coffee',
        // 'jshint',
        'browserify2:table',
        'emberTemplates',
        'uglify',
        'jsdoc'
    ]);
};