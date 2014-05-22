/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isInt32', function () {
        it('should be truthy on integers', function () {
            expect(utilx.Number.isInt32(4)).to.be.ok();
            expect(utilx.Number.isInt32(4.0)).to.be.ok();
            expect(utilx.Number.isInt32(utilx.Number.MAX_INT32)).to.be.ok();
            expect(utilx.Number.isInt32(utilx.Number.MIN_INT32)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.Number.isInt32()).to.not.be.ok();
            expect(utilx.Number.isInt32(undefined)).to.not.be.ok();
            expect(utilx.Number.isInt32(null)).to.not.be.ok();
            expect(utilx.Number.isInt32(4.2)).to.not.be.ok();
            expect(utilx.Number.isInt32(Infinity)).to.not.be.ok();
            expect(utilx.Number.isInt32(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isInt32(NaN)).to.not.be.ok();
            expect(utilx.Number.isInt32(true)).to.not.be.ok();
            expect(utilx.Number.isInt32(false)).to.not.be.ok();
            expect(utilx.Number.isInt32('str')).to.not.be.ok();
            expect(utilx.Number.isInt32('')).to.not.be.ok();
            expect(utilx.Number.isInt32({})).to.not.be.ok();
            expect(utilx.Number.isInt32({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt32({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt32({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt32({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isInt32({
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
                expect(utilx.Number.isInt32(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.Number.isInt32(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.Number.isInt32(Infinity)).to.not.be.ok();
            expect(utilx.Number.isInt32(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.Number.isInt32(3.4)).to.not.be.ok();
            expect(utilx.Number.isInt32(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^31 or larger', function () {
            expect(utilx.Number.isInt32(Math.pow(2, 31))).to.not.be.ok();
        });

        it('should be false when number is -2^31-1 or smaller', function () {
            expect(utilx.Number.isInt32(-Math.pow(2, 31) - 1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [-Math.pow(2, 31), -1, 0, 1, Math.pow(2, 31) - 1];

            utilx.Array.forEach(safeIntegers, function (int) {
                expect(utilx.Number.isInt32(int)).to.be.ok();
            });
        });
    });
}());
