/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayContains', function () {
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
            expect(utilx.arrayContains(arr, 'toString')).to.be.ok();
            expect(utilx.arrayContains(arr, 'toLocaleString')).to.be.ok();
            expect(utilx.arrayContains(arr, 'valueOf')).to.be.ok();
            expect(utilx.arrayContains(arr, 'hasOwnProperty')).to.be.ok();
            expect(utilx.arrayContains(arr, 'isPrototypeOf')).to.be.ok();
            expect(utilx.arrayContains(arr, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.arrayContains(arr, 'constructor')).to.be.ok();
            expect(utilx.arrayContains(arr, 'foo')).to.not.be.ok();
            expect(utilx.arrayContains(arr, 'bar')).to.not.be.ok();
            expect(utilx.arrayContains(arr, 'fuz')).to.not.be.ok();
            expect(utilx.arrayContains(arr, 'push')).to.not.be.ok();
            expect(utilx.arrayContains(arr, 'pop')).to.not.be.ok();
        });
    });
}());
