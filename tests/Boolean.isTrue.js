/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isTrue', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isTrue(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Boolean.isTrue(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Boolean.isTrue(true)).to.be.ok();
            expect(utilx.Boolean.isTrue(false)).to.not.be.ok();
            expect(utilx.Boolean.isTrue()).to.not.be.ok();
            expect(utilx.Boolean.isTrue(null)).to.not.be.ok();
            expect(utilx.Boolean.isTrue('')).to.not.be.ok();
            expect(utilx.Boolean.isTrue(0)).to.not.be.ok();
            expect(utilx.Boolean.isTrue(1)).to.not.be.ok();
            expect(utilx.Boolean.isTrue({})).to.not.be.ok();
            expect(utilx.Boolean.isTrue([])).to.not.be.ok();
        });
    });
}());
