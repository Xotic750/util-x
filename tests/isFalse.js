/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isFalse', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isFalse(true)).to.not.be.ok();
            expect(utilx.isFalse(false)).to.be.ok();
            expect(utilx.isFalse()).to.not.be.ok();
            expect(utilx.isFalse(null)).to.not.be.ok();
            expect(utilx.isFalse('')).to.not.be.ok();
            expect(utilx.isFalse(0)).to.not.be.ok();
            expect(utilx.isFalse(1)).to.not.be.ok();
            expect(utilx.isFalse({})).to.not.be.ok();
            expect(utilx.isFalse([])).to.not.be.ok();
        });
    });
}());
