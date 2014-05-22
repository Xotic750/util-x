/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isZero(0)).to.be.ok();
            expect(utilx.Number.isZero(+0)).to.be.ok();
            expect(utilx.Number.isZero(-0)).to.be.ok();
            expect(utilx.Number.isZero(0.0)).to.be.ok();
            expect(utilx.Number.isZero(+0.0)).to.be.ok();
            expect(utilx.Number.isZero(-0.0)).to.be.ok();
            expect(utilx.Number.isZero(1)).to.not.be.ok();
            expect(utilx.Number.isZero('0')).to.not.be.ok();
            expect(utilx.Number.isZero()).to.not.be.ok();
            expect(utilx.Number.isZero(null)).to.not.be.ok();
        });
    });
}());
