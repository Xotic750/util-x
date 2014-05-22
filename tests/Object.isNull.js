/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isNull', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isNull()).to.not.be.ok();
            expect(utilx.Object.isNull(null)).to.be.ok();
            expect(utilx.Object.isNull(undefined)).to.not.be.ok();
            expect(utilx.Object.isNull('undefined')).to.not.be.ok();
            expect(utilx.Object.isNull('null')).to.not.be.ok();
            expect(utilx.Object.isNull(0)).to.not.be.ok();
            expect(utilx.Object.isNull(1)).to.not.be.ok();
            expect(utilx.Object.isNull('')).to.not.be.ok();
            expect(utilx.Object.isNull([])).to.not.be.ok();
            expect(utilx.Object.isNull({})).to.not.be.ok();
        });
    });
}());
