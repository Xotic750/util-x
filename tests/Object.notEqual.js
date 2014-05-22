/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.notEqual', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.notEqual(-1, '-1')).to.not.be.ok();
            expect(utilx.Object.notEqual(0, '0')).to.not.be.ok();
            expect(utilx.Object.notEqual(1, '1')).to.not.be.ok();
            expect(utilx.Object.notEqual(Infinity, 'Infinity')).to.not.be.ok();
            expect(utilx.Object.notEqual(-Infinity, '-Infinity')).to.not.be.ok();
            expect(utilx.Object.notEqual(isNaN(NaN), isNaN('NaN'))).to.not.be.ok();
            expect(utilx.Object.notEqual(NaN, NaN)).to.be.ok();
            expect(utilx.Object.notEqual(NaN, 'NaN')).to.be.ok();
            expect(utilx.Object.notEqual(-1, -1)).to.not.be.ok();
            expect(utilx.Object.notEqual(0, 0)).to.not.be.ok();
            expect(utilx.Object.notEqual(1, 1)).to.not.be.ok();
            expect(utilx.Object.notEqual(Infinity, Infinity)).to.not.be.ok();
            expect(utilx.Object.notEqual(-Infinity, -Infinity)).to.not.be.ok();
            expect(utilx.Object.notEqual(utilx.Number.isNaN(NaN), utilx.Number.isNaN(NaN))).to.not.be.ok();
            expect(utilx.Object.notEqual(1, 2)).to.be.ok();
        });
    });
}());
