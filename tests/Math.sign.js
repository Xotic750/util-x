/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Math.sign', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.isNaN(utilx.Math.sign())).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Math.sign(undefined))).to.be.ok();
            expect(utilx.Number.isPositiveZero(utilx.Math.sign(null))).to.be.ok();
            expect(utilx.Math.sign(-1)).to.be(-1);
            expect(utilx.Number.isPositiveZero(utilx.Math.sign(+0))).to.be.ok();
            expect(utilx.Number.isPositiveZero(utilx.Math.sign('0'))).to.be.ok();
            expect(utilx.Number.isPositiveZero(utilx.Math.sign('+0'))).to.be.ok();
            expect(utilx.Number.isNegativeZero(utilx.Math.sign(-0))).to.be.ok();
            expect(utilx.Number.isNegativeZero(utilx.Math.sign('-0'))).to.be.ok();
            expect(utilx.Math.sign(1)).to.be(1);
            expect(utilx.Math.sign(Infinity)).to.be(1);
            expect(utilx.Math.sign(-Infinity)).to.be(-1);
            expect(utilx.Number.isNaN(utilx.Math.sign(NaN))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Math.sign('NaN'))).to.be.ok();
            expect(utilx.Number.isPositiveZero(utilx.Math.sign(''))).to.be.ok();
            expect(utilx.Number.isPositiveZero(utilx.Math.sign(' '))).to.be.ok();
            expect(utilx.Math.sign(true)).to.be(1);
            expect(utilx.Number.isPositiveZero(utilx.Math.sign(false))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Math.sign(utilx.Function.noop))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Math.sign({}))).to.be.ok();
            expect(utilx.Number.isPositiveZero(utilx.Math.sign([]))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Math.sign(new RegExp('c')))).to.be.ok();
            expect(utilx.Math.sign(new Date(2013, 11, 11))).to.be(1);
            expect(utilx.Number.isNaN(utilx.Math.sign(new Error('x')))).to.be.ok();

            // we also verify that [[ToNumber]] is being called
            utilx.Array.forEach([Infinity, 1], function (value) {
                expect(utilx.Math.sign(value)).to.be(1);
                expect(utilx.Math.sign(value.toString())).to.be(1);
            });

            expect(utilx.Math.sign(true)).to.be(1);
            utilx.Array.forEach([-Infinity, -1], function (value) {
                expect(utilx.Math.sign(value)).to.be(-1);
                expect(utilx.Math.sign(value.toString())).to.be(-1);
            });
        });
    });
}());
