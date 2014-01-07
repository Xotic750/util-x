/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isTrue', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isTrue(true)).to.be.ok();
            expect(utilx.isTrue(false)).to.not.be.ok();
            expect(utilx.isTrue()).to.not.be.ok();
            expect(utilx.isTrue(null)).to.not.be.ok();
            expect(utilx.isTrue('')).to.not.be.ok();
            expect(utilx.isTrue(0)).to.not.be.ok();
            expect(utilx.isTrue(1)).to.not.be.ok();
            expect(utilx.isTrue({})).to.not.be.ok();
            expect(utilx.isTrue([])).to.not.be.ok();
        });
    });
}());
