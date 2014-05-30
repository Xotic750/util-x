/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.assign', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.assign();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.assign(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.assign(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            var arrCmp = [
                    undefined,
                    null,
                    -1,
                    0,
                    1,
                    false,
                    true,
                    undefined,
                    '',
                    'abc',
                    null,
                    undefined
                ],
                arr = [],
                i;

            expect(utilx.Array.assign(arr, 0, undefined)).to.be(1);
            expect(utilx.Array.assign(arr, 1, null)).to.be(2);
            expect(utilx.Array.assign(arr, 2, -1)).to.be(3);
            expect(utilx.Array.assign(arr, 3, 0)).to.be(4);
            expect(utilx.Array.assign(arr, 4, 1)).to.be(5);
            expect(utilx.Array.assign(arr, 5, false)).to.be(6);
            expect(utilx.Array.assign(arr, 6, true)).to.be(7);
            expect(utilx.Array.assign(arr, 20)).to.be(7);
            expect(utilx.Array.assign(arr, 21)).to.be(7);
            expect(utilx.Array.assign(arr, 22)).to.be(7);
            expect(utilx.Array.assign(arr, 23)).to.be(7);
            expect(utilx.Array.assign(arr, 11, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 7, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 8, '')).to.be(12);
            expect(utilx.Array.assign(arr, 9, 'abc')).to.be(12);
            expect(utilx.Array.assign(arr, 10, null)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(utilx.Object.deepEqual(arr, arrCmp)).to.be.ok();
        });
    });
}());
