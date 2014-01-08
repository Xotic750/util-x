/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isUint32', function () {
        it('should be truthy on integers', function () {
            expect(utilx.isUint32(4)).to.be.ok();
            expect(utilx.isUint32(4.0)).to.be.ok();
            expect(utilx.isUint32(0)).to.be.ok();
            expect(utilx.isUint32(utilx.MAX_UINT32)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.isUint32()).to.not.be.ok();
            expect(utilx.isUint32(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isUint32(null)).to.not.be.ok();
            expect(utilx.isUint32(4.2)).to.not.be.ok();
            expect(utilx.isUint32(Infinity)).to.not.be.ok();
            expect(utilx.isUint32(-Infinity)).to.not.be.ok();
            expect(utilx.isUint32(NaN)).to.not.be.ok();
            expect(utilx.isUint32(true)).to.not.be.ok();
            expect(utilx.isUint32(false)).to.not.be.ok();
            expect(utilx.isUint32('str')).to.not.be.ok();
            expect(utilx.isUint32({})).to.not.be.ok();
            expect(utilx.isUint32({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.isUint32({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.isUint32({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.isUint32({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.isUint32({
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
                expect(utilx.isUint32(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.isUint32(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.isUint32(Infinity)).to.not.be.ok();
            expect(utilx.isUint32(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.isUint32(3.4)).to.not.be.ok();
            expect(utilx.isUint32(-3.4)).to.not.be.ok();
        });

        it('should be false when number is 2^32 or larger', function () {
            expect(utilx.isUint32(Math.pow(2, 32))).to.not.be.ok();
        });

        it('should be false when number is -1 or smaller', function () {
            expect(utilx.isUint32(-1)).to.not.be.ok();
        });

        it('should be true for range', function () {
            var safeIntegers = [0, 1, Math.pow(2, 32) - 1];

            utilx.arrayForEach(safeIntegers, function (int) {
                expect(utilx.isUint32(int)).to.be.ok();
            });
        });
    });
}());
