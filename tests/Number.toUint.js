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

    describe('Number.toUint', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.toUint()).to.be(toUint());
            expect(utilx.Number.toUint(undefined)).to.be(toUint(undefined));
            expect(utilx.Number.toUint(null)).to.be(toUint(null));
            expect(utilx.Number.toUint(-10.123)).to.be(9007199254740982);
            expect(utilx.Number.toUint(0)).to.be(0);
            expect(utilx.Number.toUint(0.123)).to.be(0);
            expect(utilx.Number.toUint(10)).to.be(10);
            expect(utilx.Number.toUint(10.123)).to.be(10);
            expect(utilx.Number.toUint(Infinity)).to.be(toUint(Infinity));
            expect(utilx.Number.toUint(-Infinity)).to.be(toUint(-Infinity));
            expect(utilx.Number.toUint(NaN)).to.be(toUint(NaN));
            expect(utilx.Number.toUint('')).to.be(toUint(''));
            expect(utilx.Number.toUint(' ')).to.be(toUint(' '));
            expect(utilx.Number.toUint('x')).to.be(toUint('x'));
            expect(utilx.Number.toUint(true)).to.be(toUint(true));
            expect(utilx.Number.toUint(false)).to.be(toUint(false));
            expect(utilx.Number.toUint({})).to.be(toUint({}));
            expect(utilx.Number.toUint([])).to.be(toUint([]));
            expect(utilx.Number.toUint([10.123])).to.be(toUint([10.123]));
            expect(utilx.Number.toUint(new RegExp('c'))).to.be(toUint(new RegExp('c')));
            expect(utilx.Number.toUint(new Error('x'))).to.be(toUint(new Error('x')));
            /*jshint -W047 */
            expect(utilx.Number.toUint(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.Number.toUint(10.0)).to.be(10);
            expect(utilx.Number.toUint('10.')).to.be(toUint('10.'));
            expect(utilx.Number.toUint(' 10.')).to.be(toUint(' 10.'));
            expect(utilx.Number.toUint('10. ')).to.be(toUint('10. '));
            expect(utilx.Number.toUint(' 10. ')).to.be(toUint(' 10. '));
            expect(utilx.Number.toUint('10.0')).to.be(toUint('10.0'));
            expect(utilx.Number.toUint(' 10.0')).to.be(toUint(' 10.0'));
            expect(utilx.Number.toUint('10.0 ')).to.be(toUint('10.0 '));
            expect(utilx.Number.toUint(' 10.0 ')).to.be(toUint(' 10.0 '));
            expect(utilx.Number.toUint('10.123')).to.be(toUint('10.123'));
            expect(utilx.Number.toUint(' 10.123')).to.be(toUint(' 10.123'));
            expect(utilx.Number.toUint('10.123 ')).to.be(toUint('10.123 '));
            expect(utilx.Number.toUint(' 10.123 ')).to.be(toUint(' 10.123 '));
            expect(utilx.Number.toUint(utilx.Number.MAX_INTEGER + 1)).to.be(0);
            expect(utilx.Number.toUint(-1)).to.be(utilx.Number.MAX_INTEGER);
        });
    });
}());
