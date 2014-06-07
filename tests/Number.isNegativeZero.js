/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNegativeZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isNegativeZero(0)).to.be(false);
            expect(utilx.Number.isNegativeZero(+0)).to.be(false);
            expect(utilx.Number.isNegativeZero(-0)).to.be(true);
            expect(utilx.Number.isNegativeZero(0.0)).to.be(false);
            expect(utilx.Number.isNegativeZero(+0.0)).to.be(false);
            expect(utilx.Number.isNegativeZero(-0.0)).to.be(true);
            expect(utilx.Number.isNegativeZero(1)).to.be(false);
            expect(utilx.Number.isNegativeZero(NaN)).to.be(false);
            expect(utilx.Number.isNegativeZero(Infinity)).to.be(false);
            expect(utilx.Number.isNegativeZero(-Infinity)).to.be(false);
            expect(utilx.Number.isNegativeZero('0')).to.be(undefined);
            expect(utilx.Number.isNegativeZero()).to.be(undefined);
            expect(utilx.Number.isNegativeZero(undefined)).to.be(undefined);
            expect(utilx.Number.isNegativeZero(null)).to.be(undefined);
            expect(utilx.Number.isNegativeZero({})).to.be(undefined);
            expect(utilx.Number.isNegativeZero([])).to.be(undefined);
        });
    });
}());
