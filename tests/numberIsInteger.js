/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('numberIsInteger', function () {
        it('should be truthy on integers', function () {
            expect(utilx.numberIsInteger(4)).to.be.ok();
            expect(utilx.numberIsInteger(4.0)).to.be.ok();
            expect(utilx.numberIsInteger(1801439850948)).to.be.ok();
        });

        it('should be falsy on non-integers', function () {
            var zero = 0;

            expect(utilx.numberIsInteger()).to.not.be.ok();
            expect(utilx.numberIsInteger(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.numberIsInteger(null)).to.not.be.ok();
            expect(utilx.numberIsInteger(4.2)).to.not.be.ok();
            expect(utilx.numberIsInteger(Infinity)).to.not.be.ok();
            expect(utilx.numberIsInteger(-Infinity)).to.not.be.ok();
            expect(utilx.numberIsInteger(NaN)).to.not.be.ok();
            expect(utilx.numberIsInteger(true)).to.not.be.ok();
            expect(utilx.numberIsInteger(false)).to.not.be.ok();
            expect(utilx.numberIsInteger('str')).to.not.be.ok();
            expect(utilx.numberIsInteger({})).to.not.be.ok();
            expect(utilx.numberIsInteger({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsInteger({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsInteger({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsInteger({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsInteger({
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
                expect(utilx.numberIsInteger(thing)).to.not.be.ok();
            });
        });

        it('should be false when NaN', function () {
            expect(utilx.numberIsInteger(NaN)).to.not.be.ok();
        });

        it('should be false when Infinity', function () {
            expect(utilx.numberIsInteger(Infinity)).to.not.be.ok();
            expect(utilx.numberIsInteger(-Infinity)).to.not.be.ok();
        });

        it('should be false when number is not integer', function () {
            expect(utilx.numberIsInteger(3.4)).to.not.be.ok();
            expect(utilx.numberIsInteger(-3.4)).to.not.be.ok();
        });

        it('should be false when abs(number) is 2^53 or larger', function () {
            expect(utilx.numberIsInteger(Math.pow(2, 53))).to.not.be.ok();
            expect(utilx.numberIsInteger(-Math.pow(2, 53))).to.not.be.ok();
        });

        it('should be true when abs(number) is less than 2^53', function () {
            var safeIntegers = [0, 1, Math.pow(2, 53) - 1];

            utilx.arrayForEach(safeIntegers, function (int) {
                expect(utilx.numberIsInteger(int)).to.be.ok();
                expect(utilx.numberIsInteger(-int)).to.be.ok();
            });
        });
    });
}());
