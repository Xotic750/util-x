/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            clean: {
                all: ['README.md', 'docs', 'lib', 'coverage'],
                after: ['coverage'],
                coverage: ['coverage']
            },

            buildReadme: {
                readme: {
                    readme: 'templates/README.tpl',
                    dest: 'README.md'
                }
            },

            jsbeautifier: {
                lib: {
                    src: ['lib/<%= pkg.name %>.js'],
                    options: {
                        js: {
                            jslintHappy: true
                        }
                    }
                }
            },

            uglify: {
                lib: {
                    files: {
                        'lib/<%= pkg.name %>.min.js': 'lib/<%= pkg.name %>.js'
                    }
                },
                options: {
                    mangle: true,
                    compress: {},
                    output: {
                        'ascii_only': true
                    },
                    report: 'min',
                    preserveComments: 'some'
                }
            },

            jshint: {
                build: ['Gruntfile.js', 'src/*.js', 'tasks/**/*.js', 'tests/**/*.js'],
                lib: ['lib/<%= pkg.name %>.js'],
                options: {
                    'bitwise': true,
                    'camelcase': true,
                    'curly': true,
                    'eqeqeq': true,
                    'forin': true,
                    'freeze': true,
                    'funcscope': true,
                    'globalstrict': true,
                    'immed': true,
                    'newcap': true,
                    'noarg': true,
                    'nomen': true,
                    'nonew': true,
                    'notypeof': true,
                    'plusplus': true,
                    'regexp': true,
                    'strict': true,
                    'trailing': true,
                    'undef': true,
                    'white': true,
                    'noempty': true,
                    'quotmark': 'single'
                }
            },

            replace: {
                lib: {
                    options: {
                        patterns: [{
                            match: 'VERSION',
                            replacement: '<%= pkg.version %>'
                        }, {
                            match: 'MODULE',
                            replacement: '<%= pkg.name %>'
                        }, {
                            match: 'DESCRIPTION',
                            replacement: '<%= pkg.description %>'
                        }, {
                            match: 'AUTHORNAME',
                            replacement: '<%= pkg.author.name %>'
                        }, {
                            match: 'AUTHOREMAIL',
                            replacement: '<%= pkg.author.email %>'
                        }, {
                            match: 'HOMEPAGE',
                            replacement: '<%= pkg.homepage %>'
                        }, {
                            match: 'COPYRIGHT',
                            replacement: '<%= pkg.copyright %>'
                        }, {
                            match: 'LICENSE',
                            replacement: '<%= pkg.licenses[0].type %>'
                        }, {
                            match: 'LICLINK',
                            replacement: '<%= pkg.licenses[0].url %>'
                        }]
                    },
                    files: [{
                        src: ['src/<%= pkg.name %>.js'],
                        dest: 'lib/<%= pkg.name %>.js'
                    }]
                }
            },

            jsdoc: {
                lib: {
                    jsdoc: 'node_modules/.bin/jsdoc',
                    src: ['README.md', 'lib/<%= pkg.name %>.js'],
                    options: {
                        destination: 'docs',
                        lenient: true,
                        private: false
                    }
                }
            },

            shell: {
                beautified: {
                    options: {
                        stdout: true,
                        stderr: true,
                        failOnError: true,
                        execOptions: {
                            maxBuffer: 1048576
                        }
                    },
                    command: 'UTILX_WHICH=1 ./node_modules/tape-compact/bin/tape-compact tests/*.js'
                },
                coveralls: {
                    options: {
                        stdout: false,
                        stderr: true,
                        failOnError: true,
                        execOptions: {
                            maxBuffer: 1048576
                        }
                    },
                    command: 'UTILX_WHICH=1 node_modules/istanbul/lib/cli.js cover tests/*.js --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js'
                },
                uglified: {
                    options: {
                        stdout: true,
                        stderr: true,
                        failOnError: true,
                        execOptions: {
                            maxBuffer: 1048576
                        }
                    },
                    command: './node_modules/tape-compact/bin/tape-compact tests/*.js'
                }
            },

            watch: {
                test: {
                    files: [
                        'lib/<%= pkg.name %>.js',
                        'tests/*.js'
                    ],
                    tasks: ['shell:beautified', 'shell:coveralls', 'shell:uglified']
                },

                jshint: {
                    files: [
                        '<%= jshint.build %>',
                        '<%= jshint.lib %>'
                    ],
                    tasks: ['jshint']
                }
            }
        });

        // Custom tasks.
        grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jsdoc');
        grunt.loadNpmTasks('grunt-jsbeautifier');
        grunt.loadNpmTasks('grunt-replace');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-shell');

        // Default task.
        grunt.registerTask('default', [
            'clean:all',
            'jshint:build',
            'replace:lib',
            'jsbeautifier:lib',
            'jshint:lib',
            'shell:beautified',
            'uglify',
            'shell:uglified',
            'buildReadme',
            'jsdoc',
            'clean:after'
        ]);

        grunt.registerTask('test', [
            'shell:beautified',
            'shell:uglified'
        ]);

        grunt.registerTask('coveralls', [
            'shell:coveralls',
            'clean:coverage'
        ]);
    };
}());
