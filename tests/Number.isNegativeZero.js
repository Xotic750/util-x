/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNegativeZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isNegativeZero(0)).to.not.be.ok();
            expect(utilx.Number.isNegativeZero(+0)).to.not.be.ok();
            expect(utilx.Number.isNegativeZero(-0)).to.be.ok();
            expect(utilx.Number.isNegativeZero(0.0)).to.not.be.ok();
            expect(utilx.Number.isNegativeZero(+0.0)).to.not.be.ok();
            expect(utilx.Number.isNegativeZero(-0.0)).to.be.ok();
            expect(utilx.Number.isNegativeZero(1)).to.not.be.ok();
            expect(utilx.Number.isNegativeZero('0')).to.not.be.ok();
            expect(utilx.Number.isNegativeZero()).to.not.be.ok();
            expect(utilx.Number.isNegativeZero(null)).to.not.be.ok();
        });
    });
}());
