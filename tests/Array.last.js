/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.last', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.last();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.forEach(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.last(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Array.last([])).to.be(undefined);
            expect(utilx.Array.last([1, 2, 3])).to.be(3);
            expect(utilx.Array.last(utilx.Function.returnArgs(1, 2, 3))).to.be(3);
            expect(utilx.Array.last({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            })).to.be(3);
        });
    });
}());
