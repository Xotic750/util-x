/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isUndefinedOrNull', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isUndefinedOrNull()).to.be.ok();
            expect(utilx.Object.isUndefinedOrNull(null)).to.be.ok();
            expect(utilx.Object.isUndefinedOrNull(undefined)).to.be.ok();
            expect(utilx.Object.isUndefinedOrNull('undefined')).to.not.be.ok();
            expect(utilx.Object.isUndefinedOrNull('null')).to.not.be.ok();
            expect(utilx.Object.isUndefinedOrNull(0)).to.not.be.ok();
            expect(utilx.Object.isUndefinedOrNull(1)).to.not.be.ok();
            expect(utilx.Object.isUndefinedOrNull('')).to.not.be.ok();
            expect(utilx.Object.isUndefinedOrNull([])).to.not.be.ok();
            expect(utilx.Object.isUndefinedOrNull({})).to.not.be.ok();
        });
    });
}());
