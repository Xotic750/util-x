/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmpty', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmpty(true)).to.not.be.ok();
            expect(utilx.String.isNotEmpty(false)).to.not.be.ok();
            expect(utilx.String.isNotEmpty()).to.not.be.ok();
            expect(utilx.String.isNotEmpty(null)).to.not.be.ok();
            expect(utilx.String.isNotEmpty('')).to.not.be.ok();
            expect(utilx.String.isNotEmpty(utilx.Object.ToObject(''))).to.not.be.ok();
            expect(utilx.String.isNotEmpty(' ')).to.be.ok();
            expect(utilx.String.isNotEmpty(utilx.Object.ToObject(' '))).to.not.be.ok();
            expect(utilx.String.isNotEmpty(0)).to.not.be.ok();
            expect(utilx.String.isNotEmpty(1)).to.not.be.ok();
            expect(utilx.String.isNotEmpty({})).to.not.be.ok();
            expect(utilx.String.isNotEmpty([])).to.not.be.ok();
        });
    });
}());
