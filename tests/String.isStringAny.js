/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isStringAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isStringAny(true)).to.not.be.ok();
            expect(utilx.String.isStringAny(false)).to.not.be.ok();
            expect(utilx.String.isStringAny()).to.not.be.ok();
            expect(utilx.String.isStringAny(null)).to.not.be.ok();
            expect(utilx.String.isStringAny('')).to.be.ok();
            expect(utilx.String.isStringAny(utilx.Object.ToObject(''))).to.be.ok();
            expect(utilx.String.isStringAny(0)).to.not.be.ok();
            expect(utilx.String.isStringAny(1)).to.not.be.ok();
            expect(utilx.String.isStringAny({})).to.not.be.ok();
            expect(utilx.String.isStringAny([])).to.not.be.ok();
        });
    });
}());
