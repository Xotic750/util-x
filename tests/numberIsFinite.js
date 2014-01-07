/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('numberIsFinite', function () {
        it('should not throw an error in each case', function () {
            var zero = 0;

            expect(utilx.numberIsFinite()).to.not.be.ok();
            expect(utilx.numberIsFinite(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.numberIsFinite(null)).to.not.be.ok();
            expect(utilx.numberIsFinite(1)).to.be.ok();
            expect(utilx.numberIsFinite(Infinity)).to.not.be.ok();
            expect(utilx.numberIsFinite(-Infinity)).to.not.be.ok();
            expect(utilx.numberIsFinite(NaN)).to.not.be.ok();
            expect(utilx.numberIsFinite('')).to.not.be.ok();
            expect(utilx.numberIsFinite(true)).to.not.be.ok();
            expect(utilx.numberIsFinite(false)).to.not.be.ok();
            expect(utilx.numberIsFinite({})).to.not.be.ok();
            expect(utilx.numberIsFinite([])).to.not.be.ok();
            expect(utilx.numberIsFinite(new RegExp('c'))).to.not.be.ok();
            expect(utilx.numberIsFinite(new Date(2013, 11, 11))).to.not.be.ok();
            expect(utilx.numberIsFinite(new Error('x'))).to.not.be.ok();
            expect(utilx.numberIsFinite(4)).to.be.ok();
            expect(utilx.numberIsFinite(4.5)).to.be.ok();
            expect(utilx.numberIsFinite('hi')).to.not.be.ok();
            expect(utilx.numberIsFinite('1.3')).to.not.be.ok();
            expect(utilx.numberIsFinite('51')).to.not.be.ok();
            expect(utilx.numberIsFinite(0)).to.be.ok();
            expect(utilx.numberIsFinite(-0)).to.be.ok();
            expect(utilx.numberIsFinite({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsFinite({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsFinite({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsFinite({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsFinite({
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
