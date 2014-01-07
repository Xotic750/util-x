/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('mathSign', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.numberIsNaN(utilx.mathSign())).to.be.ok();
            expect(utilx.numberIsNaN(utilx.mathSign(utilx.privateUndefined))).to.be.ok();
            expect(utilx.isPositiveZero(utilx.mathSign(null))).to.be.ok();
            expect(utilx.mathSign(-1)).to.be(-1);
            expect(utilx.isPositiveZero(utilx.mathSign(+0))).to.be.ok();
            expect(utilx.isPositiveZero(utilx.mathSign('0'))).to.be.ok();
            expect(utilx.isPositiveZero(utilx.mathSign('+0'))).to.be.ok();
            expect(utilx.isNegativeZero(utilx.mathSign(-0))).to.be.ok();
            expect(utilx.isNegativeZero(utilx.mathSign('-0'))).to.be.ok();
            expect(utilx.mathSign(1)).to.be(1);
            expect(utilx.mathSign(Infinity)).to.be(1);
            expect(utilx.mathSign(-Infinity)).to.be(-1);
            expect(utilx.numberIsNaN(utilx.mathSign(NaN))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.mathSign('NaN'))).to.be.ok();
            expect(utilx.isPositiveZero(utilx.mathSign(''))).to.be.ok();
            expect(utilx.isPositiveZero(utilx.mathSign(' '))).to.be.ok();
            expect(utilx.mathSign(true)).to.be(1);
            expect(utilx.isPositiveZero(utilx.mathSign(false))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.mathSign(utilx.noop))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.mathSign({}))).to.be.ok();
            expect(utilx.isPositiveZero(utilx.mathSign([]))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.mathSign(new RegExp('c')))).to.be.ok();
            expect(utilx.mathSign(new Date(2013, 11, 11))).to.be(1);
            expect(utilx.numberIsNaN(utilx.mathSign(new Error('x')))).to.be.ok();

            // we also verify that [[ToNumber]] is being called
            utilx.arrayForEach([Infinity, 1], function (value) {
                expect(utilx.mathSign(value)).to.be(1);
                expect(utilx.mathSign(value.toString())).to.be(1);
            });

            expect(utilx.mathSign(true)).to.be(1);
            utilx.arrayForEach([-Infinity, -1], function (value) {
                expect(utilx.mathSign(value)).to.be(-1);
                expect(utilx.mathSign(value.toString())).to.be(-1);
            });
        });
    });
}());
