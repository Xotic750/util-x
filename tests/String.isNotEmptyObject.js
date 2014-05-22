/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmptyObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmptyObject(true)).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(false)).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject()).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(null)).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject('')).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(utilx.Object.ToObject(''))).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(' ')).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(utilx.Object.ToObject(' '))).to.be.ok();
            expect(utilx.String.isNotEmptyObject(0)).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(1)).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject({})).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject([])).to.not.be.ok();
        });
    });
}());
