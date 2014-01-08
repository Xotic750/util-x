/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toInt16', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toInt16()).to.be(0);
            expect(utilx.toInt16(utilx.privateUndefined)).to.be(0);
            expect(utilx.toInt16(null)).to.be(0);
            expect(utilx.toInt16(-10.123)).to.be(-10);
            expect(utilx.toInt16(0)).to.be(0);
            expect(utilx.toInt16(0.123)).to.be(0);
            expect(utilx.toInt16(10)).to.be(10);
            expect(utilx.toInt16(10.123)).to.be(10);
            expect(utilx.toInt16(Infinity)).to.be(0);
            expect(utilx.toInt16(-Infinity)).to.be(0);
            expect(utilx.toInt16(NaN)).to.be(0);
            expect(utilx.toInt16('')).to.be(0);
            expect(utilx.toInt16(' ')).to.be(0);
            expect(utilx.toInt16('x')).to.be(0);
            expect(utilx.toInt16(true)).to.be(1);
            expect(utilx.toInt16(false)).to.be(0);
            expect(utilx.toInt16({})).to.be(0);
            expect(utilx.toInt16([])).to.be(0);
            expect(utilx.toInt16([10.123])).to.be(10);
            expect(utilx.toInt16(new RegExp('c'))).to.be(0);
            expect(utilx.toInt16(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.toInt16(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.toInt16(10.0)).to.be(10);
            expect(utilx.toInt16('10.')).to.be(10);
            expect(utilx.toInt16(' 10.')).to.be(10);
            expect(utilx.toInt16('10. ')).to.be(10);
            expect(utilx.toInt16(' 10. ')).to.be(10);
            expect(utilx.toInt16('10.0')).to.be(10);
            expect(utilx.toInt16(' 10.0')).to.be(10);
            expect(utilx.toInt16('10.0 ')).to.be(10);
            expect(utilx.toInt16(' 10.0 ')).to.be(10);
            expect(utilx.toInt16('10.123')).to.be(10);
            expect(utilx.toInt16(' 10.123')).to.be(10);
            expect(utilx.toInt16('10.123 ')).to.be(10);
            expect(utilx.toInt16(' 10.123 ')).to.be(10);
            expect(utilx.toInt16(utilx.MAX_INT16 + 1)).to.be(utilx.MIN_INT16);
            expect(utilx.toInt16(utilx.MIN_INT16 - 1)).to.be(utilx.MAX_INT16);
        });
    });
}());
