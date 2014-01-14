/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function toUint(num) {
        /*jslint bitwise: true */
        return num >>> 0;
    }

    describe('toUint', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toUint()).to.be(toUint());
            expect(utilx.toUint(utilx.privateUndefined)).to.be(toUint(utilx.privateUndefined));
            expect(utilx.toUint(null)).to.be(toUint(null));
            expect(utilx.toUint(-10.123)).to.be(9007199254740982);
            expect(utilx.toUint(0)).to.be(0);
            expect(utilx.toUint(0.123)).to.be(0);
            expect(utilx.toUint(10)).to.be(10);
            expect(utilx.toUint(10.123)).to.be(10);
            expect(utilx.toUint(Infinity)).to.be(toUint(Infinity));
            expect(utilx.toUint(-Infinity)).to.be(toUint(-Infinity));
            expect(utilx.toUint(NaN)).to.be(toUint(NaN));
            expect(utilx.toUint('')).to.be(toUint(''));
            expect(utilx.toUint(' ')).to.be(toUint(' '));
            expect(utilx.toUint('x')).to.be(toUint('x'));
            expect(utilx.toUint(true)).to.be(toUint(true));
            expect(utilx.toUint(false)).to.be(toUint(false));
            expect(utilx.toUint({})).to.be(toUint({}));
            expect(utilx.toUint([])).to.be(toUint([]));
            expect(utilx.toUint([10.123])).to.be(toUint([10.123]));
            expect(utilx.toUint(new RegExp('c'))).to.be(toUint(new RegExp('c')));
            expect(utilx.toUint(new Error('x'))).to.be(toUint(new Error('x')));
            /*jshint -W047 */
            expect(utilx.toUint(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.toUint(10.0)).to.be(10);
            expect(utilx.toUint('10.')).to.be(toUint('10.'));
            expect(utilx.toUint(' 10.')).to.be(toUint(' 10.'));
            expect(utilx.toUint('10. ')).to.be(toUint('10. '));
            expect(utilx.toUint(' 10. ')).to.be(toUint(' 10. '));
            expect(utilx.toUint('10.0')).to.be(toUint('10.0'));
            expect(utilx.toUint(' 10.0')).to.be(toUint(' 10.0'));
            expect(utilx.toUint('10.0 ')).to.be(toUint('10.0 '));
            expect(utilx.toUint(' 10.0 ')).to.be(toUint(' 10.0 '));
            expect(utilx.toUint('10.123')).to.be(toUint('10.123'));
            expect(utilx.toUint(' 10.123')).to.be(toUint(' 10.123'));
            expect(utilx.toUint('10.123 ')).to.be(toUint('10.123 '));
            expect(utilx.toUint(' 10.123 ')).to.be(toUint(' 10.123 '));
            expect(utilx.toUint(utilx.MAX_INTEGER + 1)).to.be(0);
            expect(utilx.toUint(-1)).to.be(utilx.MAX_INTEGER);
        });
    });
}());
