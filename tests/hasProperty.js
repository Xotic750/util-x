/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('hasProperty', function () {
        var arr = [];

        it('should not throw an error in each case', function () {
            expect(utilx.hasProperty(arr, 'toString')).to.be.ok();
            expect(utilx.hasProperty(arr, 'toLocaleString')).to.be.ok();
            expect(utilx.hasProperty(arr, 'valueOf')).to.be.ok();
            expect(utilx.hasProperty(arr, 'hasOwnProperty')).to.be.ok();
            expect(utilx.hasProperty(arr, 'isPrototypeOf')).to.be.ok();
            expect(utilx.hasProperty(arr, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.hasProperty(arr, 'constructor')).to.be.ok();
            expect(utilx.hasProperty(arr, 'push')).to.be.ok();
            expect(utilx.hasProperty(arr, 'pop')).to.be.ok();
            expect(utilx.hasProperty(arr, 'foo')).to.not.be.ok();
            expect(utilx.hasProperty(arr, 'bar')).to.not.be.ok();
            expect(utilx.hasProperty(arr, 'fuz')).to.not.be.ok();
            expect(utilx.hasProperty({
                foo: utilx.privateUndefined
            }, 'foo')).to.be.ok();
        });
    });
}());
