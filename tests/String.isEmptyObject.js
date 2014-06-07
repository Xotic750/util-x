/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmptyObject', function () {
        it('should throw if argument is not a string', function () {
            expect(utilx.String.isEmptyObject()).to.be(undefined);
            expect(utilx.String.isEmptyObject(undefined)).to.be(undefined);
            expect(utilx.String.isEmptyObject(null)).to.be(undefined);
            expect(utilx.String.isEmptyObject(true)).to.be(undefined);
            expect(utilx.String.isEmptyObject(false)).to.be(undefined);
            expect(utilx.String.isEmptyObject(0)).to.be(undefined);
            expect(utilx.String.isEmptyObject(1)).to.be(undefined);
            expect(utilx.String.isEmptyObject({})).to.be(undefined);
            expect(utilx.String.isEmptyObject([])).to.be(undefined);
            expect(utilx.String.isEmptyObject('')).to.be(undefined);
            expect(utilx.String.isEmptyObject(' ')).to.be(undefined);
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(''))).to.be(true);
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(' '))).to.be(false);
        });
    });
}());
