/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmpty', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isNotEmpty();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isNotEmpty(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isNotEmpty(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is not a string', function () {
            expect(function () {
                utilx.String.isNotEmpty(true);
                utilx.String.isNotEmpty(false);
                utilx.String.isNotEmpty(0);
                utilx.String.isNotEmpty(1);
                utilx.String.isNotEmpty({});
                utilx.String.isNotEmpty([]);
                utilx.String.isNotEmpty(utilx.Object.ToObject(''));
                utilx.String.isNotEmpty(utilx.Object.ToObject(' '));
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmpty('')).to.not.be.ok();
            expect(utilx.String.isNotEmpty(' ')).to.be.ok();
        });
    });
}());
