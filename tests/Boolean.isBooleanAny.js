/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isBooleanAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isBooleanAny(utilx.Object.ToObject(true))).to.be.ok();
            expect(utilx.Boolean.isBooleanAny(utilx.Object.ToObject(false))).to.be.ok();
            expect(utilx.Boolean.isBooleanAny(true)).to.be.ok();
            expect(utilx.Boolean.isBooleanAny(false)).to.be.ok();
            expect(utilx.Boolean.isBooleanAny()).to.not.be.ok();
            expect(utilx.Boolean.isBooleanAny(null)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanAny('')).to.not.be.ok();
            expect(utilx.Boolean.isBooleanAny(0)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanAny(1)).to.not.be.ok();
            expect(utilx.Boolean.isBooleanAny({})).to.not.be.ok();
            expect(utilx.Boolean.isBooleanAny([])).to.not.be.ok();
        });
    });
}());
