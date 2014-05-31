/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.startsWith', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.startsWith();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.startsWith(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.startsWith(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.startsWith('abcdefghijklmnopqrstuvwxyz', 'abc')).to.be.ok();
            expect(utilx.String.startsWith('abcdefghijklmnopqrstuvwxyz', 'xyz')).to.not.be.ok();
            expect(utilx.String.startsWith('abcdefghijklmnopqrstuvwxyz', 'def', 3)).to.be.ok();
            expect(utilx.String.startsWith('abcdefghijklmnopqrstuvwxyz', 'def', 4)).to.not.be.ok();
        });
    });
}());
