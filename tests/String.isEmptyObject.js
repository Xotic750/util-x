/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isEmptyObject', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isEmptyObject();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isEmptyObject(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isEmptyObject(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is not a string', function () {
            expect(function () {
                utilx.String.isEmptyObject(true);
                utilx.String.isEmptyObject(false);
                utilx.String.isEmptyObject(0);
                utilx.String.isEmptyObject(1);
                utilx.String.isEmptyObject({});
                utilx.String.isEmptyObject([]);
                utilx.String.isEmptyObject('');
                utilx.String.isEmptyObject(' ');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(''))).to.be.ok();
            expect(utilx.String.isEmptyObject(utilx.Object.ToObject(' '))).to.not.be.ok();
        });
    });
}());
