/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isNotPrimitive', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isNotPrimitive()).to.not.be.ok();
            expect(utilx.Object.isNotPrimitive(null)).to.not.be.ok();
            expect(utilx.Object.isNotPrimitive('')).to.not.be.ok();
            expect(utilx.Object.isNotPrimitive(1)).to.not.be.ok();
            expect(utilx.Object.isNotPrimitive(false)).to.not.be.ok();
            expect(utilx.Object.isNotPrimitive({})).to.be.ok();
            expect(utilx.Object.isNotPrimitive([])).to.be.ok();
        });
    });
}());
