/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.contains', function () {
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
            expect(utilx.Array.contains(arr, 'toString')).to.be.ok();
            expect(utilx.Array.contains(arr, 'toLocaleString')).to.be.ok();
            expect(utilx.Array.contains(arr, 'valueOf')).to.be.ok();
            expect(utilx.Array.contains(arr, 'hasOwnProperty')).to.be.ok();
            expect(utilx.Array.contains(arr, 'isPrototypeOf')).to.be.ok();
            expect(utilx.Array.contains(arr, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.Array.contains(arr, 'constructor')).to.be.ok();
            expect(utilx.Array.contains(arr, 'foo')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'bar')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'fuz')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'push')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'pop')).to.not.be.ok();
        });
    });
}());
