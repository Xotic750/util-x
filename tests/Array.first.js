/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.first', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.first();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.first(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.first(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Array.first([])).to.be(undefined);
            expect(utilx.Array.first([1, 2, 3])).to.be(1);
            expect(utilx.Array.first(required.returnArgs(1, 2, 3))).to.be(1);
            expect(utilx.Array.first({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            })).to.be(1);
        });
    });
}());
