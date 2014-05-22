/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.isFinite', function () {
        it('should not throw an error in each case', function () {
            var zero = 0;

            expect(utilx.Number.isFinite()).to.not.be.ok();
            expect(utilx.Number.isFinite(undefined)).to.not.be.ok();
            expect(utilx.Number.isFinite(null)).to.not.be.ok();
            expect(utilx.Number.isFinite(1)).to.be.ok();
            expect(utilx.Number.isFinite(Infinity)).to.not.be.ok();
            expect(utilx.Number.isFinite(-Infinity)).to.not.be.ok();
            expect(utilx.Number.isFinite(NaN)).to.not.be.ok();
            expect(utilx.Number.isFinite('')).to.not.be.ok();
            expect(utilx.Number.isFinite(true)).to.not.be.ok();
            expect(utilx.Number.isFinite(false)).to.not.be.ok();
            expect(utilx.Number.isFinite({})).to.not.be.ok();
            expect(utilx.Number.isFinite([])).to.not.be.ok();
            expect(utilx.Number.isFinite(new RegExp('c'))).to.not.be.ok();
            expect(utilx.Number.isFinite(new Date(2013, 11, 11))).to.not.be.ok();
            expect(utilx.Number.isFinite(new Error('x'))).to.not.be.ok();
            expect(utilx.Number.isFinite(4)).to.be.ok();
            expect(utilx.Number.isFinite(4.5)).to.be.ok();
            expect(utilx.Number.isFinite('hi')).to.not.be.ok();
            expect(utilx.Number.isFinite('1.3')).to.not.be.ok();
            expect(utilx.Number.isFinite('51')).to.not.be.ok();
            expect(utilx.Number.isFinite(0)).to.be.ok();
            expect(utilx.Number.isFinite(-0)).to.be.ok();
            expect(utilx.Number.isFinite({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isFinite({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isFinite({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isFinite({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.Number.isFinite({
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
