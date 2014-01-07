/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isZero', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isZero(0)).to.be.ok();
            expect(utilx.isZero(+0)).to.be.ok();
            expect(utilx.isZero(-0)).to.be.ok();
            expect(utilx.isZero(1)).to.not.be.ok();
            expect(utilx.isZero('0')).to.not.be.ok();
            expect(utilx.isZero()).to.not.be.ok();
            expect(utilx.isZero(null)).to.not.be.ok();
        });
    });
}());
