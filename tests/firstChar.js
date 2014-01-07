/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('firstChar', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.firstChar();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.firstChar(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.firstChar(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.firstChar('')).to.be('');
            expect(utilx.firstChar('abcdef')).to.be('a');
        });
    });
}());
