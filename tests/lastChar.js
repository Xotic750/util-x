/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('lastChar', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.lastChar();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.lastChar(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.lastChar(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.lastChar('')).to.be('');
            expect(utilx.lastChar('abcdef')).to.be('f');
        });
    });
}());
