/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Error.isError', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Error.isError()).to.not.be.ok();
            expect(utilx.Error.isError(undefined)).to.not.be.ok();
            expect(utilx.Error.isError(null)).to.not.be.ok();
            expect(utilx.Error.isError(1)).to.not.be.ok();
            expect(utilx.Error.isError(true)).to.not.be.ok();
            expect(utilx.Error.isError('')).to.not.be.ok();
            expect(utilx.Error.isError(new Error('x'))).to.be.ok();
            expect(utilx.Error.isError(new SyntaxError('x'))).to.be.ok();
            expect(utilx.Error.isError(new TypeError('x'))).to.be.ok();
            expect(utilx.Error.isError(new EvalError('x'))).to.be.ok();
            expect(utilx.Error.isError(new RangeError('x'))).to.be.ok();
            expect(utilx.Error.isError(new ReferenceError('x'))).to.be.ok();
            expect(utilx.Error.isError(new URIError('x'))).to.be.ok();
            expect(utilx.Error.isError(new Date())).to.not.be.ok();
            expect(utilx.Error.isError(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Error.isError(required.noop)).to.not.be.ok();
            expect(utilx.Error.isError([])).to.not.be.ok();
            expect(utilx.Error.isError({})).to.not.be.ok();
            expect(utilx.Error.isError(required.returnArgs())).to.not.be.ok();
        });
    });
}());
