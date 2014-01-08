/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toUint8', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toUint8()).to.be(0);
            expect(utilx.toUint8(utilx.privateUndefined)).to.be(0);
            expect(utilx.toUint8(null)).to.be(0);
            expect(utilx.toUint8(-10.123)).to.be(246);
            expect(utilx.toUint8(0)).to.be(0);
            expect(utilx.toUint8(0.123)).to.be(0);
            expect(utilx.toUint8(10)).to.be(10);
            expect(utilx.toUint8(10.123)).to.be(10);
            expect(utilx.toUint8(Infinity)).to.be(0);
            expect(utilx.toUint8(-Infinity)).to.be(0);
            expect(utilx.toUint8(NaN)).to.be(0);
            expect(utilx.toUint8('')).to.be(0);
            expect(utilx.toUint8(' ')).to.be(0);
            expect(utilx.toUint8('x')).to.be(0);
            expect(utilx.toUint8(true)).to.be(1);
            expect(utilx.toUint8(false)).to.be(0);
            expect(utilx.toUint8({})).to.be(0);
            expect(utilx.toUint8([])).to.be(0);
            expect(utilx.toUint8([10.123])).to.be(10);
            expect(utilx.toUint8(new RegExp('c'))).to.be(0);
            expect(utilx.toUint8(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.toUint8(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.toUint8(10.0)).to.be(10);
            expect(utilx.toUint8('10.')).to.be(10);
            expect(utilx.toUint8(' 10.')).to.be(10);
            expect(utilx.toUint8('10. ')).to.be(10);
            expect(utilx.toUint8(' 10. ')).to.be(10);
            expect(utilx.toUint8('10.0')).to.be(10);
            expect(utilx.toUint8(' 10.0')).to.be(10);
            expect(utilx.toUint8('10.0 ')).to.be(10);
            expect(utilx.toUint8(' 10.0 ')).to.be(10);
            expect(utilx.toUint8('10.123')).to.be(10);
            expect(utilx.toUint8(' 10.123')).to.be(10);
            expect(utilx.toUint8('10.123 ')).to.be(10);
            expect(utilx.toUint8(' 10.123 ')).to.be(10);
            expect(utilx.toUint8(utilx.MAX_UINT8 + 1)).to.be(0);
            expect(utilx.toUint8(-1)).to.be(utilx.MAX_UINT8);
        });
    });
}());
