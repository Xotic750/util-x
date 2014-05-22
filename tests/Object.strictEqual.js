/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.strictEqual', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.strictEqual(-1, '-1')).to.not.be.ok();
            expect(utilx.Object.strictEqual(0, '0')).to.not.be.ok();
            expect(utilx.Object.strictEqual(1, '1')).to.not.be.ok();
            expect(utilx.Object.strictEqual(Infinity, 'Infinity')).to.not.be.ok();
            expect(utilx.Object.strictEqual(-Infinity, '-Infinity')).to.not.be.ok();
            expect(utilx.Object.strictEqual(isNaN(NaN), isNaN('NaN'))).to.be.ok();
            expect(utilx.Object.strictEqual(NaN, NaN)).to.not.be.ok();
            expect(utilx.Object.strictEqual(NaN, 'NaN')).to.not.be.ok();
            expect(utilx.Object.strictEqual(-1, -1)).to.be.ok();
            expect(utilx.Object.strictEqual(0, 0)).to.be.ok();
            expect(utilx.Object.strictEqual(1, 1)).to.be.ok();
            expect(utilx.Object.strictEqual(Infinity, Infinity)).to.be.ok();
            expect(utilx.Object.strictEqual(-Infinity, -Infinity)).to.be.ok();
            expect(utilx.Object.strictEqual(utilx.Number.isNaN(NaN), utilx.Number.isNaN(NaN))).to.be.ok();
            expect(utilx.Object.strictEqual(1, 2)).to.not.be.ok();
        });
    });
}());
