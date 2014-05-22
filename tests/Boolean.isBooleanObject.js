/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isBooleanObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isBooleanObject(utilx.Object.ToObject(true))).to.be.ok();
            expect(utilx.Boolean.isBooleanObject(utilx.Object.ToObject(false))).to.be.ok();
            expect(utilx.Boolean.isBooleanObject(true)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject(false)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject()).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject(null)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject('')).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject(0)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject(1)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject({})).to.not.be.ok();
            expect(utilx.Boolean.isBooleanObject([])).to.not.be.ok();
        });
    });
}());
