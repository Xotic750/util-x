/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isTrueObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isTrueObject(utilx.Object.ToObject(true))).to.be.ok();
            expect(utilx.Boolean.isTrueObject(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject(true)).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject(false)).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject()).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject(null)).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject('')).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject(0)).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject(1)).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject({})).to.not.be.ok();
            expect(utilx.Boolean.isTrueObject([])).to.not.be.ok();
        });
    });
}());
