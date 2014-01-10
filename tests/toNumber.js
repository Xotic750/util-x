/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toNumber', function () {
        it('objects with only toString should throw an TypeError in each case', function () {
            expect(function () {
                utilx.toNumber({toString: ''});
            }).to.throwException(TypeError);

            expect(function () {
                utilx.toNumber({toString: '1'});
            }).to.throwException(TypeError);

            expect(function () {
                utilx.toNumber({toString: 1});
            }).to.throwException(TypeError);

            expect(function () {
                utilx.toNumber({toString: 1.1});
            }).to.throwException(TypeError);

            /*jshint -W047 */
            expect(function () {
                utilx.toNumber({toString: 1.});
            }).to.throwException(TypeError);
            /*jshint +W047 */
        });

        it('objects with only valueOf should be NaN', function () {
            expect(utilx.numberIsNaN(utilx.toNumber({}))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.toNumber({valueOf: ''}))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.toNumber({valueOf: '1'}))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.toNumber({valueOf: 1}))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.toNumber({valueOf: 1.1}))).to.be.ok();
            /*jshint -W047 */
            expect(utilx.numberIsNaN(utilx.toNumber({valueOf: 1.}))).to.be.ok();
            /*jshint +W047 */
        });

        it('number literals should not throw errors', function () {
            expect(utilx.toNumber(-1)).to.be(-1);
            expect(utilx.toNumber(0)).to.be(0);
            expect(utilx.toNumber(1)).to.be(1);
            /*jshint -W047 */
            expect(utilx.toNumber(-1.)).to.be(-1);
            expect(utilx.toNumber(0.)).to.be(0);
            expect(utilx.toNumber(1.)).to.be(1);
            /*jshint +W047 */
            expect(utilx.toNumber(-1.1)).to.be(-1.1);
            expect(utilx.toNumber(0.1)).to.be(0.1);
            expect(utilx.toNumber(1.1)).to.be(1.1);
            expect(utilx.toNumber(0x0)).to.be(0);
            expect(utilx.toNumber(0xA)).to.be(10);
            expect(utilx.toNumber(0xFF)).to.be(255);
            expect(utilx.toNumber(Infinity)).to.be(Infinity);
            expect(utilx.toNumber(-Infinity)).to.be(-Infinity);
            expect(utilx.numberIsNaN(utilx.toNumber(NaN))).to.be.ok();
            expect(utilx.isNumber(utilx.toNumber(new Date(2013, 11, 11)))).to.be.ok();
        });

        it('string literals should not throw errors', function () {
            expect(utilx.toNumber('-1')).to.be(-1);
            expect(utilx.toNumber('0')).to.be(0);
            expect(utilx.toNumber('1')).to.be(1);
            expect(utilx.toNumber('-1.')).to.be(-1);
            expect(utilx.toNumber('0.')).to.be(0);
            expect(utilx.toNumber('1.')).to.be(1);
            expect(utilx.toNumber('-1.1')).to.be(-1.1);
            expect(utilx.toNumber('0.1')).to.be(0.1);
            expect(utilx.toNumber('1.1')).to.be(1.1);
            expect(utilx.numberIsNaN(utilx.toNumber('NaN'))).to.be.ok();
            expect(utilx.toNumber('Infinity')).to.be(Infinity);
            expect(utilx.toNumber('-Infinity')).to.be(-Infinity);
        });

        it('arrays should not throw an error in each case', function () {
            expect(utilx.toNumber([])).to.be(0);
            expect(utilx.toNumber([1])).to.be(1);
            expect(utilx.toNumber([1.1])).to.be(1.1);
            /*jshint -W047 */
            expect(utilx.toNumber([1.])).to.be(1);
            /*jshint +W047 */
            expect(utilx.toNumber([''])).to.be(0);
            expect(utilx.toNumber(['1'])).to.be(1);
            expect(utilx.toNumber(['1.1'])).to.be(1.1);
        });

        it('a function that returns a number should not throw an error', function () {
            expect(utilx.numberIsNaN(utilx.toNumber(function () { return 1; }))).to.be.ok();
        });
    });
}());
