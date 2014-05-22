/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.lte', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.lte(1, 1)).to.be.ok();
            expect(utilx.Object.lte(1, 0)).to.not.be.ok();
            expect(utilx.Object.lte(1, 2)).to.be.ok();
            expect(utilx.Object.lte(0, 0)).to.be.ok();
            expect(utilx.Object.lte(0, +0)).to.be.ok();
            expect(utilx.Object.lte(0, -0)).to.be.ok();
        });
    });
}());
