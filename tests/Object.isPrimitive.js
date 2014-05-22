/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isPrimitive', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isPrimitive()).to.be.ok();
            expect(utilx.Object.isPrimitive(null)).to.be.ok();
            expect(utilx.Object.isPrimitive('')).to.be.ok();
            expect(utilx.Object.isPrimitive(1)).to.be.ok();
            expect(utilx.Object.isPrimitive(false)).to.be.ok();
            expect(utilx.Object.isPrimitive({})).to.not.be.ok();
            expect(utilx.Object.isPrimitive([])).to.not.be.ok();
        });
    });
}());
