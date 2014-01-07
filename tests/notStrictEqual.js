/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('notStrictEqual', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.notStrictEqual(-1, '-1')).to.be.ok();
            expect(utilx.notStrictEqual(0, '0')).to.be.ok();
            expect(utilx.notStrictEqual(1, '1')).to.be.ok();
            expect(utilx.notStrictEqual(Infinity, 'Infinity')).to.be.ok();
            expect(utilx.notStrictEqual(-Infinity, '-Infinity')).to.be.ok();
            expect(utilx.notStrictEqual(isNaN(NaN), isNaN('NaN'))).to.not.be.ok();
            expect(utilx.notStrictEqual(NaN, NaN)).to.be.ok();
            expect(utilx.notStrictEqual(NaN, 'NaN')).to.be.ok();
            expect(utilx.notStrictEqual(-1, -1)).to.not.be.ok();
            expect(utilx.notStrictEqual(0, 0)).to.not.be.ok();
            expect(utilx.notStrictEqual(1, 1)).to.not.be.ok();
            expect(utilx.notStrictEqual(Infinity, Infinity)).to.not.be.ok();
            expect(utilx.notStrictEqual(-Infinity, -Infinity)).to.not.be.ok();
            expect(utilx.notStrictEqual(utilx.numberIsNaN(NaN), utilx.numberIsNaN(NaN))).to.not.be.ok();
            expect(utilx.notStrictEqual(1, 2)).to.be.ok();
        });
    });
}());
