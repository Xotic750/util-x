/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isNumber', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isNumber(10)).to.be.ok();
            expect(utilx.isNumber(NaN)).to.be.ok();
            expect(utilx.isNumber(Infinity)).to.be.ok();
            expect(utilx.isNumber(-Infinity)).to.be.ok();
            expect(utilx.isNumber('10')).to.not.be.ok();
            expect(utilx.isNumber()).to.not.be.ok();
            expect(utilx.isNumber(null)).to.not.be.ok();
            expect(utilx.isNumber({})).to.not.be.ok();
            expect(utilx.isNumber([])).to.not.be.ok();
        });
    });
}());
