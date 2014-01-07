/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('basics', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.gt(1, 0)).to.be.ok();
            expect(utilx.gt(1, 1)).to.not.be.ok();
            expect(utilx.gt(1, 2)).to.not.be.ok();
            expect(utilx.gt(0, 0)).to.not.be.ok();
            expect(utilx.gt(0, +0)).to.not.be.ok();
            expect(utilx.gt(0, -0)).to.not.be.ok();
        });
    });
}());
