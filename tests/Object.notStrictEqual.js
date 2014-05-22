/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.notStrictEqual', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.notStrictEqual(-1, '-1')).to.be.ok();
            expect(utilx.Object.notStrictEqual(0, '0')).to.be.ok();
            expect(utilx.Object.notStrictEqual(1, '1')).to.be.ok();
            expect(utilx.Object.notStrictEqual(Infinity, 'Infinity')).to.be.ok();
            expect(utilx.Object.notStrictEqual(-Infinity, '-Infinity')).to.be.ok();
            expect(utilx.Object.notStrictEqual(isNaN(NaN), isNaN('NaN'))).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(NaN, NaN)).to.be.ok();
            expect(utilx.Object.notStrictEqual(NaN, 'NaN')).to.be.ok();
            expect(utilx.Object.notStrictEqual(-1, -1)).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(0, 0)).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(1, 1)).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(Infinity, Infinity)).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(-Infinity, -Infinity)).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(utilx.Number.isNaN(NaN), utilx.Number.isNaN(NaN))).to.not.be.ok();
            expect(utilx.Object.notStrictEqual(1, 2)).to.be.ok();
        });
    });
}());
