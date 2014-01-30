/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayIndexOf', function () {
        var arr = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            arr2 = utilx.arraySlice(utilx.returnArgs(2, 3, utilx.privateUndefined, true, 'hej', null, 2, false, 0));

        delete arr2[1];

        it('should not throw an error in each case', function () {
            expect(utilx.arrayIndexOf(arr, 'toString')).to.be(0);
            expect(utilx.arrayIndexOf(arr, 'toLocaleString')).to.be(1);
            expect(utilx.arrayIndexOf(arr, 'valueOf')).to.be(2);
            expect(utilx.arrayIndexOf(arr, 'hasOwnProperty')).to.be(3);
            expect(utilx.arrayIndexOf(arr, 'isPrototypeOf')).to.be(4);
            expect(utilx.arrayIndexOf(arr, 'propertyIsEnumerable')).to.be(5);
            expect(utilx.arrayIndexOf(arr, 'constructor')).to.be(6);
            expect(utilx.arrayIndexOf(arr, 'foo')).to.be(-1);
            expect(utilx.arrayIndexOf(arr, 'bar')).to.be(-1);
            expect(utilx.arrayIndexOf(arr, 'fuz')).to.be(-1);
            expect(utilx.arrayIndexOf(arr, 'push')).to.be(-1);
            expect(utilx.arrayIndexOf(arr, 'pop')).to.be(-1);
        });

        it('should find the element', function () {
            expect(utilx.arrayIndexOf(arr2, 'hej')).to.be(4);
        });

        it('should not find the element', function () {
            expect(utilx.arrayIndexOf(arr2, 'mus')).to.be(-1);
        });

        it('should find undefined as well', function () {
            expect(utilx.arrayIndexOf(arr2, utilx.privateUndefined)).to.not.be(-1);
        });

        it('should skip unset indexes', function () {
            expect(utilx.arrayIndexOf(arr2, utilx.privateUndefined)).to.be(2);
        });

        it('should use a strict test', function () {
            expect(utilx.arrayIndexOf(arr2, null)).to.be(5);
            expect(utilx.arrayIndexOf(arr2, '2')).to.be(-1);
        });

        it('should skip the first if fromIndex is set', function () {
            expect(utilx.arrayIndexOf(arr2, 2, 2)).to.be(6);
            expect(utilx.arrayIndexOf(arr2, 2, 0)).to.be(0);
            expect(utilx.arrayIndexOf(arr2, 2, 6)).to.be(6);
        });

        it('should work with negative fromIndex', function () {
            expect(utilx.arrayIndexOf(arr2, 2, -3)).to.be(6);
            expect(utilx.arrayIndexOf(arr2, 2, -9)).to.be(0);
        });

        it('should work with fromIndex being greater than the length', function () {
            expect(utilx.arrayIndexOf(arr2, 0, 20)).to.be(-1);
        });

        it('should work with fromIndex being negative and greater than the length', function () {
            expect(utilx.arrayIndexOf(arr2, 'hej', -20)).to.be(4);
        });
    });
}());
