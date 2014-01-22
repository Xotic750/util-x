/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isUint', function () {
        it('should be truthy on integers', function () {
            expect(utilx.isUint(4)).to.be.ok();
            expect(utilx.isUint(4.0)).to.be.ok();
            expect(utilx.isUint(0)).to.be.ok();
            expect(utilx.isUint(utilx.MAX_INTEGER)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.isUint()).to.not.be.ok();
            expect(utilx.isUint(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isUint(null)).to.not.be.ok();
            expect(utilx.isUint(4.2)).to.not.be.ok();
            expect(utilx.isUint(Infinity)).to.not.be.ok();
            expect(utilx.isUint(-Infinity)).to.not.be.ok();
            expect(utilx.isUint(NaN)).to.not.be.ok();
            expect(utilx.isUint(true)).to.not.be.ok();
            expect(utilx.isUint(false)).to.not.be.ok();
            expect(utilx.isUint('str')).to.not.be.ok();
            expect(utilx.isUint({})).to.not.be.ok();
            expect(utilx.isUint({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.isUint({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.isUint({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.isUint({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.isUint({
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
                expect(utilx.isUint(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.isUint(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.isUint(Infinity)).to.not.be.ok();
            expect(utilx.isUint(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.isUint(3.4)).to.not.be.ok();
            expect(utilx.isUint(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^53 or larger', function () {
            expect(utilx.isUint(Math.pow(2, 53))).to.not.be.ok();
        });

        it('should be false when number is -1 or smaller', function () {
            expect(utilx.isUint(-1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [0, 1, Math.pow(2, 53) - 1];

            utilx.arrayForEach(safeIntegers, function (int) {
                expect(utilx.isUint(int)).to.be.ok();
            });
        });
    });
}());
