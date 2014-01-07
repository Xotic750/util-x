/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isError', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isError()).to.not.be.ok();
            expect(utilx.isError(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isError(null)).to.not.be.ok();
            expect(utilx.isError(1)).to.not.be.ok();
            expect(utilx.isError(true)).to.not.be.ok();
            expect(utilx.isError('')).to.not.be.ok();
            expect(utilx.isError(new Error('x'))).to.be.ok();
            expect(utilx.isError(new SyntaxError('x'))).to.be.ok();
            expect(utilx.isError(new TypeError('x'))).to.be.ok();
            expect(utilx.isError(new EvalError('x'))).to.be.ok();
            expect(utilx.isError(new RangeError('x'))).to.be.ok();
            expect(utilx.isError(new ReferenceError('x'))).to.be.ok();
            expect(utilx.isError(new URIError('x'))).to.be.ok();
            expect(utilx.isError(new Date())).to.not.be.ok();
            expect(utilx.isError(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isError(utilx.noop)).to.not.be.ok();
            expect(utilx.isError([])).to.not.be.ok();
            expect(utilx.isError({})).to.not.be.ok();
            expect(utilx.isError(utilx.returnArgs())).to.not.be.ok();
        });
    });
}());
