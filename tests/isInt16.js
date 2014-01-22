/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isInt16', function () {
        it('should be truthy on integers', function () {
            expect(utilx.isInt16(4)).to.be.ok();
            expect(utilx.isInt16(4.0)).to.be.ok();
            expect(utilx.isInt16(utilx.MAX_INT16)).to.be.ok();
            expect(utilx.isInt16(utilx.MIN_INT16)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.isInt16()).to.not.be.ok();
            expect(utilx.isInt16(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isInt16(null)).to.not.be.ok();
            expect(utilx.isInt16(4.2)).to.not.be.ok();
            expect(utilx.isInt16(Infinity)).to.not.be.ok();
            expect(utilx.isInt16(-Infinity)).to.not.be.ok();
            expect(utilx.isInt16(NaN)).to.not.be.ok();
            expect(utilx.isInt16(true)).to.not.be.ok();
            expect(utilx.isInt16(false)).to.not.be.ok();
            expect(utilx.isInt16('str')).to.not.be.ok();
            expect(utilx.isInt16('')).to.not.be.ok();
            expect(utilx.isInt16({})).to.not.be.ok();
            expect(utilx.isInt16({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.isInt16({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.isInt16({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.isInt16({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.isInt16({
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
                utilx.privateUndefined,
                '',
                utilx.noop,
                {
                    valueOf: function () {
                        return 3;
                    }
                },
                new RegExp('a', 'g'),
                {}
            ];

            utilx.arrayForEach(nonNumbers, function (thing) {
                expect(utilx.isInt16(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.isInt16(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.isInt16(Infinity)).to.not.be.ok();
            expect(utilx.isInt16(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.isInt16(3.4)).to.not.be.ok();
            expect(utilx.isInt16(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^15 or larger', function () {
            expect(utilx.isInt16(Math.pow(2, 15))).to.not.be.ok();
        });

        it('should be false when number is -2^15-1 or smaller', function () {
            expect(utilx.isInt16(-Math.pow(2, 15) - 1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [-Math.pow(2, 15), -1, 0, 1, Math.pow(2, 15) - 1];

            utilx.arrayForEach(safeIntegers, function (int) {
                expect(utilx.isInt16(int)).to.be.ok();
            });
        });
    });
}());
