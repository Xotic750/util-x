/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNumberObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isNumberObject(10)).to.not.be.ok();
            expect(utilx.Number.isNumberObject(utilx.Object.ToObject(10))).to.be.ok();
            expect(utilx.Number.isNumberObject(NaN)).to.not.be.ok();
            expect(utilx.Number.isNumberObject(Infinity)).to.not.be.ok();
            expect(utilx.Number.isNumberObject(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isNumberObject('10')).to.not.be.ok();
            expect(utilx.Number.isNumberObject()).to.not.be.ok();
            expect(utilx.Number.isNumberObject(null)).to.not.be.ok();
            expect(utilx.Number.isNumberObject({})).to.not.be.ok();
            expect(utilx.Number.isNumberObject([])).to.not.be.ok();
        });
    });
}());
