/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isInt8', function () {
        it('should be truthy on integers', function () {
            expect(utilx.Number.isInt8(4)).to.be.ok();
            expect(utilx.Number.isInt8(4.0)).to.be.ok();
            expect(utilx.Number.isInt8(utilx.Number.MAX_INT8)).to.be.ok();
            expect(utilx.Number.isInt8(utilx.Number.MIN_INT8)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.Number.isInt8()).to.not.be.ok();
            expect(utilx.Number.isInt8(undefined)).to.not.be.ok();
            expect(utilx.Number.isInt8(null)).to.not.be.ok();
            expect(utilx.Number.isInt8(4.2)).to.not.be.ok();
            expect(utilx.Number.isInt8(Infinity)).to.not.be.ok();
            expect(utilx.Number.isInt8(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isInt8(NaN)).to.not.be.ok();
            expect(utilx.Number.isInt8(true)).to.not.be.ok();
            expect(utilx.Number.isInt8(false)).to.not.be.ok();
            expect(utilx.Number.isInt8('str')).to.not.be.ok();
            expect(utilx.Number.isInt8('')).to.not.be.ok();
            expect(utilx.Number.isInt8({})).to.not.be.ok();
            expect(utilx.Number.isInt8({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt8({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt8({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt8({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt8({
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
                required.noop,
                {
                    valueOf: function () {
                        return 3;
                    }
                },
                new RegExp('a', 'g'),
                {}
            ];

            utilx.Array.forEach(nonNumbers, function (thing) {
                expect(utilx.Number.isInt8(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.Number.isInt8(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.Number.isInt8(Infinity)).to.not.be.ok();
            expect(utilx.Number.isInt8(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.Number.isInt8(3.4)).to.not.be.ok();
            expect(utilx.Number.isInt8(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^7 or larger', function () {
            expect(utilx.Number.isInt8(Math.pow(2, 7))).to.not.be.ok();
        });

        it('should be false when number is -2^7-1 or smaller', function () {
            expect(utilx.Number.isInt8(-Math.pow(2, 7) - 1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [-Math.pow(2, 7), -1, 0, 1, Math.pow(2, 7) - 1];

            utilx.Array.forEach(safeIntegers, function (int) {
                expect(utilx.Number.isInt8(int)).to.be.ok();
            });
        });
    });
}());
