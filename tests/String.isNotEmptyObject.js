/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmptyObject', function () {
        it('should throw if argument is not a string', function () {
            expect(utilx.String.isNotEmptyObject()).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(undefined)).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(null)).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(true)).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(false)).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(0)).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(1)).to.be(undefined);
            expect(utilx.String.isNotEmptyObject({})).to.be(undefined);
            expect(utilx.String.isNotEmptyObject([])).to.be(undefined);
            expect(utilx.String.isNotEmptyObject('')).to.be(undefined);
            expect(utilx.String.isNotEmptyObject(' ')).to.be(undefined);
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmptyObject(utilx.Object.ToObject(''))).to.be(false);
            expect(utilx.String.isNotEmptyObject(utilx.Object.ToObject(' '))).to.be(true);
        });
    });
}());
