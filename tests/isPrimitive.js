/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isPrimitive', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isPrimitive()).to.be.ok();
            expect(utilx.isPrimitive(null)).to.be.ok();
            expect(utilx.isPrimitive('')).to.be.ok();
            expect(utilx.isPrimitive(1)).to.be.ok();
            expect(utilx.isPrimitive(false)).to.be.ok();
            expect(utilx.isPrimitive({})).to.not.be.ok();
            expect(utilx.isPrimitive([])).to.not.be.ok();
        });
    });
}());
