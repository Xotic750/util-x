/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isDigits', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isDigits(true)).to.not.be.ok();
            expect(utilx.String.isDigits(false)).to.not.be.ok();
            expect(utilx.String.isDigits()).to.not.be.ok();
            expect(utilx.String.isDigits(null)).to.not.be.ok();
            expect(utilx.String.isDigits('')).to.not.be.ok();
            expect(utilx.String.isDigits(' ')).to.not.be.ok();
            expect(utilx.String.isDigits(0)).to.not.be.ok();
            expect(utilx.String.isDigits(1)).to.not.be.ok();
            expect(utilx.String.isDigits({})).to.not.be.ok();
            expect(utilx.String.isDigits([])).to.not.be.ok();
            expect(utilx.String.isDigits('1234567890.0')).to.not.be.ok();
            expect(utilx.String.isDigits('-1234567890')).to.not.be.ok();
            expect(utilx.String.isDigits('-1234567890')).to.not.be.ok();
            expect(utilx.String.isDigits('1234567890')).to.be.ok();
        });
    });
}());
