/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isStringObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isStringObject(true)).to.not.be.ok();
            expect(utilx.String.isStringObject(false)).to.not.be.ok();
            expect(utilx.String.isStringObject()).to.not.be.ok();
            expect(utilx.String.isStringObject(null)).to.not.be.ok();
            expect(utilx.String.isStringObject('')).to.not.be.ok();
            expect(utilx.String.isStringObject(utilx.Object.ToObject(''))).to.be.ok();
            expect(utilx.String.isStringObject(0)).to.not.be.ok();
            expect(utilx.String.isStringObject(1)).to.not.be.ok();
            expect(utilx.String.isStringObject({})).to.not.be.ok();
            expect(utilx.String.isStringObject([])).to.not.be.ok();
        });
    });
}());
