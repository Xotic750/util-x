/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('numberToInteger', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.numberToInteger()).to.be(0);
            expect(utilx.numberToInteger(utilx.privateUndefined)).to.be(0);
            expect(utilx.numberToInteger(null)).to.be(0);
            expect(utilx.numberToInteger(-10.123)).to.be(-10);
            expect(utilx.numberToInteger(0)).to.be(0);
            expect(utilx.numberToInteger(0.123)).to.be(0);
            expect(utilx.numberToInteger(10)).to.be(10);
            expect(utilx.numberToInteger(10.123)).to.be(10);
            expect(utilx.numberToInteger(Infinity)).to.be(Infinity);
            expect(utilx.numberToInteger(-Infinity)).to.be(-Infinity);
            expect(utilx.numberToInteger(NaN)).to.be(0);
            expect(utilx.numberToInteger('')).to.be(0);
            expect(utilx.numberToInteger(' ')).to.be(0);
            expect(utilx.numberToInteger('x')).to.be(0);
            expect(utilx.numberToInteger(true)).to.be(1);
            expect(utilx.numberToInteger(false)).to.be(0);
            expect(utilx.numberToInteger({})).to.be(0);
            expect(utilx.numberToInteger([])).to.be(0);
            expect(utilx.numberToInteger([10.123])).to.be(10);
            expect(utilx.numberToInteger(new RegExp('c'))).to.be(0);
            expect(utilx.numberToInteger(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.numberToInteger(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.numberToInteger(10.0)).to.be(10);
            expect(utilx.numberToInteger('10.')).to.be(10);
            expect(utilx.numberToInteger(' 10.')).to.be(10);
            expect(utilx.numberToInteger('10. ')).to.be(10);
            expect(utilx.numberToInteger(' 10. ')).to.be(10);
            expect(utilx.numberToInteger('10.0')).to.be(10);
            expect(utilx.numberToInteger(' 10.0')).to.be(10);
            expect(utilx.numberToInteger('10.0 ')).to.be(10);
            expect(utilx.numberToInteger(' 10.0 ')).to.be(10);
            expect(utilx.numberToInteger('10.123')).to.be(10);
            expect(utilx.numberToInteger(' 10.123')).to.be(10);
            expect(utilx.numberToInteger('10.123 ')).to.be(10);
            expect(utilx.numberToInteger(' 10.123 ')).to.be(10);
        });
    });
}());
