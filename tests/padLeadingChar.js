/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('padLeadingChar', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.padLeadingChar();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.padLeadingChar(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.padLeadingChar(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.padLeadingChar('1', '0')).to.be('1');
            expect(utilx.padLeadingChar('1', '0', utilx.privateUndefined)).to.be('1');
            expect(utilx.padLeadingChar('1', '0', null)).to.be('1');
            expect(utilx.padLeadingChar('1', '0', -1)).to.be('1');
            expect(utilx.padLeadingChar('1', '0', 0)).to.be('1');
            expect(utilx.padLeadingChar('1', '0', 5)).to.be('00001');
            expect(utilx.padLeadingChar('1', 'ab', 5)).to.be('aaaa1');
            expect(utilx.padLeadingChar('1', '', 5)).to.be('1');
        });
    });
}());
