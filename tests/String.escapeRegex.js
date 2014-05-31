/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.escapeRegex', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.escapeRegex();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.escapeRegex(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.escapeRegex(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });


        it('should be ok in each case', function () {
            var str = '[](){}?*+^$\\.|',
                obj = utilx.Object.ToObject(str);

            expect(utilx.String.escapeRegex(str)).to.not.be('[](){}?*+^$\\.|');
            expect(utilx.String.escapeRegex(str)).to.be('\\[\\]\\(\\)\\{\\}\\?\\*\\+\\^\\$\\\\\\.\\|');
            expect(utilx.String.escapeRegex(obj)).to.not.be('[](){}?*+^$\\.|');
            expect(utilx.String.escapeRegex(obj)).to.be('\\[\\]\\(\\)\\{\\}\\?\\*\\+\\^\\$\\\\\\.\\|');
        });
    });
}());
