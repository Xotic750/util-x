/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmptyAny', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isNotEmptyAny();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isNotEmptyAny(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isNotEmptyAny(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is not a string', function () {
            expect(function () {
                utilx.String.isNotEmptyAny(true);
                utilx.String.isNotEmptyAny(false);
                utilx.String.isNotEmptyAny(0);
                utilx.String.isNotEmptyAny(1);
                utilx.String.isNotEmptyAny({});
                utilx.String.isNotEmptyAny([]);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmptyAny('')).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(utilx.Object.ToObject(''))).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(' ')).to.be.ok();
            expect(utilx.String.isNotEmptyAny(utilx.Object.ToObject(' '))).to.be.ok();
        });
    });
}());
