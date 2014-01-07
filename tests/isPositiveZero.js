/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isPositiveZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isPositiveZero(0)).to.be.ok();
            expect(utilx.isPositiveZero(+0)).to.be.ok();
            expect(utilx.isPositiveZero(-0)).to.not.be.ok();
            expect(utilx.isPositiveZero(0.0)).to.be.ok();
            expect(utilx.isPositiveZero(+0.0)).to.be.ok();
            expect(utilx.isPositiveZero(-0.0)).to.not.be.ok();
            expect(utilx.isPositiveZero(1)).to.not.be.ok();
            expect(utilx.isPositiveZero('0')).to.not.be.ok();
            expect(utilx.isPositiveZero()).to.not.be.ok();
            expect(utilx.isPositiveZero(null)).to.not.be.ok();
        });
    });
}());
