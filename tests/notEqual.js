/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('notEqual', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.notEqual(-1, '-1')).to.not.be.ok();
            expect(utilx.notEqual(0, '0')).to.not.be.ok();
            expect(utilx.notEqual(1, '1')).to.not.be.ok();
            expect(utilx.notEqual(Infinity, 'Infinity')).to.not.be.ok();
            expect(utilx.notEqual(-Infinity, '-Infinity')).to.not.be.ok();
            expect(utilx.notEqual(isNaN(NaN), isNaN('NaN'))).to.not.be.ok();
            expect(utilx.notEqual(NaN, NaN)).to.be.ok();
            expect(utilx.notEqual(NaN, 'NaN')).to.be.ok();
            expect(utilx.notEqual(-1, -1)).to.not.be.ok();
            expect(utilx.notEqual(0, 0)).to.not.be.ok();
            expect(utilx.notEqual(1, 1)).to.not.be.ok();
            expect(utilx.notEqual(Infinity, Infinity)).to.not.be.ok();
            expect(utilx.notEqual(-Infinity, -Infinity)).to.not.be.ok();
            expect(utilx.notEqual(utilx.numberIsNaN(NaN), utilx.numberIsNaN(NaN))).to.not.be.ok();
            expect(utilx.notEqual(1, 2)).to.be.ok();
        });
    });
}());
