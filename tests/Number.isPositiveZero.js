/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isPositiveZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isPositiveZero(0)).to.be(true);
            expect(utilx.Number.isPositiveZero(+0)).to.be(true);
            expect(utilx.Number.isPositiveZero(-0)).to.be(false);
            expect(utilx.Number.isPositiveZero(0.0)).to.be(true);
            expect(utilx.Number.isPositiveZero(+0.0)).to.be(true);
            expect(utilx.Number.isPositiveZero(-0.0)).to.be(false);
            expect(utilx.Number.isPositiveZero(1)).to.be(false);
            expect(utilx.Number.isPositiveZero(NaN)).to.be(false);
            expect(utilx.Number.isPositiveZero(Infinity)).to.be(false);
            expect(utilx.Number.isPositiveZero(-Infinity)).to.be(false);
            expect(utilx.Number.isPositiveZero('0')).to.be(undefined);
            expect(utilx.Number.isPositiveZero()).to.be(undefined);
            expect(utilx.Number.isPositiveZero(undefined)).to.be(undefined);
            expect(utilx.Number.isPositiveZero(null)).to.be(undefined);
            expect(utilx.Number.isPositiveZero({})).to.be(undefined);
            expect(utilx.Number.isPositiveZero([])).to.be(undefined);
        });
    });
}());
