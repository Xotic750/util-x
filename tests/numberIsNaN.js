/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('numberIsNaN', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.numberIsNaN()).to.be(false);
            expect(utilx.numberIsNaN(privateUndefined)).to.be(false);
            expect(utilx.numberIsNaN(null)).to.be(false);
            expect(utilx.numberIsNaN(1)).to.be(false);
            expect(utilx.numberIsNaN(Infinity)).to.be(false);
            expect(utilx.numberIsNaN(-Infinity)).to.be(false);
            expect(utilx.numberIsNaN(NaN)).to.be(true);
            expect(utilx.numberIsNaN('')).to.be(false);
            expect(utilx.numberIsNaN(true)).to.be(false);
            expect(utilx.numberIsNaN(false)).to.be(false);
            expect(utilx.numberIsNaN(utilx.noop)).to.be(false);
            expect(utilx.numberIsNaN({})).to.be(false);
            expect(utilx.numberIsNaN([])).to.be(false);
            expect(utilx.numberIsNaN(new RegExp('c'))).to.be(false);
            expect(utilx.numberIsNaN(new Date(2013, 11, 11))).to.be(false);
            expect(utilx.numberIsNaN(new Error('x'))).to.be(false);
        });
    });
}());
