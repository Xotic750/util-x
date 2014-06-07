/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmptyAny', function () {
        it('should return undefined for non strings', function () {
            expect(utilx.String.isEmptyAny()).to.be(undefined);
            expect(utilx.String.isEmptyAny(undefined)).to.be(undefined);
            expect(utilx.String.isEmptyAny(null)).to.be(undefined);
            expect(utilx.String.isEmptyAny(true)).to.be(undefined);
            expect(utilx.String.isEmptyAny(false)).to.be(undefined);
            expect(utilx.String.isEmptyAny(0)).to.be(undefined);
            expect(utilx.String.isEmptyAny(1)).to.be(undefined);
            expect(utilx.String.isEmptyAny({})).to.be(undefined);
            expect(utilx.String.isEmptyAny([])).to.be(undefined);
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmptyAny('')).to.be(true);
            expect(utilx.String.isEmptyAny(utilx.Object.ToObject(''))).to.be(true);
            expect(utilx.String.isEmptyAny(' ')).to.be(false);
            expect(utilx.String.isEmptyAny(utilx.Object.ToObject(' '))).to.be(false);
        });
    });
}());
