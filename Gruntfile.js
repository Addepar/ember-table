module.exports = function (grunt) {
    'use strict';

    var path = require('path');

    var templatesDir = "./src/templates/";

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify2');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-neuter');

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
                    './build/src/main.js'
                ],
                compile: './lib/ember-table-lib.js'
            }
        },

        neuter: {
            options:{
                includeSourceURL: false,
                separator: "\n"
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
            "./lib/ember-table.min.js",
            "./lib/ember-table-lib.js",
            "./build/src/ember-table-templates.js",
            "./stylesheets/ember-table.css"
        ],

        emberTemplates: {
            compile: {
                options: {
                    templateName: function (filename) {
                        return filename.replace(templatesDir, '');
                    }
                },
                files: {
                    "./build/src/ember-table-templates.js": [
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

        qunit: {
            all: ['tests/*.html']
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
                    './lib/ember-table.js': [
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
                    './lib/ember-table.min.js': [
                        // Include lib in bundle
                        './lib/ember-table-lib.js'
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.coffee'],
                tasks: [
                    'coffee',
                    'jshint',
                    'browserify2',
                    'uglify',
                    'qunit',
                    'jsdoc'
                ],

                options: {
                    spawn: false
                }
            },

            less: {
                files: ['stylesheets/**/*.less'],
                tasks: [
                    'less'
                ],

                options: {
                    spawn: false
                }
            },

            templates: {
                files: ['src/**/*.hbs'],
                tasks: [
                    'emberTemplates',
                    'browserify2',
                    'uglify',
                    'qunit'
                ],

                options: {
                    spawn: false
                }
            }
        }
    });

    // Default tasks.
    grunt.registerTask('default', [
        'clean',
        'less',
        'coffee',
        'emberTemplates',
        'jshint',
        'browserify2',
        'uglify',
        'qunit',
        'jsdoc'
    ]);
};
