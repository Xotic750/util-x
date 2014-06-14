/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;


    describe('Array.isArray', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Array.isArray()).to.not.be.ok();
            expect(utilx.Array.isArray(undefined)).to.not.be.ok();
            expect(utilx.Array.isArray(null)).to.not.be.ok();
            expect(utilx.Array.isArray(1)).to.not.be.ok();
            expect(utilx.Array.isArray(true)).to.not.be.ok();
            expect(utilx.Array.isArray('')).to.not.be.ok();
            expect(utilx.Array.isArray(new Error('x'))).to.not.be.ok();
            expect(utilx.Array.isArray(new Date())).to.not.be.ok();
            expect(utilx.Array.isArray(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Array.isArray(required.noop)).to.not.be.ok();
            expect(utilx.Array.isArray([])).to.be.ok();
            expect(utilx.Array.isArray({})).to.not.be.ok();
            expect(utilx.Array.isArray(required.returnArgs())).to.not.be.ok();
        });
    });
}());
