/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isBoolean', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isBoolean(true)).to.be.ok();
            expect(utilx.isBoolean(false)).to.be.ok();
            expect(utilx.isBoolean()).to.not.be.ok();
            expect(utilx.isBoolean(null)).to.not.be.ok();
            expect(utilx.isBoolean('')).to.not.be.ok();
            expect(utilx.isBoolean(0)).to.not.be.ok();
            expect(utilx.isBoolean(1)).to.not.be.ok();
            expect(utilx.isBoolean({})).to.not.be.ok();
            expect(utilx.isBoolean([])).to.not.be.ok();
        });
    });
}());
