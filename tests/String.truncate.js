/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.truncate', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.truncate();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.truncate(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.truncate(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.truncate('null', -1)).to.be('null');
            expect(utilx.String.truncate('-1', 1)).to.be('-');
            expect(utilx.String.truncate('0', 0)).to.be('');
            expect(utilx.String.truncate('1', 2)).to.be('1');
            expect(utilx.String.truncate(false, 4)).to.be('fals');
            expect(utilx.String.truncate(true, 4)).to.be('true');
            expect(utilx.String.truncate('null', -1)).to.be('null');
            expect(utilx.String.truncate('null', -Infinity)).to.be('null');
            expect(utilx.String.truncate('null', NaN)).to.be('null');
            expect(utilx.String.truncate('null', Infinity)).to.be('null');
        });
    });
}());
