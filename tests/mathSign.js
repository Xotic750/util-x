/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function isPositiveZero(zero) {
        return utilx.isZero(zero) && utilx.strictEqual(1 / zero, Infinity);
    }

    function isNegativeZero(zero) {
        return utilx.isZero(zero) && utilx.strictEqual(1 / zero, -Infinity);
    }

    describe('mathSign', function () {
        it('should not throw an error in each case', function () {
            expect(isNaN(utilx.mathSign())).to.be.ok();
            expect(isNaN(utilx.mathSign(utilx.privateUndefined))).to.be.ok();
            expect(utilx.mathSign(null)).to.be(0);
            expect(utilx.mathSign(-1)).to.be(-1);
            expect(utilx.mathSign(0)).to.be(0);
            expect(utilx.mathSign(1)).to.be(1);
            expect(utilx.mathSign(Infinity)).to.be(1);
            expect(utilx.mathSign(-Infinity)).to.be(-1);
            expect(isNaN(utilx.mathSign(NaN))).to.be.ok();
            expect(utilx.mathSign('')).to.be(0);
            expect(utilx.mathSign(true)).to.be(1);
            expect(utilx.mathSign(false)).to.be(0);
            expect(isNaN(utilx.mathSign(utilx.noop))).to.be.ok();
            expect(isNaN(utilx.mathSign({}))).to.be.ok();
            expect(utilx.mathSign([])).to.be(0);
            expect(isNaN(utilx.mathSign(new RegExp('c')))).to.be.ok();
            expect(utilx.mathSign(new Date(2013, 11, 11))).to.be(1);
            expect(isNaN(utilx.mathSign(new Error('x')))).to.be.ok();

            // we also verify that [[ToNumber]] is being called
            [Infinity, 1].forEach(function (value) {
                expect(utilx.mathSign(value)).to.equal(1);
                expect(utilx.mathSign(value.toString())).to.equal(1);
            });
            expect(utilx.mathSign(true)).to.equal(1);

            [-Infinity, -1].forEach(function (value) {
                expect(utilx.mathSign(value)).to.equal(-1);
                expect(utilx.mathSign(value.toString())).to.equal(-1);
            });

            expect(isPositiveZero(utilx.mathSign(+0))).to.be.ok();
            expect(isPositiveZero(utilx.mathSign('0'))).to.be.ok();
            expect(isPositiveZero(utilx.mathSign('+0'))).to.be.ok();
            expect(isPositiveZero(utilx.mathSign(''))).to.be.ok();
            expect(isPositiveZero(utilx.mathSign(' '))).to.be.ok();
            expect(isPositiveZero(utilx.mathSign(null))).to.be.ok();
            expect(isPositiveZero(utilx.mathSign(false))).to.be.ok();
            expect(isNegativeZero(utilx.mathSign(-0))).to.be.ok();
            expect(isNegativeZero(utilx.mathSign('-0'))).to.be.ok();
            expect(Number.isNaN(utilx.mathSign(NaN))).to.be.ok();
            expect(Number.isNaN(utilx.mathSign('NaN'))).to.be.ok();
            expect(Number.isNaN(utilx.mathSign(undefined))).to.be.ok();
        });
    });
}());
