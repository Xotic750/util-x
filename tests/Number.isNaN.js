/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isNaN', function () {
        it('should not throw an error in each case', function () {
            var zero = 0;

            expect(utilx.Number.isNaN()).to.not.be.ok();
            expect(utilx.Number.isNaN(undefined)).to.not.be.ok();
            expect(utilx.Number.isNaN(null)).to.not.be.ok();
            expect(utilx.Number.isNaN(1)).to.not.be.ok();
            expect(utilx.Number.isNaN(Infinity)).to.not.be.ok();
            expect(utilx.Number.isNaN(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isNaN(NaN)).to.be.ok();
            expect(utilx.Number.isNaN('')).to.not.be.ok();
            expect(utilx.Number.isNaN(true)).to.not.be.ok();
            expect(utilx.Number.isNaN(false)).to.not.be.ok();
            expect(utilx.Number.isNaN(utilx.Function.noop)).to.not.be.ok();
            expect(utilx.Number.isNaN({})).to.not.be.ok();
            expect(utilx.Number.isNaN([])).to.not.be.ok();
            expect(utilx.Number.isNaN(new RegExp('c'))).to.not.be.ok();
            expect(utilx.Number.isNaN(new Date(2013, 11, 11))).to.not.be.ok();
            expect(utilx.Number.isNaN(new Error('x'))).to.not.be.ok();
            expect(utilx.Number.isNaN(zero / zero)).to.be.ok();
            expect(utilx.Number.isNaN(Number('NaN'))).to.be.ok();
            expect(utilx.Number.isNaN(4)).to.not.be.ok();
            expect(utilx.Number.isNaN(4.5)).to.not.be.ok();
            expect(utilx.Number.isNaN('hi')).to.not.be.ok();
            expect(utilx.Number.isNaN('1.3')).to.not.be.ok();
            expect(utilx.Number.isNaN('51')).to.not.be.ok();
            expect(utilx.Number.isNaN(0)).to.not.be.ok();
            expect(utilx.Number.isNaN(-0)).to.not.be.ok();
            expect(utilx.Number.isNaN({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isNaN({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isNaN({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isNaN({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isNaN({
                valueOf: function () {
                    throw 17;
                },
                toString: function () {
                    throw 42;
                }
            })).to.not.be.ok();
        });
    });
}());
