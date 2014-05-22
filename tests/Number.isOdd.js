/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isOdd', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isOdd(-3.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(-3)).to.be.ok();
            expect(utilx.Number.isOdd(-2.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(-2)).to.not.be.ok();
            expect(utilx.Number.isOdd(-1.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(-1)).to.be.ok();
            expect(utilx.Number.isOdd(-0.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(0)).to.not.be.ok();
            expect(utilx.Number.isOdd(0.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(1)).to.be.ok();
            expect(utilx.Number.isOdd(1.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(2)).to.not.be.ok();
            expect(utilx.Number.isOdd(2.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(3)).to.be.ok();
            expect(utilx.Number.isOdd(3.5)).to.not.be.ok();
            expect(utilx.Number.isOdd(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Number.isOdd(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Number.isOdd(true)).to.not.be.ok();
            expect(utilx.Number.isOdd(false)).to.not.be.ok();
            expect(utilx.Number.isOdd()).to.not.be.ok();
            expect(utilx.Number.isOdd(null)).to.not.be.ok();
            expect(utilx.Number.isOdd('')).to.not.be.ok();
            expect(utilx.Number.isOdd({})).to.not.be.ok();
            expect(utilx.Number.isOdd([])).to.not.be.ok();
            expect(utilx.Number.isOdd(NaN)).to.not.be.ok();
            expect(utilx.Number.isOdd(Infinity)).to.not.be.ok();
            expect(utilx.Number.isOdd(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isOdd(utilx.Number.UNSAFE_INTEGER)).to.not.be.ok();
            expect(utilx.Number.isOdd(-utilx.Number.UNSAFE_INTEGER)).to.not.be.ok();
        });
    });
}());
