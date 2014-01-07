/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isUndefined', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isUndefined()).to.be.ok();
            expect(utilx.isUndefined(null)).to.not.be.ok();
            expect(utilx.isUndefined(utilx.privateUndefined)).to.be.ok();
            expect(utilx.isUndefined('undefined')).to.not.be.ok();
            expect(utilx.isUndefined('null')).to.not.be.ok();
            expect(utilx.isUndefined(0)).to.not.be.ok();
            expect(utilx.isUndefined(1)).to.not.be.ok();
            expect(utilx.isUndefined('')).to.not.be.ok();
            expect(utilx.isUndefined([])).to.not.be.ok();
            expect(utilx.isUndefined({})).to.not.be.ok();
        });
    });
}());
