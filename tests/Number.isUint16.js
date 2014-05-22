/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isUint16', function () {
        it('should be truthy on integers', function () {
            expect(utilx.Number.isUint16(4)).to.be.ok();
            expect(utilx.Number.isUint16(4.0)).to.be.ok();
            expect(utilx.Number.isUint16(0)).to.be.ok();
            expect(utilx.Number.isUint16(utilx.Number.MAX_UINT16)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.Number.isUint16()).to.not.be.ok();
            expect(utilx.Number.isUint16(undefined)).to.not.be.ok();
            expect(utilx.Number.isUint16(null)).to.not.be.ok();
            expect(utilx.Number.isUint16(4.2)).to.not.be.ok();
            expect(utilx.Number.isUint16(Infinity)).to.not.be.ok();
            expect(utilx.Number.isUint16(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isUint16(NaN)).to.not.be.ok();
            expect(utilx.Number.isUint16(true)).to.not.be.ok();
            expect(utilx.Number.isUint16(false)).to.not.be.ok();
            expect(utilx.Number.isUint16('str')).to.not.be.ok();
            expect(utilx.Number.isUint16({})).to.not.be.ok();
            expect(utilx.Number.isUint16({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint16({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint16({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint16({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint16({
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
                expect(utilx.Number.isUint16(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.Number.isUint16(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.Number.isUint16(Infinity)).to.not.be.ok();
            expect(utilx.Number.isUint16(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.Number.isUint16(3.4)).to.not.be.ok();
            expect(utilx.Number.isUint16(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^16 or larger', function () {
            expect(utilx.Number.isUint16(Math.pow(2, 16))).to.not.be.ok();
        });

        it('should be false when number is -1 or smaller', function () {
            expect(utilx.Number.isUint16(-1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [0, 1, Math.pow(2, 16) - 1];

            utilx.Array.forEach(safeIntegers, function (int) {
                expect(utilx.Number.isUint16(int)).to.be.ok();
            });
        });
    });
}());
