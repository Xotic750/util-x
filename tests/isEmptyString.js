/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isEmptyString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isEmptyString(true)).to.not.be.ok();
            expect(utilx.isEmptyString(false)).to.not.be.ok();
            expect(utilx.isEmptyString()).to.not.be.ok();
            expect(utilx.isEmptyString(null)).to.not.be.ok();
            expect(utilx.isEmptyString('')).to.be.ok();
            expect(utilx.isEmptyString(' ')).to.not.be.ok();
            expect(utilx.isEmptyString(0)).to.not.be.ok();
            expect(utilx.isEmptyString(1)).to.not.be.ok();
            expect(utilx.isEmptyString({})).to.not.be.ok();
            expect(utilx.isEmptyString([])).to.not.be.ok();
        });
    });
}());
