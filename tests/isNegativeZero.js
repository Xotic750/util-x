/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isNegativeZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isNegativeZero(0)).to.not.be.ok();
            expect(utilx.isNegativeZero(+0)).to.not.be.ok();
            expect(utilx.isNegativeZero(-0)).to.be.ok();
            expect(utilx.isNegativeZero(0.0)).to.not.be.ok();
            expect(utilx.isNegativeZero(+0.0)).to.not.be.ok();
            expect(utilx.isNegativeZero(-0.0)).to.be.ok();
            expect(utilx.isNegativeZero(1)).to.not.be.ok();
            expect(utilx.isNegativeZero('0')).to.not.be.ok();
            expect(utilx.isNegativeZero()).to.not.be.ok();
            expect(utilx.isNegativeZero(null)).to.not.be.ok();
        });
    });
}());
