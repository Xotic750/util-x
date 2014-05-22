/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmptyObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmptyObject(true)).to.not.be.ok();
            expect(utilx.String.isEmptyObject(false)).to.not.be.ok();
            expect(utilx.String.isEmptyObject()).to.not.be.ok();
            expect(utilx.String.isEmptyObject(null)).to.not.be.ok();
            expect(utilx.String.isEmptyObject('')).to.not.be.ok();
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(''))).to.be.ok();
            expect(utilx.String.isEmptyObject(' ')).to.not.be.ok();
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(' '))).to.not.be.ok();
            expect(utilx.String.isEmptyObject(0)).to.not.be.ok();
            expect(utilx.String.isEmptyObject(1)).to.not.be.ok();
            expect(utilx.String.isEmptyObject({})).to.not.be.ok();
            expect(utilx.String.isEmptyObject([])).to.not.be.ok();
        });
    });
}());
