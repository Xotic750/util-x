/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.push', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.push();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.push(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.push(null);
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

            expect(utilx.Array.push(arr, undefined)).to.be(1);
            expect(utilx.Array.push(arr, null)).to.be(2);
            expect(utilx.Array.push(arr, -1)).to.be(3);
            expect(utilx.Array.push(arr, 0)).to.be(4);
            expect(utilx.Array.push(arr, 1)).to.be(5);
            expect(utilx.Array.push(arr, false)).to.be(6);
            expect(utilx.Array.push(arr, true)).to.be(7);
            expect(utilx.Array.push(arr)).to.be(7);
            expect(utilx.Array.push(arr)).to.be(7);
            expect(utilx.Array.push(arr)).to.be(7);
            expect(utilx.Array.push(arr)).to.be(7);
            expect(utilx.Array.push(arr, undefined)).to.be(8);
            expect(utilx.Array.push(arr, '')).to.be(9);
            expect(utilx.Array.push(arr, 'abc')).to.be(10);
            expect(utilx.Array.push(arr, null)).to.be(11);
            expect(utilx.Array.push(arr, undefined)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(utilx.Object.deepEqual(arr, arrCmp)).to.be(true);
        });
    });
}());
