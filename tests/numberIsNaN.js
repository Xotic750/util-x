/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('numberIsNaN', function () {
        it('should not throw an error in each case', function () {
            var zero = 0;

            expect(utilx.numberIsNaN()).to.not.be.ok();
            expect(utilx.numberIsNaN(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.numberIsNaN(null)).to.not.be.ok();
            expect(utilx.numberIsNaN(1)).to.not.be.ok();
            expect(utilx.numberIsNaN(Infinity)).to.not.be.ok();
            expect(utilx.numberIsNaN(-Infinity)).to.not.be.ok();
            expect(utilx.numberIsNaN(NaN)).to.be.ok();
            expect(utilx.numberIsNaN('')).to.not.be.ok();
            expect(utilx.numberIsNaN(true)).to.not.be.ok();
            expect(utilx.numberIsNaN(false)).to.not.be.ok();
            expect(utilx.numberIsNaN(utilx.noop)).to.not.be.ok();
            expect(utilx.numberIsNaN({})).to.not.be.ok();
            expect(utilx.numberIsNaN([])).to.not.be.ok();
            expect(utilx.numberIsNaN(new RegExp('c'))).to.not.be.ok();
            expect(utilx.numberIsNaN(new Date(2013, 11, 11))).to.not.be.ok();
            expect(utilx.numberIsNaN(new Error('x'))).to.not.be.ok();
            expect(utilx.numberIsNaN(zero / zero)).to.be.ok();
            expect(utilx.numberIsNaN(Number('NaN'))).to.be.ok();
            expect(utilx.numberIsNaN(4)).to.not.be.ok();
            expect(utilx.numberIsNaN(4.5)).to.not.be.ok();
            expect(utilx.numberIsNaN('hi')).to.not.be.ok();
            expect(utilx.numberIsNaN('1.3')).to.not.be.ok();
            expect(utilx.numberIsNaN('51')).to.not.be.ok();
            expect(utilx.numberIsNaN(0)).to.not.be.ok();
            expect(utilx.numberIsNaN(-0)).to.not.be.ok();
            expect(utilx.numberIsNaN({
                valueOf: function () {
                    return 3;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsNaN({
                valueOf: function () {
                    return zero / zero;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsNaN({
                valueOf: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsNaN({
                toString: function () {
                    throw 17;
                }
            })).to.not.be.ok();

            expect(utilx.numberIsNaN({
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
