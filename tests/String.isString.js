/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isString(true)).to.not.be.ok();
            expect(utilx.String.isString(false)).to.not.be.ok();
            expect(utilx.String.isString()).to.not.be.ok();
            expect(utilx.String.isString(null)).to.not.be.ok();
            expect(utilx.String.isString('')).to.be.ok();
            expect(utilx.String.isString(0)).to.not.be.ok();
            expect(utilx.String.isString(1)).to.not.be.ok();
            expect(utilx.String.isString({})).to.not.be.ok();
            expect(utilx.String.isString([])).to.not.be.ok();
        });
    });
}());
