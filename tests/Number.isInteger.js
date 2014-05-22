/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isInteger', function () {
        it('should be truthy on integers', function () {
            expect(utilx.Number.isInteger(4)).to.be.ok();
            expect(utilx.Number.isInteger(4.0)).to.be.ok();
            expect(utilx.Number.isInteger(utilx.Number.MAX_INTEGER)).to.be.ok();
            expect(utilx.Number.isInteger(utilx.Number.MIN_INTEGER)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.Number.isInteger()).to.not.be.ok();
            expect(utilx.Number.isInteger(undefined)).to.not.be.ok();
            expect(utilx.Number.isInteger(null)).to.not.be.ok();
            expect(utilx.Number.isInteger(4.2)).to.not.be.ok();
            expect(utilx.Number.isInteger(Infinity)).to.not.be.ok();
            expect(utilx.Number.isInteger(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isInteger(NaN)).to.not.be.ok();
            expect(utilx.Number.isInteger(true)).to.not.be.ok();
            expect(utilx.Number.isInteger(false)).to.not.be.ok();
            expect(utilx.Number.isInteger('str')).to.not.be.ok();
            expect(utilx.Number.isInteger('')).to.not.be.ok();
            expect(utilx.Number.isInteger({})).to.not.be.ok();

            expect(utilx.Number.isInteger(-10.123)).to.not.be.ok();
            expect(utilx.Number.isInteger(0)).to.be.ok();
            expect(utilx.Number.isInteger(0.123)).to.not.be.ok();
            expect(utilx.Number.isInteger(10)).to.be.ok();
            expect(utilx.Number.isInteger(10.123)).to.not.be.ok();
            expect(utilx.Number.isInteger([])).to.not.be.ok();
            expect(utilx.Number.isInteger([10.123])).to.not.be.ok();
            expect(utilx.Number.isInteger(new RegExp('c'))).to.not.be.ok();
            expect(utilx.Number.isInteger(new Error('x'))).to.not.be.ok();
            /*jshint -W047 */
            expect(utilx.Number.isInteger(10.)).to.be.ok();
            /*jshint +W047 */
            expect(utilx.Number.isInteger(10.0)).to.be.ok();
            expect(utilx.Number.isInteger('10.')).to.not.be.ok();
            expect(utilx.Number.isInteger(' 10.')).to.not.be.ok();
            expect(utilx.Number.isInteger('10. ')).to.not.be.ok();
            expect(utilx.Number.isInteger(' 10. ')).to.not.be.ok();
            expect(utilx.Number.isInteger('10.0')).to.not.be.ok();
            expect(utilx.Number.isInteger(' 10.0')).to.not.be.ok();
            expect(utilx.Number.isInteger('10.0 ')).to.not.be.ok();
            expect(utilx.Number.isInteger(' 10.0 ')).to.not.be.ok();
            expect(utilx.Number.isInteger('10.123')).to.not.be.ok();
            expect(utilx.Number.isInteger(' 10.123')).to.not.be.ok();
            expect(utilx.Number.isInteger('10.123 ')).to.not.be.ok();
            expect(utilx.Number.isInteger(' 10.123 ')).to.not.be.ok();

            expect(utilx.Number.isInteger('-1')).to.not.be.ok();
            expect(utilx.Number.isInteger('0')).to.not.be.ok();
            expect(utilx.Number.isInteger('1')).to.not.be.ok();
            expect(utilx.Number.isInteger('-1.')).to.not.be.ok();
            expect(utilx.Number.isInteger('0.')).to.not.be.ok();
            expect(utilx.Number.isInteger('1.')).to.not.be.ok();
            /*jshint -W047 */
            expect(utilx.Number.isInteger(-1.)).to.be.ok();
            expect(utilx.Number.isInteger(0.)).to.be.ok();
            expect(utilx.Number.isInteger(1.)).to.be.ok();
            /*jshint +W047 */
            expect(utilx.Number.isInteger(new Date(2013, 11, 11))).to.not.be.ok();
            expect(utilx.Number.isInteger(new Date(2013, 11, 11).getTime())).to.be.ok();
            expect(utilx.Number.isInteger('NaN')).to.not.be.ok();
            expect(utilx.Number.isInteger('Infinity')).to.not.be.ok();
            expect(utilx.Number.isInteger('-Infinity')).to.not.be.ok();
            expect(utilx.Number.isInteger([])).to.not.be.ok();
            expect(utilx.Number.isInteger([1])).to.not.be.ok();
            expect(utilx.Number.isInteger([1.1])).to.not.be.ok();

            expect(utilx.Number.isInteger({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInteger({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInteger({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInteger({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInteger({
                valueOf: function () {
                    throw 17;
                },
                toString: function () {
                    throw 42;
                }
            })).to.not.be.ok();
        });

        it('should be false when the type is not number', function () {
            var nonNumbers = [
                false,
                true,
                null,
                undefined,
                '',
                utilx.Function.noop,
                {
                    valueOf: function () {
                        return 3;
                    }
                },
                new RegExp('a', 'g'),
                {}
            ];

            utilx.Array.forEach(nonNumbers, function (thing) {
                expect(utilx.Number.isInteger(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.Number.isInteger(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.Number.isInteger(Infinity)).to.not.be.ok();
            expect(utilx.Number.isInteger(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.Number.isInteger(3.4)).to.not.be.ok();
            expect(utilx.Number.isInteger(-3.4)).to.not.be.ok();
        });

        it('should be false when abs(number) is 2^53 or larger', function () {
            expect(utilx.Number.isInteger(Math.pow(2, 53))).to.not.be.ok();
            expect(utilx.Number.isInteger(-Math.pow(2, 53))).to.not.be.ok();
        });

        it('should be true when abs(number) is less than 2^53', function () {
            var safeIntegers = [0, 1, Math.pow(2, 53) - 1];

            utilx.Array.forEach(safeIntegers, function (int) {
                expect(utilx.Number.isInteger(int)).to.be.ok();
                expect(utilx.Number.isInteger(-int)).to.be.ok();
            });
        });
    });
}());
