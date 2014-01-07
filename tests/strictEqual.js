/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('strictEqual', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.strictEqual(-1, '-1')).to.not.be.ok();
            expect(utilx.strictEqual(0, '0')).to.not.be.ok();
            expect(utilx.strictEqual(1, '1')).to.not.be.ok();
            expect(utilx.strictEqual(Infinity, 'Infinity')).to.not.be.ok();
            expect(utilx.strictEqual(-Infinity, '-Infinity')).to.not.be.ok();
            expect(utilx.strictEqual(isNaN(NaN), isNaN('NaN'))).to.be.ok();
            expect(utilx.strictEqual(NaN, NaN)).to.not.be.ok();
            expect(utilx.strictEqual(NaN, 'NaN')).to.not.be.ok();
            expect(utilx.strictEqual(-1, -1)).to.be.ok();
            expect(utilx.strictEqual(0, 0)).to.be.ok();
            expect(utilx.strictEqual(1, 1)).to.be.ok();
            expect(utilx.strictEqual(Infinity, Infinity)).to.be.ok();
            expect(utilx.strictEqual(-Infinity, -Infinity)).to.be.ok();
            expect(utilx.strictEqual(utilx.numberIsNaN(NaN), utilx.numberIsNaN(NaN))).to.be.ok();
            expect(utilx.strictEqual(1, 2)).to.not.be.ok();
        });
    });
}());
