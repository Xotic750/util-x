/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isDigits', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isDigits(true)).to.not.be.ok();
            expect(utilx.isDigits(false)).to.not.be.ok();
            expect(utilx.isDigits()).to.not.be.ok();
            expect(utilx.isDigits(null)).to.not.be.ok();
            expect(utilx.isDigits('')).to.not.be.ok();
            expect(utilx.isDigits(' ')).to.not.be.ok();
            expect(utilx.isDigits(0)).to.not.be.ok();
            expect(utilx.isDigits(1)).to.not.be.ok();
            expect(utilx.isDigits({})).to.not.be.ok();
            expect(utilx.isDigits([])).to.not.be.ok();
            expect(utilx.isDigits('1234567890.0')).to.not.be.ok();
            expect(utilx.isDigits('-1234567890')).to.not.be.ok();
            expect(utilx.isDigits('-1234567890')).to.not.be.ok();
            expect(utilx.isDigits('1234567890')).to.be.ok();
        });
    });
}());
