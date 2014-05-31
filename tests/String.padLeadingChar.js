/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.padLeadingChar', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.padLeadingChar();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.padLeadingChar(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.padLeadingChar(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.String.padLeadingChar();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.String.padLeadingChar(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.String.padLeadingChar(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.String.padLeadingChar('1', '0')).to.be('1');
            expect(utilx.String.padLeadingChar('1', '0', undefined)).to.be('1');
            expect(utilx.String.padLeadingChar('1', '0', null)).to.be('1');
            expect(utilx.String.padLeadingChar('1', '0', -1)).to.be('1');
            expect(utilx.String.padLeadingChar('1', '0', 0)).to.be('1');
            expect(utilx.String.padLeadingChar('1', '0', 5)).to.be('00001');
            expect(utilx.String.padLeadingChar('1', 'ab', 5)).to.be('aaaa1');
            expect(utilx.String.padLeadingChar('1', '', 5)).to.be('1');
        });
    });
}());
