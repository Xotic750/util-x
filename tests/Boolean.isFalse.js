/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isFalse', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isFalse(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Boolean.isFalse(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Boolean.isFalse(true)).to.not.be.ok();
            expect(utilx.Boolean.isFalse(false)).to.be.ok();
            expect(utilx.Boolean.isFalse()).to.not.be.ok();
            expect(utilx.Boolean.isFalse(null)).to.not.be.ok();
            expect(utilx.Boolean.isFalse('')).to.not.be.ok();
            expect(utilx.Boolean.isFalse(0)).to.not.be.ok();
            expect(utilx.Boolean.isFalse(1)).to.not.be.ok();
            expect(utilx.Boolean.isFalse({})).to.not.be.ok();
            expect(utilx.Boolean.isFalse([])).to.not.be.ok();
        });
    });
}());
