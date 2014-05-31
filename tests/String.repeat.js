/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.repeat', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.repeat();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.repeat(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.repeat(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.repeat(' ', 0)).to.be('');
            expect(utilx.String.repeat(' ', 5)).to.be('     ');
            expect(utilx.String.repeat('ab', 5)).to.be('ababababab');
            expect(utilx.String.repeat('', 5)).to.be('');
        });
    });
}());
