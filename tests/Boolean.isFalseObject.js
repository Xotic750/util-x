/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Boolean.isFalseObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Boolean.isFalseObject(utilx.Object.ToObject(true))).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject(utilx.Object.ToObject(false))).to.be.ok();
            expect(utilx.Boolean.isFalseObject(true)).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject(false)).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject()).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject(null)).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject('')).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject(0)).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject(1)).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject({})).to.not.be.ok();
            expect(utilx.Boolean.isFalseObject([])).to.not.be.ok();
        });
    });
}());
