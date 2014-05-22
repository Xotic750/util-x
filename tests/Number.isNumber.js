/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNumber', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isNumber(10)).to.be.ok();
            expect(utilx.Number.isNumber(NaN)).to.be.ok();
            expect(utilx.Number.isNumber(Infinity)).to.be.ok();
            expect(utilx.Number.isNumber(-Infinity)).to.be.ok();
            expect(utilx.Number.isNumber('10')).to.not.be.ok();
            expect(utilx.Number.isNumber()).to.not.be.ok();
            expect(utilx.Number.isNumber(null)).to.not.be.ok();
            expect(utilx.Number.isNumber({})).to.not.be.ok();
            expect(utilx.Number.isNumber([])).to.not.be.ok();
        });
    });
}());
