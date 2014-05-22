/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isEven', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isEven(-3.5)).to.not.be.ok();
            expect(utilx.Number.isEven(-3)).to.not.be.ok();
            expect(utilx.Number.isEven(-2.5)).to.not.be.ok();
            expect(utilx.Number.isEven(-2)).to.be.ok();
            expect(utilx.Number.isEven(-1.5)).to.not.be.ok();
            expect(utilx.Number.isEven(-1)).to.not.be.ok();
            expect(utilx.Number.isEven(-0.5)).to.not.be.ok();
            expect(utilx.Number.isEven(0)).to.be.ok();
            expect(utilx.Number.isEven(0.5)).to.not.be.ok();
            expect(utilx.Number.isEven(1)).to.not.be.ok();
            expect(utilx.Number.isEven(1.5)).to.not.be.ok();
            expect(utilx.Number.isEven(2)).to.be.ok();
            expect(utilx.Number.isEven(2.5)).to.not.be.ok();
            expect(utilx.Number.isEven(3)).to.not.be.ok();
            expect(utilx.Number.isEven(3.5)).to.not.be.ok();
            expect(utilx.Number.isEven(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Number.isEven(utilx.Object.ToObject(false))).to.not.be.ok();
            expect(utilx.Number.isEven(true)).to.not.be.ok();
            expect(utilx.Number.isEven(false)).to.not.be.ok();
            expect(utilx.Number.isEven()).to.not.be.ok();
            expect(utilx.Number.isEven(null)).to.not.be.ok();
            expect(utilx.Number.isEven('')).to.not.be.ok();
            expect(utilx.Number.isEven({})).to.not.be.ok();
            expect(utilx.Number.isEven([])).to.not.be.ok();
            expect(utilx.Number.isEven(NaN)).to.not.be.ok();
            expect(utilx.Number.isEven(Infinity)).to.not.be.ok();
            expect(utilx.Number.isEven(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isEven(utilx.Number.UNSAFE_INTEGER)).to.not.be.ok();
            expect(utilx.Number.isEven(-utilx.Number.UNSAFE_INTEGER)).to.not.be.ok();
        });
    });
}());
