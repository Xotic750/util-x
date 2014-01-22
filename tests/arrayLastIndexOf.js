/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayLastIndexOf', function () {
        var arr = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            arr2 = [2, 3, utilx.privateUndefined, true, 'hej', null, 2, false, 0];

        delete arr2[1];
        delete arr2[7];

        it('should not throw an error in each case', function () {
            expect(utilx.arrayLastIndexOf(arr, 'toString')).to.be(0);
            expect(utilx.arrayLastIndexOf(arr, 'toLocaleString')).to.be(1);
            expect(utilx.arrayLastIndexOf(arr, 'valueOf')).to.be(2);
            expect(utilx.arrayLastIndexOf(arr, 'hasOwnProperty')).to.be(3);
            expect(utilx.arrayLastIndexOf(arr, 'isPrototypeOf')).to.be(4);
            expect(utilx.arrayLastIndexOf(arr, 'propertyIsEnumerable')).to.be(5);
            expect(utilx.arrayLastIndexOf(arr, 'constructor')).to.be(6);
            expect(utilx.arrayLastIndexOf(arr, 'foo')).to.be(-1);
            expect(utilx.arrayLastIndexOf(arr, 'bar')).to.be(-1);
            expect(utilx.arrayLastIndexOf(arr, 'fuz')).to.be(-1);
            expect(utilx.arrayLastIndexOf(arr, 'push')).to.be(-1);
            expect(utilx.arrayLastIndexOf(arr, 'pop')).to.be(-1);
        });

        it('should find the element', function () {
            expect(utilx.arrayLastIndexOf(arr2, 'hej')).to.be(4);
        });

        it('should not find the element', function () {
            expect(utilx.arrayLastIndexOf(arr2, 'mus')).to.be(-1);
        });

        it('should find undefined as well', function () {
            expect(utilx.arrayLastIndexOf(arr2, utilx.privateUndefined)).to.not.be(-1);
        });

        it('should skip unset indexes', function () {
            expect(utilx.arrayLastIndexOf(arr2, utilx.privateUndefined)).to.be(2);
        });

        it('should use a strict test', function () {
            expect(utilx.arrayLastIndexOf(arr2, null)).to.be(5);
            expect(utilx.arrayLastIndexOf(arr2, '2')).to.be(-1);
        });

        it('should skip the first if fromIndex is set', function () {
            expect(utilx.arrayLastIndexOf(arr2, 2, 2)).to.be(0);
            expect(utilx.arrayLastIndexOf(arr2, 2, 0)).to.be(0);
            expect(utilx.arrayLastIndexOf(arr2, 2, 6)).to.be(6);
        });

        it('should work with negative fromIndex', function () {
            expect(utilx.arrayLastIndexOf(arr2, 2, -3)).to.be(6);
            expect(utilx.arrayLastIndexOf(arr2, 2, -9)).to.be(0);
        });

        it('should work with fromIndex being greater than the length', function () {
            expect(utilx.arrayLastIndexOf(arr2, 2, 20)).to.be(6);
        });

        it('should work with fromIndex being negative and greater than the length', function () {
            expect(utilx.arrayLastIndexOf(arr2, 2, -20)).to.be(-1);
        });
    });
}());
