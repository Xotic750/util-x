/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isUint', function () {
        it('should be truthy on integers', function () {
            expect(utilx.Number.isUint(4)).to.be.ok();
            expect(utilx.Number.isUint(4.0)).to.be.ok();
            expect(utilx.Number.isUint(0)).to.be.ok();
            expect(utilx.Number.isUint(utilx.Number.MAX_SAFE_INTEGER)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.Number.isUint()).to.not.be.ok();
            expect(utilx.Number.isUint(undefined)).to.not.be.ok();
            expect(utilx.Number.isUint(null)).to.not.be.ok();
            expect(utilx.Number.isUint(4.2)).to.not.be.ok();
            expect(utilx.Number.isUint(Infinity)).to.not.be.ok();
            expect(utilx.Number.isUint(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isUint(NaN)).to.not.be.ok();
            expect(utilx.Number.isUint(true)).to.not.be.ok();
            expect(utilx.Number.isUint(false)).to.not.be.ok();
            expect(utilx.Number.isUint('str')).to.not.be.ok();
            expect(utilx.Number.isUint({})).to.not.be.ok();
            expect(utilx.Number.isUint({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isUint({
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
                expect(utilx.Number.isUint(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.Number.isUint(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.Number.isUint(Infinity)).to.not.be.ok();
            expect(utilx.Number.isUint(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.Number.isUint(3.4)).to.not.be.ok();
            expect(utilx.Number.isUint(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^53 or larger', function () {
            expect(utilx.Number.isUint(Math.pow(2, 53))).to.not.be.ok();
        });

        it('should be false when number is -1 or smaller', function () {
            expect(utilx.Number.isUint(-1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [0, 1, Math.pow(2, 53) - 1];

            utilx.Array.forEach(safeIntegers, function (int) {
                expect(utilx.Number.isUint(int)).to.be.ok();
            });
        });
    });
}());
