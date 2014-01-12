/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isStringNotEmpty', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isStringNotEmpty(true)).to.not.be.ok();
            expect(utilx.isStringNotEmpty(false)).to.not.be.ok();
            expect(utilx.isStringNotEmpty()).to.not.be.ok();
            expect(utilx.isStringNotEmpty(null)).to.not.be.ok();
            expect(utilx.isStringNotEmpty('')).to.not.be.ok();
            expect(utilx.isStringNotEmpty(' ')).to.be.ok();
            expect(utilx.isStringNotEmpty(0)).to.not.be.ok();
            expect(utilx.isStringNotEmpty(1)).to.not.be.ok();
            expect(utilx.isStringNotEmpty({})).to.not.be.ok();
            expect(utilx.isStringNotEmpty([])).to.not.be.ok();
        });
    });
}());
