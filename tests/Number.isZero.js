/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isZero(0)).to.be(true);
            expect(utilx.Number.isZero(+0)).to.be(true);
            expect(utilx.Number.isZero(-0)).to.be(true);
            expect(utilx.Number.isZero(0.0)).to.be(true);
            expect(utilx.Number.isZero(+0.0)).to.be(true);
            expect(utilx.Number.isZero(-0.0)).to.be(true);
            expect(utilx.Number.isZero(1)).to.be(false);
            expect(utilx.Number.isZero(NaN)).to.be(false);
            expect(utilx.Number.isZero(Infinity)).to.be(false);
            expect(utilx.Number.isZero(-Infinity)).to.be(false);
            expect(utilx.Number.isZero('0')).to.be(undefined);
            expect(utilx.Number.isZero()).to.be(undefined);
            expect(utilx.Number.isZero(undefined)).to.be(undefined);
            expect(utilx.Number.isZero(null)).to.be(undefined);
            expect(utilx.Number.isZero({})).to.be(undefined);
            expect(utilx.Number.isZero([])).to.be(undefined);
        });
    });
}());
