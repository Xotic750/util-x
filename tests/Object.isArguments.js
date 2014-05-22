/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isArguments', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isArguments()).to.not.be.ok();
            expect(utilx.Object.isArguments(undefined)).to.not.be.ok();
            expect(utilx.Object.isArguments(null)).to.not.be.ok();
            expect(utilx.Object.isArguments(1)).to.not.be.ok();
            expect(utilx.Object.isArguments(true)).to.not.be.ok();
            expect(utilx.Object.isArguments('')).to.not.be.ok();
            expect(utilx.Object.isArguments(new Error('x'))).to.not.be.ok();
            expect(utilx.Object.isArguments(new Date())).to.not.be.ok();
            expect(utilx.Object.isArguments(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Object.isArguments(utilx.Function.noop)).to.not.be.ok();
            expect(utilx.Object.isArguments([])).to.not.be.ok();
            expect(utilx.Object.isArguments({})).to.not.be.ok();
            expect(utilx.Object.isArguments(utilx.Function.returnArgs())).to.be.ok();
        });
    });
}());
