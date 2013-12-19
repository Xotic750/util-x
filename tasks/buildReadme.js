/*global module */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerMultiTask('buildReadme', 'Build the README.md file.', function () {
            var templateFile = this.data.readme,
                destination = this.data.dest,
                template;

            if (grunt.file.exists(templateFile)) {
                template = grunt.file.read(templateFile);
            } else {
                throw new Error('Missing README template: ' + templateFile);
            }

            grunt.file.write(destination, template
                .replace(/@@VERSION/g, grunt.config.get('pkg.version'))
                .replace(/@@AUTHORNAME/g, grunt.config.get('pkg.author.name'))
                .replace(/@@AUTHOREMAIL/g, grunt.config.get('pkg.author.email'))
                .replace(/@@HOMEPAGE/g, grunt.config.get('pkg.homepage'))
                .replace(/@@COPYRIGHT/g, grunt.config.get('pkg.copyright'))
                .replace(/@@LICENSE/g, grunt.config.get('pkg.licenses')[0].type)
                .replace(/@@LICLINK/g, grunt.config.get('pkg.licenses')[0].url)
                .replace(/@@ISSUES/g, grunt.config.get('pkg.bugs.url'))
                .replace(/@@MODULE/g, grunt.config.get('pkg.name')));

            grunt.log.writeln('File "' + destination + '" created.');
            grunt.log.writeln(this.target + ': OK');
        });
    };
}());
