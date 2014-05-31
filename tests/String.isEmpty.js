/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmpty', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isEmpty();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isEmpty(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isEmpty(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is not a string', function () {
            expect(function () {
                utilx.String.isEmpty(true);
                utilx.String.isEmpty(false);
                utilx.String.isEmpty(0);
                utilx.String.isEmpty(1);
                utilx.String.isEmpty({});
                utilx.String.isEmpty([]);
                utilx.String.isEmpty(utilx.Object.ToObject(''));
                utilx.String.isEmpty(utilx.Object.ToObject(' '));
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmpty('')).to.be.ok();
            expect(utilx.String.isEmpty(' ')).to.not.be.ok();
        });
    });
}());
