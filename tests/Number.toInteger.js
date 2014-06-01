/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.toInteger', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Number.toInteger({toString: ''});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toInteger({toString: '1'});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toInteger({toString: 1});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toInteger({toString: 1.1});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            /*jshint -W047 */
            expect(function () {
                utilx.Number.toInteger({toString: 1.});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            /*jshint +W047 */
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Number.toInteger()).to.be(0);
            expect(utilx.Number.toInteger(undefined)).to.be(0);
            expect(utilx.Number.toInteger(null)).to.be(0);
            expect(utilx.Number.toInteger(-10.123)).to.be(-10);
            expect(utilx.Number.toInteger(0)).to.be(0);
            expect(utilx.Number.toInteger(0.123)).to.be(0);
            expect(utilx.Number.toInteger(10)).to.be(10);
            expect(utilx.Number.toInteger(10.123)).to.be(10);
            expect(utilx.Number.toInteger(Infinity)).to.be(Infinity);
            expect(utilx.Number.toInteger(-Infinity)).to.be(-Infinity);
            expect(utilx.Number.toInteger(NaN)).to.be(0);
            expect(utilx.Number.toInteger('')).to.be(0);
            expect(utilx.Number.toInteger(' ')).to.be(0);
            expect(utilx.Number.toInteger('x')).to.be(0);
            expect(utilx.Number.toInteger(true)).to.be(1);
            expect(utilx.Number.toInteger(false)).to.be(0);
            expect(utilx.Number.toInteger({})).to.be(0);
            expect(utilx.Number.toInteger([])).to.be(0);
            expect(utilx.Number.toInteger([10.123])).to.be(10);
            expect(utilx.Number.toInteger(new RegExp('c'))).to.be(0);
            expect(utilx.Number.toInteger(new Error('x'))).to.be(0);
            /*jshint -W047 */
            expect(utilx.Number.toInteger(10.)).to.be(10);
            /*jshint +W047 */
            expect(utilx.Number.toInteger(10.0)).to.be(10);
            expect(utilx.Number.toInteger('10.')).to.be(10);
            expect(utilx.Number.toInteger(' 10.')).to.be(10);
            expect(utilx.Number.toInteger('10. ')).to.be(10);
            expect(utilx.Number.toInteger(' 10. ')).to.be(10);
            expect(utilx.Number.toInteger('10.0')).to.be(10);
            expect(utilx.Number.toInteger(' 10.0')).to.be(10);
            expect(utilx.Number.toInteger('10.0 ')).to.be(10);
            expect(utilx.Number.toInteger(' 10.0 ')).to.be(10);
            expect(utilx.Number.toInteger('10.123')).to.be(10);
            expect(utilx.Number.toInteger(' 10.123')).to.be(10);
            expect(utilx.Number.toInteger('10.123 ')).to.be(10);
            expect(utilx.Number.toInteger(' 10.123 ')).to.be(10);

            expect(utilx.Number.toInteger('-1')).to.be(-1);
            expect(utilx.Number.toInteger('0')).to.be(0);
            expect(utilx.Number.toInteger('1')).to.be(1);
            expect(utilx.Number.toInteger('-1.')).to.be(-1);
            expect(utilx.Number.toInteger('0.')).to.be(0);
            expect(utilx.Number.toInteger('1.')).to.be(1);
            /*jshint -W047 */
            expect(utilx.Number.toInteger(-1.)).to.be(-1);
            expect(utilx.Number.toInteger(0.)).to.be(0);
            expect(utilx.Number.toInteger(1.)).to.be(1);
            /*jshint +W047 */
            expect(utilx.Number.toInteger('-1.1')).to.be(-1);
            expect(utilx.Number.toInteger('0.1')).to.be(0);
            expect(utilx.Number.toInteger('1.1')).to.be(1);
            expect(utilx.Number.isNumber(utilx.Number.toInteger(new Date(2013, 11, 11)))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Number.toInteger(new Date(2013, 11, 11)))).to.not.be.ok();
            expect(utilx.Number.toInteger('NaN')).to.be(0);
            expect(utilx.Number.toInteger('Infinity')).to.be(Infinity);
            expect(utilx.Number.toInteger('-Infinity')).to.be(-Infinity);
            expect(utilx.Number.toInteger([])).to.be(0);
            expect(utilx.Number.toInteger([1])).to.be(1);
            expect(utilx.Number.toInteger([1.1])).to.be(1);
            /*jshint -W047 */
            expect(utilx.Number.toInteger([1.])).to.be(1);
            /*jshint +W047 */
            expect(utilx.Number.toInteger([''])).to.be(0);
            expect(utilx.Number.toInteger(['1'])).to.be(1);
            expect(utilx.Number.toInteger(['1.1'])).to.be(1);
            expect(utilx.Number.toInteger({})).to.be(0);
            expect(utilx.Number.toInteger({valueOf: ''})).to.be(0);
            expect(utilx.Number.toInteger({valueOf: '1'})).to.be(0);
            expect(utilx.Number.toInteger({valueOf: 1})).to.be(0);
            expect(utilx.Number.toInteger({valueOf: 1.1})).to.be(0);
            /*jshint -W047 */
            expect(utilx.Number.toInteger({valueOf: 1.})).to.be(0);
            /*jshint +W047 */

            expect(utilx.Number.toInteger(function () { return 1; })).to.be(0);
        });
    });
}());
