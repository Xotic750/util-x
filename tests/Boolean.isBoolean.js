/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isBoolean', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isBoolean(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Boolean.isBoolean(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Boolean.isBoolean(true)).to.be.ok();
            expect(utilx.Boolean.isBoolean(false)).to.be.ok();
            expect(utilx.Boolean.isBoolean()).to.not.be.ok();
            expect(utilx.Boolean.isBoolean(null)).to.not.be.ok();
            expect(utilx.Boolean.isBoolean('')).to.not.be.ok();
            expect(utilx.Boolean.isBoolean(0)).to.not.be.ok();
            expect(utilx.Boolean.isBoolean(1)).to.not.be.ok();
            expect(utilx.Boolean.isBoolean({})).to.not.be.ok();
            expect(utilx.Boolean.isBoolean([])).to.not.be.ok();
        });
    });
}());
