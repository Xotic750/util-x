/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function toUint32(num) {
        /*jslint bitwise: true */
        return num >>> 0;
    }

    describe('Number.toUint32', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.toUint32()).to.be(toUint32());
            expect(utilx.Number.toUint32(undefined)).to.be(toUint32(undefined));
            expect(utilx.Number.toUint32(null)).to.be(toUint32(null));
            expect(utilx.Number.toUint32(-10.123)).to.be(toUint32(-10.123));
            expect(utilx.Number.toUint32(0)).to.be(toUint32(0));
            expect(utilx.Number.toUint32(0.123)).to.be(toUint32(0.123));
            expect(utilx.Number.toUint32(10)).to.be(toUint32(10));
            expect(utilx.Number.toUint32(10.123)).to.be(toUint32(10.123));
            expect(utilx.Number.toUint32(Infinity)).to.be(toUint32(Infinity));
            expect(utilx.Number.toUint32(-Infinity)).to.be(toUint32(-Infinity));
            expect(utilx.Number.toUint32(NaN)).to.be(toUint32(NaN));
            expect(utilx.Number.toUint32('')).to.be(toUint32(''));
            expect(utilx.Number.toUint32(' ')).to.be(toUint32(' '));
            expect(utilx.Number.toUint32('x')).to.be(toUint32('x'));
            expect(utilx.Number.toUint32(true)).to.be(toUint32(true));
            expect(utilx.Number.toUint32(false)).to.be(toUint32(false));
            expect(utilx.Number.toUint32({})).to.be(toUint32({}));
            expect(utilx.Number.toUint32([])).to.be(toUint32([]));
            expect(utilx.Number.toUint32([10.123])).to.be(toUint32([10.123]));
            expect(utilx.Number.toUint32(new RegExp('c'))).to.be(toUint32(new RegExp('c')));
            expect(utilx.Number.toUint32(new Error('x'))).to.be(toUint32(new Error('x')));
            /*jshint -W047 */
            expect(utilx.Number.toUint32(10.)).to.be(toUint32(10.));
            /*jshint +W047 */
            expect(utilx.Number.toUint32(10.0)).to.be(toUint32(10.0));
            expect(utilx.Number.toUint32('10.')).to.be(toUint32('10.'));
            expect(utilx.Number.toUint32(' 10.')).to.be(toUint32(' 10.'));
            expect(utilx.Number.toUint32('10. ')).to.be(toUint32('10. '));
            expect(utilx.Number.toUint32(' 10. ')).to.be(toUint32(' 10. '));
            expect(utilx.Number.toUint32('10.0')).to.be(toUint32('10.0'));
            expect(utilx.Number.toUint32(' 10.0')).to.be(toUint32(' 10.0'));
            expect(utilx.Number.toUint32('10.0 ')).to.be(toUint32('10.0 '));
            expect(utilx.Number.toUint32(' 10.0 ')).to.be(toUint32(' 10.0 '));
            expect(utilx.Number.toUint32('10.123')).to.be(toUint32('10.123'));
            expect(utilx.Number.toUint32(' 10.123')).to.be(toUint32(' 10.123'));
            expect(utilx.Number.toUint32('10.123 ')).to.be(toUint32('10.123 '));
            expect(utilx.Number.toUint32(' 10.123 ')).to.be(toUint32(' 10.123 '));
            expect(utilx.Number.toUint32(utilx.Number.MAX_UINT32 + 1)).to.be(0);
            expect(utilx.Number.toUint32(-1)).to.be(utilx.Number.MAX_UINT32);
        });
    });
}());
