/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.lt', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.lt(1, 2)).to.be.ok();
            expect(utilx.Object.lt(1, 1)).to.not.be.ok();
            expect(utilx.Object.lt(1, 0)).to.not.be.ok();
            expect(utilx.Object.lt(0, 0)).to.not.be.ok();
            expect(utilx.Object.lt(0, +0)).to.not.be.ok();
            expect(utilx.Object.lt(0, -0)).to.not.be.ok();
        });
    });
}());
