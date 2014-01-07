/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isNull', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isNull()).to.not.be.ok();
            expect(utilx.isNull(null)).to.be.ok();
            expect(utilx.isNull(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isNull('undefined')).to.not.be.ok();
            expect(utilx.isNull('null')).to.not.be.ok();
            expect(utilx.isNull(0)).to.not.be.ok();
            expect(utilx.isNull(1)).to.not.be.ok();
            expect(utilx.isNull('')).to.not.be.ok();
            expect(utilx.isNull([])).to.not.be.ok();
            expect(utilx.isNull({})).to.not.be.ok();
        });
    });
}());
