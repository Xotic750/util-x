/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toUint16', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toUint16()).to.be(0);
            expect(utilx.toUint16(utilx.privateUndefined)).to.be(0);
            expect(utilx.toUint16(null)).to.be(0);
            expect(utilx.toUint16(-10.123)).to.be(65526);
            expect(utilx.toUint16(0)).to.be(0);
            expect(utilx.toUint16(0.123)).to.be(0);
            expect(utilx.toUint16(10)).to.be(10);
            expect(utilx.toUint16(10.123)).to.be(10);
            expect(utilx.toUint16(Infinity)).to.be(0);
            expect(utilx.toUint16(-Infinity)).to.be(0);
            expect(utilx.toUint16(NaN)).to.be(0);
            expect(utilx.toUint16('')).to.be(0);
            expect(utilx.toUint16(' ')).to.be(0);
            expect(utilx.toUint16('x')).to.be(0);
            expect(utilx.toUint16(true)).to.be(1);
            expect(utilx.toUint16(false)).to.be(0);
            expect(utilx.toUint16({})).to.be(0);
            expect(utilx.toUint16([])).to.be(0);
            expect(utilx.toUint16([10.123])).to.be(10);
            expect(utilx.toUint16(new RegExp('c'))).to.be(0);
            expect(utilx.toUint16(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.toUint16(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.toUint16(10.0)).to.be(10);
            expect(utilx.toUint16('10.')).to.be(10);
            expect(utilx.toUint16(' 10.')).to.be(10);
            expect(utilx.toUint16('10. ')).to.be(10);
            expect(utilx.toUint16(' 10. ')).to.be(10);
            expect(utilx.toUint16('10.0')).to.be(10);
            expect(utilx.toUint16(' 10.0')).to.be(10);
            expect(utilx.toUint16('10.0 ')).to.be(10);
            expect(utilx.toUint16(' 10.0 ')).to.be(10);
            expect(utilx.toUint16('10.123')).to.be(10);
            expect(utilx.toUint16(' 10.123')).to.be(10);
            expect(utilx.toUint16('10.123 ')).to.be(10);
            expect(utilx.toUint16(' 10.123 ')).to.be(10);
            expect(utilx.toUint16(utilx.MAX_UINT16 + 1)).to.be(0);
            expect(utilx.toUint16(-1)).to.be(utilx.MAX_UINT16);
        });
    });
}());
