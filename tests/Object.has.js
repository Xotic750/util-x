/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.has', function () {
        var arr = [];

        it('should not throw an error in each case', function () {
            expect(utilx.Object.has(arr, 'toString')).to.be.ok();
            expect(utilx.Object.has(arr, 'toLocaleString')).to.be.ok();
            expect(utilx.Object.has(arr, 'valueOf')).to.be.ok();
            expect(utilx.Object.has(arr, 'hasOwnProperty')).to.be.ok();
            expect(utilx.Object.has(arr, 'isPrototypeOf')).to.be.ok();
            expect(utilx.Object.has(arr, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.Object.has(arr, 'constructor')).to.be.ok();
            expect(utilx.Object.has(arr, 'push')).to.be.ok();
            expect(utilx.Object.has(arr, 'pop')).to.be.ok();
            expect(utilx.Object.has(arr, 'foo')).to.not.be.ok();
            expect(utilx.Object.has(arr, 'bar')).to.not.be.ok();
            expect(utilx.Object.has(arr, 'fuz')).to.not.be.ok();
            expect(utilx.Object.has({
                foo: undefined
            }, 'foo')).to.be.ok();
        });
    });
}());
