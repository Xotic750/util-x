/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isString(true)).to.not.be.ok();
            expect(utilx.isString(false)).to.not.be.ok();
            expect(utilx.isString()).to.not.be.ok();
            expect(utilx.isString(null)).to.not.be.ok();
            expect(utilx.isString('')).to.be.ok();
            expect(utilx.isString(0)).to.not.be.ok();
            expect(utilx.isString(1)).to.not.be.ok();
            expect(utilx.isString({})).to.not.be.ok();
            expect(utilx.isString([])).to.not.be.ok();
        });
    });
}());
