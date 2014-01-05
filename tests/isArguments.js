/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    describe('isArguments', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isArguments()).to.not.be.ok();
            expect(utilx.isArguments(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isArguments(null)).to.not.be.ok();
            expect(utilx.isArguments(1)).to.not.be.ok();
            expect(utilx.isArguments(true)).to.not.be.ok();
            expect(utilx.isArguments('')).to.not.be.ok();
            expect(utilx.isArguments(new Error('x'))).to.not.be.ok();
            expect(utilx.isArguments(new Date())).to.not.be.ok();
            expect(utilx.isArguments(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isArguments(utilx.noop)).to.not.be.ok();
            expect(utilx.isArguments([])).to.not.be.ok();
            expect(utilx.isArguments({})).to.not.be.ok();
            expect(utilx.isArguments(returnArgs())).to.be.ok();
        });
    });
}());
