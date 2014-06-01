/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.lastIndexOf', function () {
        var arr = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            arr2 = [2, 3, undefined, true, 'hej', null, 2, false, 0, , 9],
            arr3 = [0, 1, 2, 3, 4, 5];

        delete arr2[1];
        delete arr2[7];

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.lastIndexOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.lastIndexOf(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.lastIndexOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should find the string in array', function () {
            expect(utilx.Array.lastIndexOf(arr, 'toString')).to.be(0);
            expect(utilx.Array.lastIndexOf(arr, 'toLocaleString')).to.be(1);
            expect(utilx.Array.lastIndexOf(arr, 'valueOf')).to.be(2);
            expect(utilx.Array.lastIndexOf(arr, 'hasOwnProperty')).to.be(3);
            expect(utilx.Array.lastIndexOf(arr, 'isPrototypeOf')).to.be(4);
            expect(utilx.Array.lastIndexOf(arr, 'propertyIsEnumerable')).to.be(5);
            expect(utilx.Array.lastIndexOf(arr, 'constructor')).to.be(6);
        });

        it('should not find the string in array', function () {
            expect(utilx.Array.lastIndexOf(arr, 'foo')).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr, 'bar')).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr, 'fuz')).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr, 'push')).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr, 'pop')).to.be(-1);
        });

        it('should find the number in the array', function () {
            expect(utilx.Array.lastIndexOf(arr3, 0)).to.be(0);
            expect(utilx.Array.lastIndexOf(arr3, 1)).to.be(1);
            expect(utilx.Array.lastIndexOf(arr3, 2)).to.be(2);
            expect(utilx.Array.lastIndexOf(arr3, 3)).to.be(3);
            expect(utilx.Array.lastIndexOf(arr3, 4)).to.be(4);
            expect(utilx.Array.lastIndexOf(arr3, 5)).to.be(5);
        });

        it('should not find the number in the array', function () {
            expect(utilx.Array.lastIndexOf(arr3, 6)).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr3, 7)).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr3, 8)).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr3, 9)).to.be(-1);
            expect(utilx.Array.lastIndexOf(arr3, 10)).to.be(-1);
        });

        it('should find the element', function () {
            expect(utilx.Array.lastIndexOf(arr2, 'hej')).to.be(4);
        });

        it('should not find the element', function () {
            expect(utilx.Array.lastIndexOf(arr2, 'mus')).to.be(-1);
        });

        it('should find undefined as well', function () {
            expect(utilx.Array.lastIndexOf(arr2, undefined)).to.not.be(-1);
        });

        it('should skip unset indexes', function () {
            expect(utilx.Array.lastIndexOf(arr2, undefined)).to.be(2);
        });

        it('should use a strict test', function () {
            expect(utilx.Array.lastIndexOf(arr2, null)).to.be(5);
            expect(utilx.Array.lastIndexOf(arr2, '2')).to.be(-1);
        });

        it('should skip the first if fromIndex is set', function () {
            expect(utilx.Array.lastIndexOf(arr2, 2, 2)).to.be(0);
            expect(utilx.Array.lastIndexOf(arr2, 2, 0)).to.be(0);
            expect(utilx.Array.lastIndexOf(arr2, 2, 6)).to.be(6);
        });

        it('should work with negative fromIndex', function () {
            expect(utilx.Array.lastIndexOf(arr2, 2, -3)).to.be(6);
            expect(utilx.Array.lastIndexOf(arr2, 2, -9)).to.be(0);
        });

        it('should work with fromIndex being greater than the length', function () {
            expect(utilx.Array.lastIndexOf(arr2, 2, 20)).to.be(6);
        });

        it('should work with fromIndex being negative and greater than the length', function () {
            expect(utilx.Array.lastIndexOf(arr2, 2, -20)).to.be(-1);
        });
    });
}());
