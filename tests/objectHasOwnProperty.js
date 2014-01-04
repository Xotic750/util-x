/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectHasOwnProperty', function () {
        var obj = {
            'toString': null
        };

        it('should not throw an error in each case', function () {
            expect(utilx.objectHasOwnProperty(obj, 'toString')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'toLocaleString')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'valueOf')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'hasOwnProperty')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'isPrototypeOf')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'propertyIsEnumerable')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'constructor')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'foo')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'bar')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'fuz')).to.not.be.ok();
        });
    });
}());
