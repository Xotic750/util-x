/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isUndefined', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isUndefined()).to.be.ok();
            expect(utilx.Object.isUndefined(null)).to.not.be.ok();
            expect(utilx.Object.isUndefined(undefined)).to.be.ok();
            expect(utilx.Object.isUndefined('undefined')).to.not.be.ok();
            expect(utilx.Object.isUndefined('null')).to.not.be.ok();
            expect(utilx.Object.isUndefined(0)).to.not.be.ok();
            expect(utilx.Object.isUndefined(1)).to.not.be.ok();
            expect(utilx.Object.isUndefined('')).to.not.be.ok();
            expect(utilx.Object.isUndefined([])).to.not.be.ok();
            expect(utilx.Object.isUndefined({})).to.not.be.ok();
        });
    });
}());
