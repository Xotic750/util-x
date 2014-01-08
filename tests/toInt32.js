/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function toInt32(num) {
        /*jslint bitwise: true */
        return num >> 0;
    }

    describe('toInt32', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toInt32()).to.be(toInt32());
            expect(utilx.toInt32(utilx.privateUndefined)).to.be(toInt32(utilx.privateUndefined));
            expect(utilx.toInt32(null)).to.be(toInt32(null));
            expect(utilx.toInt32(-10.123)).to.be(toInt32(-10.123));
            expect(utilx.toInt32(0)).to.be(toInt32(0));
            expect(utilx.toInt32(0.123)).to.be(toInt32(0.123));
            expect(utilx.toInt32(10)).to.be(toInt32(10));
            expect(utilx.toInt32(10.123)).to.be(toInt32(10.123));
            expect(utilx.toInt32(Infinity)).to.be(toInt32(Infinity));
            expect(utilx.toInt32(-Infinity)).to.be(toInt32(-Infinity));
            expect(utilx.toInt32(NaN)).to.be(toInt32(NaN));
            expect(utilx.toInt32('')).to.be(toInt32(''));
            expect(utilx.toInt32(' ')).to.be(toInt32(' '));
            expect(utilx.toInt32('x')).to.be(toInt32('x'));
            expect(utilx.toInt32(true)).to.be(toInt32(true));
            expect(utilx.toInt32(false)).to.be(toInt32(false));
            expect(utilx.toInt32({})).to.be(toInt32({}));
            expect(utilx.toInt32([])).to.be(toInt32([]));
            expect(utilx.toInt32([10.123])).to.be(toInt32([10.123]));
            expect(utilx.toInt32(new RegExp('c'))).to.be(toInt32(new RegExp('c')));
            expect(utilx.toInt32(new Error('x'))).to.be(toInt32(new Error('x')));
            /*jshint -W047 */
            expect(utilx.toInt32(10.)).to.be(toInt32(10.));
            /*jshint +W047 */
            expect(utilx.toInt32(10.0)).to.be(toInt32(10.0));
            expect(utilx.toInt32('10.')).to.be(toInt32('10.'));
            expect(utilx.toInt32(' 10.')).to.be(toInt32(' 10.'));
            expect(utilx.toInt32('10. ')).to.be(toInt32('10. '));
            expect(utilx.toInt32(' 10. ')).to.be(toInt32(' 10. '));
            expect(utilx.toInt32('10.0')).to.be(toInt32('10.0'));
            expect(utilx.toInt32(' 10.0')).to.be(toInt32(' 10.0'));
            expect(utilx.toInt32('10.0 ')).to.be(toInt32('10.0 '));
            expect(utilx.toInt32(' 10.0 ')).to.be(toInt32(' 10.0 '));
            expect(utilx.toInt32('10.123')).to.be(toInt32('10.123'));
            expect(utilx.toInt32(' 10.123')).to.be(toInt32(' 10.123'));
            expect(utilx.toInt32('10.123 ')).to.be(toInt32('10.123 '));
            expect(utilx.toInt32(' 10.123 ')).to.be(toInt32(' 10.123 '));
            expect(utilx.toInt32(utilx.MAX_INT32 + 1)).to.be(utilx.MIN_INT32);
            expect(utilx.toInt32(utilx.MIN_INT32 - 1)).to.be(utilx.MAX_INT32);
        });
    });
}());
