/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isPositiveZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isPositiveZero(0)).to.be.ok();
            expect(utilx.Number.isPositiveZero(+0)).to.be.ok();
            expect(utilx.Number.isPositiveZero(-0)).to.not.be.ok();
            expect(utilx.Number.isPositiveZero(0.0)).to.be.ok();
            expect(utilx.Number.isPositiveZero(+0.0)).to.be.ok();
            expect(utilx.Number.isPositiveZero(-0.0)).to.not.be.ok();
            expect(utilx.Number.isPositiveZero(1)).to.not.be.ok();
            expect(utilx.Number.isPositiveZero('0')).to.not.be.ok();
            expect(utilx.Number.isPositiveZero()).to.not.be.ok();
            expect(utilx.Number.isPositiveZero(null)).to.not.be.ok();
        });
    });
}());
