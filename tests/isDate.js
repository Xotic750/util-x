/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isDate', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isDate(new RegExp('test'))).to.not.be.ok();
            expect(utilx.isDate(new Date())).to.be.ok();
            expect(utilx.isDate(/test/)).to.not.be.ok();
            expect(utilx.isDate([])).to.not.be.ok();
            expect(utilx.isDate({})).to.not.be.ok();
            expect(utilx.isDate('')).to.not.be.ok();
            expect(utilx.isDate(1)).to.not.be.ok();
            expect(utilx.isDate(true)).to.not.be.ok();
            expect(utilx.isDate()).to.not.be.ok();
            expect(utilx.isDate(null)).to.not.be.ok();
            expect(utilx.isDate(utilx.noop)).to.not.be.ok();
            expect(utilx.isDate(utilx.returnArgs())).to.not.be.ok();
        });
    });
}());
