/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmpty', function () {
        it('should return undefined for non strings', function () {
            expect(utilx.String.isEmpty()).to.be(undefined);
            expect(utilx.String.isEmpty(undefined)).to.be(undefined);
            expect(utilx.String.isEmpty(null)).to.be(undefined);
            expect(utilx.String.isEmpty(true)).to.be(undefined);
            expect(utilx.String.isEmpty(false)).to.be(undefined);
            expect(utilx.String.isEmpty(0)).to.be(undefined);
            expect(utilx.String.isEmpty(1)).to.be(undefined);
            expect(utilx.String.isEmpty({})).to.be(undefined);
            expect(utilx.String.isEmpty([])).to.be(undefined);
            expect(utilx.String.isEmpty(utilx.Object.ToObject(''))).to.be(undefined);
            expect(utilx.String.isEmpty(utilx.Object.ToObject(' '))).to.be(undefined);
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmpty('')).to.be(true);
            expect(utilx.String.isEmpty(' ')).to.be(false);
        });
    });
}());
