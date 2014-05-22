/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNumberAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isNumberAny(10)).to.be.ok();
            expect(utilx.Number.isNumberAny(utilx.Object.ToObject(10))).to.be.ok();
            expect(utilx.Number.isNumberAny(NaN)).to.be.ok();
            expect(utilx.Number.isNumberAny(Infinity)).to.be.ok();
            expect(utilx.Number.isNumberAny(-Infinity)).to.be.ok();
            expect(utilx.Number.isNumberAny('10')).to.not.be.ok();
            expect(utilx.Number.isNumberAny()).to.not.be.ok();
            expect(utilx.Number.isNumberAny(null)).to.not.be.ok();
            expect(utilx.Number.isNumberAny({})).to.not.be.ok();
            expect(utilx.Number.isNumberAny([])).to.not.be.ok();
        });
    });
}());
