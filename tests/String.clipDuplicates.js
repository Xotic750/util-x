/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.clipDuplicates', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.clipDuplicates();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.clipDuplicates(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.clipDuplicates(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.clipDuplicates('')).to.be('');
            expect(utilx.String.clipDuplicates('      ')).to.be(' ');
            expect(utilx.String.clipDuplicates('abc')).to.be('abc');
            expect(utilx.String.clipDuplicates('aabc')).to.be('abc');
            expect(utilx.String.clipDuplicates('abca')).to.be('bca');
            expect(utilx.String.clipDuplicates('aabaacaa')).to.be('bca');
        });
    });
}());
