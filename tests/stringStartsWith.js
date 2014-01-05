/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringStartsWith', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.stringStartsWith();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringStartsWith(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringStartsWith(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.stringStartsWith('abcdefghijklmnopqrstuvwxyz', 'abc')).to.be.ok();
            expect(utilx.stringStartsWith('abcdefghijklmnopqrstuvwxyz', 'xyz')).to.not.be.ok();
            expect(utilx.stringStartsWith('abcdefghijklmnopqrstuvwxyz', 'def', 3)).to.be.ok();
            expect(utilx.stringStartsWith('abcdefghijklmnopqrstuvwxyz', 'def', 4)).to.not.be.ok();
        });
    });
}());
