/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmptyAny', function () {
        it('should throw if argument is not a string', function () {
            expect(utilx.String.isNotEmptyAny()).to.be(undefined);
            expect(utilx.String.isNotEmptyAny(undefined)).to.be(undefined);
            expect(utilx.String.isNotEmptyAny(null)).to.be(undefined);
            expect(utilx.String.isNotEmptyAny(true)).to.be(undefined);
            expect(utilx.String.isNotEmptyAny(false)).to.be(undefined);
            expect(utilx.String.isNotEmptyAny(0)).to.be(undefined);
            expect(utilx.String.isNotEmptyAny(1)).to.be(undefined);
            expect(utilx.String.isNotEmptyAny({})).to.be(undefined);
            expect(utilx.String.isNotEmptyAny([])).to.be(undefined);
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmptyAny('')).to.be(false);
            expect(utilx.String.isNotEmptyAny(utilx.Object.ToObject(''))).to.be(false);
            expect(utilx.String.isNotEmptyAny(' ')).to.be(true);
            expect(utilx.String.isNotEmptyAny(utilx.Object.ToObject(' '))).to.be(true);
        });
    });
}());
