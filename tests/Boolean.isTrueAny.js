/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isTrueAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isTrueAny(utilx.Object.ToObject(true))).to.be.ok();
            expect(utilx.Boolean.isTrueAny(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny(true)).to.be.ok();
            expect(utilx.Boolean.isTrueAny(false)).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny()).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny(null)).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny('')).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny(0)).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny(1)).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny({})).to.not.be.ok();
            expect(utilx.Boolean.isTrueAny([])).to.not.be.ok();
        });
    });
}());
