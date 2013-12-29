/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('numberIsFinite', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.numberIsFinite()).to.be(false);
            expect(utilx.numberIsFinite(privateUndefined)).to.be(false);
            expect(utilx.numberIsFinite(null)).to.be(false);
            expect(utilx.numberIsFinite(1)).to.be(true);
            expect(utilx.numberIsFinite(Infinity)).to.be(false);
            expect(utilx.numberIsFinite(-Infinity)).to.be(false);
            expect(utilx.numberIsFinite(NaN)).to.be(false);
            expect(utilx.numberIsFinite('')).to.be(false);
            expect(utilx.numberIsFinite(true)).to.be(false);
            expect(utilx.numberIsFinite(false)).to.be(false);
            expect(utilx.numberIsFinite({})).to.be(false);
            expect(utilx.numberIsFinite([])).to.be(false);
            expect(utilx.numberIsFinite(new RegExp('c'))).to.be(false);
            expect(utilx.numberIsFinite(new Date(2013, 11, 11))).to.be(false);
            expect(utilx.numberIsFinite(new Error('x'))).to.be(false);
        });
    });
}());
