/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;


    describe('arrayIsArray', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.arrayIsArray()).to.not.be.ok();
            expect(utilx.arrayIsArray(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.arrayIsArray(null)).to.not.be.ok();
            expect(utilx.arrayIsArray(1)).to.not.be.ok();
            expect(utilx.arrayIsArray(true)).to.not.be.ok();
            expect(utilx.arrayIsArray('')).to.not.be.ok();
            expect(utilx.arrayIsArray(new Error('x'))).to.not.be.ok();
            expect(utilx.arrayIsArray(new Date())).to.not.be.ok();
            expect(utilx.arrayIsArray(new RegExp('x'))).to.not.be.ok();
            expect(utilx.arrayIsArray(utilx.noop)).to.not.be.ok();
            expect(utilx.arrayIsArray([])).to.be.ok();
            expect(utilx.arrayIsArray({})).to.not.be.ok();
            expect(utilx.arrayIsArray(utilx.returnArgs())).to.not.be.ok();
        });
    });
}());
