/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmptyAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmptyAny(true)).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(false)).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny()).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(null)).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny('')).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(utilx.Object.ToObject(''))).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(' ')).to.be.ok();
            expect(utilx.String.isNotEmptyAny(utilx.Object.ToObject(' '))).to.be.ok();
            expect(utilx.String.isNotEmptyAny(0)).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny(1)).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny({})).to.not.be.ok();
            expect(utilx.String.isNotEmptyAny([])).to.not.be.ok();
        });
    });
}());
