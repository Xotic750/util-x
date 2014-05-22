/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('RegExp.isRegExp', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.RegExp.isRegExp()).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(undefined)).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(null)).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(1)).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(true)).to.not.be.ok();
            expect(utilx.RegExp.isRegExp('')).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(new Error('x'))).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(new Date())).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(new RegExp('x'))).to.be.ok();
            expect(utilx.RegExp.isRegExp(utilx.Function.noop)).to.not.be.ok();
            expect(utilx.RegExp.isRegExp([])).to.not.be.ok();
            expect(utilx.RegExp.isRegExp({})).to.not.be.ok();
            expect(utilx.RegExp.isRegExp(utilx.Function.returnArgs())).to.not.be.ok();
        });
    });
}());
