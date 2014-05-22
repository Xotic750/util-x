/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmpty', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmpty(true)).to.not.be.ok();
            expect(utilx.String.isEmpty(false)).to.not.be.ok();
            expect(utilx.String.isEmpty()).to.not.be.ok();
            expect(utilx.String.isEmpty(null)).to.not.be.ok();
            expect(utilx.String.isEmpty('')).to.be.ok();
            expect(utilx.String.isEmpty(utilx.Object.ToObject(''))).to.not.be.ok();
            expect(utilx.String.isEmpty(' ')).to.not.be.ok();
            expect(utilx.String.isEmpty(utilx.Object.ToObject(' '))).to.not.be.ok();
            expect(utilx.String.isEmpty(0)).to.not.be.ok();
            expect(utilx.String.isEmpty(1)).to.not.be.ok();
            expect(utilx.String.isEmpty({})).to.not.be.ok();
            expect(utilx.String.isEmpty([])).to.not.be.ok();
        });
    });
}());
