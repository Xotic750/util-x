/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNaN', function () {
        var toObj = Object;

        it('NaN should be be true', function () {
            expect(utilx.Number.isNaN(NaN)).to.be(true);
        });

        it('Object(NaN) should be false', function () {
            expect(utilx.Number.isNaN(toObj(NaN))).to.be(false);
        });

        it('No arguments, undefined and null should be false', function () {
            expect(utilx.Number.isNaN()).to.be(false);
            expect(utilx.Number.isNaN(undefined)).to.be(false);
            expect(utilx.Number.isNaN(null)).to.be(false);
        });

        it('Other numbers should be false', function () {
            expect(utilx.Number.isNaN(Infinity)).to.be(false);
            expect(utilx.Number.isNaN(-Infinity)).to.be(false);
            expect(utilx.Number.isNaN(0)).to.be(false);
            expect(utilx.Number.isNaN(-0)).to.be(false);
            expect(utilx.Number.isNaN(-4)).to.be(false);
            expect(utilx.Number.isNaN(4)).to.be(false);
            expect(utilx.Number.isNaN(4.5)).to.be(false);
            expect(utilx.Number.isNaN(utilx.Number.MAX_VALUE)).to.be(false);
            expect(utilx.Number.isNaN(utilx.Number.MIN_VALUE)).to.be(false);
        });

        it('Strings should be false', function () {
            expect(utilx.Number.isNaN('')).to.be(false);
            expect(utilx.Number.isNaN('hi')).to.be(false);
            expect(utilx.Number.isNaN('1.3')).to.be(false);
            expect(utilx.Number.isNaN('51')).to.be(false);
        });

        it('Booleans should be false', function () {
            expect(utilx.Number.isNaN(true)).to.be(false);
            expect(utilx.Number.isNaN(false)).to.be(false);
        });

        it('Functions should be false', function () {
            expect(utilx.Number.isNaN(utilx.Function.noop)).to.be(false);
        });

        it('Objects should be false', function () {
            expect(utilx.Number.isNaN({})).to.be(false);
            expect(utilx.Number.isNaN([])).to.be(false);
            expect(utilx.Number.isNaN(new RegExp('c'))).to.be(false);
            expect(utilx.Number.isNaN(new Date(2013, 11, 11))).to.be(false);
            expect(utilx.Number.isNaN(new Error('x'))).to.be(false);
        });

        it('Others should be false', function () {
            expect(utilx.Number.isNaN({
                valueOf: function () {
                    return 3;
                }
            })).to.be(false);

            expect(utilx.Number.isNaN({
                valueOf: function () {
                    return Infinity;
                }
            })).to.be(false);

            expect(utilx.Number.isNaN({
                valueOf: function () {
                    throw 17;
                }
            })).to.be(false);

            expect(utilx.Number.isNaN({
                toString: function () {
                    throw 17;
                }
            })).to.be(false);

            expect(utilx.Number.isNaN({
                valueOf: function () {
                    throw 17;
                },

                toString: function () {
                    throw 42;
                }
            })).to.be(false);
        });
    });
}());
