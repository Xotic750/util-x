/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isRegExp', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isRegExp()).to.not.be.ok();
            expect(utilx.isRegExp(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isRegExp(null)).to.not.be.ok();
            expect(utilx.isRegExp(1)).to.not.be.ok();
            expect(utilx.isRegExp(true)).to.not.be.ok();
            expect(utilx.isRegExp('')).to.not.be.ok();
            expect(utilx.isRegExp(new Error('x'))).to.not.be.ok();
            expect(utilx.isRegExp(new Date())).to.not.be.ok();
            expect(utilx.isRegExp(new RegExp('x'))).to.be.ok();
            expect(utilx.isRegExp(utilx.noop)).to.not.be.ok();
            expect(utilx.isRegExp([])).to.not.be.ok();
            expect(utilx.isRegExp({})).to.not.be.ok();
            expect(utilx.isRegExp(utilx.returnArgs())).to.not.be.ok();
        });
    });
}());
