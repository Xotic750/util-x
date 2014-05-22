/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmptyAny', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmptyAny(true)).to.not.be.ok();
            expect(utilx.String.isEmptyAny(false)).to.not.be.ok();
            expect(utilx.String.isEmptyAny()).to.not.be.ok();
            expect(utilx.String.isEmptyAny(null)).to.not.be.ok();
            expect(utilx.String.isEmptyAny('')).to.be.ok();
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(''))).to.be.ok();
            expect(utilx.String.isEmptyAny(' ')).to.not.be.ok();
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(' '))).to.not.be.ok();
            expect(utilx.String.isEmptyAny(0)).to.not.be.ok();
            expect(utilx.String.isEmptyAny(1)).to.not.be.ok();
            expect(utilx.String.isEmptyAny({})).to.not.be.ok();
            expect(utilx.String.isEmptyAny([])).to.not.be.ok();
        });
    });
}());
