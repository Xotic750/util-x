/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isNotEmptyObject', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isNotEmptyObject();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isNotEmptyObject(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isNotEmptyObject(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is not a string', function () {
            expect(function () {
                utilx.String.isNotEmptyObject(true);
                utilx.String.isNotEmptyObject(false);
                utilx.String.isNotEmptyObject(0);
                utilx.String.isNotEmptyObject(1);
                utilx.String.isNotEmptyObject({});
                utilx.String.isNotEmptyObject([]);
                utilx.String.isNotEmptyObject('');
                utilx.String.isNotEmptyObject(' ');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isNotEmptyObject(utilx.Object.ToObject(''))).to.not.be.ok();
            expect(utilx.String.isNotEmptyObject(utilx.Object.ToObject(' '))).to.be.ok();
        });
    });
}());
