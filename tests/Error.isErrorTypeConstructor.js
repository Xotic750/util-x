/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Error.isErrorTypeConstructor', function () {
        it('strict equal', function () {
            expect(utilx.Error.isErrorTypeConstructor(Error)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(TypeError)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(SyntaxError)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(RangeError)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(EvalError)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(ReferenceError)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(URIError)).to.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(Array)).to.not.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(Object)).to.not.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(RegExp)).to.not.be.ok();
            expect(utilx.Error.isErrorTypeConstructor(Function)).to.not.be.ok();
        });
    });
}());
