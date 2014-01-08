/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toInt8', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toInt8()).to.be(0);
            expect(utilx.toInt8(utilx.privateUndefined)).to.be(0);
            expect(utilx.toInt8(null)).to.be(0);
            expect(utilx.toInt8(-10.123)).to.be(-10);
            expect(utilx.toInt8(0)).to.be(0);
            expect(utilx.toInt8(0.123)).to.be(0);
            expect(utilx.toInt8(10)).to.be(10);
            expect(utilx.toInt8(10.123)).to.be(10);
            expect(utilx.toInt8(Infinity)).to.be(0);
            expect(utilx.toInt8(-Infinity)).to.be(0);
            expect(utilx.toInt8(NaN)).to.be(0);
            expect(utilx.toInt8('')).to.be(0);
            expect(utilx.toInt8(' ')).to.be(0);
            expect(utilx.toInt8('x')).to.be(0);
            expect(utilx.toInt8(true)).to.be(1);
            expect(utilx.toInt8(false)).to.be(0);
            expect(utilx.toInt8({})).to.be(0);
            expect(utilx.toInt8([])).to.be(0);
            expect(utilx.toInt8([10.123])).to.be(10);
            expect(utilx.toInt8(new RegExp('c'))).to.be(0);
            expect(utilx.toInt8(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.toInt8(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.toInt8(10.0)).to.be(10);
            expect(utilx.toInt8('10.')).to.be(10);
            expect(utilx.toInt8(' 10.')).to.be(10);
            expect(utilx.toInt8('10. ')).to.be(10);
            expect(utilx.toInt8(' 10. ')).to.be(10);
            expect(utilx.toInt8('10.0')).to.be(10);
            expect(utilx.toInt8(' 10.0')).to.be(10);
            expect(utilx.toInt8('10.0 ')).to.be(10);
            expect(utilx.toInt8(' 10.0 ')).to.be(10);
            expect(utilx.toInt8('10.123')).to.be(10);
            expect(utilx.toInt8(' 10.123')).to.be(10);
            expect(utilx.toInt8('10.123 ')).to.be(10);
            expect(utilx.toInt8(' 10.123 ')).to.be(10);
            expect(utilx.toInt8(utilx.MAX_INT8 + 1)).to.be(utilx.MIN_INT8);
            expect(utilx.toInt8(utilx.MIN_INT8 - 1)).to.be(utilx.MAX_INT8);
        });
    });
}());
