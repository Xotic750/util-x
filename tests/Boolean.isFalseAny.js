/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isFalseAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isFalseAny(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny(utilx.Object.ToObject(false))).to.be.ok();
            expect(utilx.Boolean.isFalseAny(true)).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny(false)).to.be.ok();
            expect(utilx.Boolean.isFalseAny()).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny(null)).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny('')).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny(0)).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny(1)).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny({})).to.not.be.ok();
            expect(utilx.Boolean.isFalseAny([])).to.not.be.ok();
        });
    });
}());
