/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmpty', function () {
        it('should throw if argument is not a string', function () {
            expect(utilx.String.isNotEmpty()).to.be(undefined);
            expect(utilx.String.isNotEmpty(undefined)).to.be(undefined);
            expect(utilx.String.isNotEmpty(null)).to.be(undefined);
            expect(utilx.String.isNotEmpty(true)).to.be(undefined);
            expect(utilx.String.isNotEmpty(false)).to.be(undefined);
            expect(utilx.String.isNotEmpty(0)).to.be(undefined);
            expect(utilx.String.isNotEmpty(1)).to.be(undefined);
            expect(utilx.String.isNotEmpty({})).to.be(undefined);
            expect(utilx.String.isNotEmpty([])).to.be(undefined);
            expect(utilx.String.isNotEmpty(utilx.Object.ToObject(''))).to.be(undefined);
            expect(utilx.String.isNotEmpty(utilx.Object.ToObject(' '))).to.be(undefined);
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmpty('')).to.be(false);
            expect(utilx.String.isNotEmpty(' ')).to.be(true);
        });
    });
}());
