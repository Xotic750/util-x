/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmptyAny', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isEmptyAny();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isEmptyAny(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isEmptyAny(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is not a string', function () {
            expect(function () {
                utilx.String.isEmptyAny(true);
                utilx.String.isEmptyAny(false);
                utilx.String.isEmptyAny(0);
                utilx.String.isEmptyAny(1);
                utilx.String.isEmptyAny({});
                utilx.String.isEmptyAny([]);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmptyAny('')).to.be.ok();
            expect(utilx.String.isEmptyAny(utilx.Object.ToObject(''))).to.be.ok();
            expect(utilx.String.isEmptyAny(' ')).to.not.be.ok();
            expect(utilx.String.isEmptyAny(utilx.Object.ToObject(' '))).to.not.be.ok();
        });
    });
}());
