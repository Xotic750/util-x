/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isUndefinedOrNull', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isUndefinedOrNull()).to.be.ok();
            expect(utilx.isUndefinedOrNull(null)).to.be.ok();
            expect(utilx.isUndefinedOrNull(utilx.privateUndefined)).to.be.ok();
            expect(utilx.isUndefinedOrNull('undefined')).to.not.be.ok();
            expect(utilx.isUndefinedOrNull('null')).to.not.be.ok();
            expect(utilx.isUndefinedOrNull(0)).to.not.be.ok();
            expect(utilx.isUndefinedOrNull(1)).to.not.be.ok();
            expect(utilx.isUndefinedOrNull('')).to.not.be.ok();
            expect(utilx.isUndefinedOrNull([])).to.not.be.ok();
            expect(utilx.isUndefinedOrNull({})).to.not.be.ok();
        });
    });
}());
