/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.toInt8', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.toInt8()).to.be(0);
            expect(utilx.Number.toInt8(undefined)).to.be(0);
            expect(utilx.Number.toInt8(null)).to.be(0);
            expect(utilx.Number.toInt8(-10.123)).to.be(-10);
            expect(utilx.Number.toInt8(0)).to.be(0);
            expect(utilx.Number.toInt8(0.123)).to.be(0);
            expect(utilx.Number.toInt8(10)).to.be(10);
            expect(utilx.Number.toInt8(10.123)).to.be(10);
            expect(utilx.Number.toInt8(Infinity)).to.be(0);
            expect(utilx.Number.toInt8(-Infinity)).to.be(0);
            expect(utilx.Number.toInt8(NaN)).to.be(0);
            expect(utilx.Number.toInt8('')).to.be(0);
            expect(utilx.Number.toInt8(' ')).to.be(0);
            expect(utilx.Number.toInt8('x')).to.be(0);
            expect(utilx.Number.toInt8(true)).to.be(1);
            expect(utilx.Number.toInt8(false)).to.be(0);
            expect(utilx.Number.toInt8({})).to.be(0);
            expect(utilx.Number.toInt8([])).to.be(0);
            expect(utilx.Number.toInt8([10.123])).to.be(10);
            expect(utilx.Number.toInt8(new RegExp('c'))).to.be(0);
            expect(utilx.Number.toInt8(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.Number.toInt8(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.Number.toInt8(10.0)).to.be(10);
            expect(utilx.Number.toInt8('10.')).to.be(10);
            expect(utilx.Number.toInt8(' 10.')).to.be(10);
            expect(utilx.Number.toInt8('10. ')).to.be(10);
            expect(utilx.Number.toInt8(' 10. ')).to.be(10);
            expect(utilx.Number.toInt8('10.0')).to.be(10);
            expect(utilx.Number.toInt8(' 10.0')).to.be(10);
            expect(utilx.Number.toInt8('10.0 ')).to.be(10);
            expect(utilx.Number.toInt8(' 10.0 ')).to.be(10);
            expect(utilx.Number.toInt8('10.123')).to.be(10);
            expect(utilx.Number.toInt8(' 10.123')).to.be(10);
            expect(utilx.Number.toInt8('10.123 ')).to.be(10);
            expect(utilx.Number.toInt8(' 10.123 ')).to.be(10);
            expect(utilx.Number.toInt8(utilx.Number.MAX_INT8 + 1)).to.be(utilx.Number.MIN_INT8);
            expect(utilx.Number.toInt8(utilx.Number.MIN_INT8 - 1)).to.be(utilx.Number.MAX_INT8);
        });
    });
}());
