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
            ];

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
    });
}());
