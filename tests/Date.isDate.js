/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Date.isDate', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Date.isDate(new RegExp('test'))).to.not.be.ok();
            expect(utilx.Date.isDate(new Date())).to.be.ok();
            expect(utilx.Date.isDate(/test/)).to.not.be.ok();
            expect(utilx.Date.isDate([])).to.not.be.ok();
            expect(utilx.Date.isDate({})).to.not.be.ok();
            expect(utilx.Date.isDate('')).to.not.be.ok();
            expect(utilx.Date.isDate(1)).to.not.be.ok();
            expect(utilx.Date.isDate(true)).to.not.be.ok();
            expect(utilx.Date.isDate()).to.not.be.ok();
            expect(utilx.Date.isDate(null)).to.not.be.ok();
            expect(utilx.Date.isDate(utilx.Function.noop)).to.not.be.ok();
            expect(utilx.Date.isDate(utilx.Function.returnArgs())).to.not.be.ok();
        });
    });
}());
