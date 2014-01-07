/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('countCharacter', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.countCharacter('abacadaeafa', 'a')).to.be(6);
            expect(utilx.countCharacter('abacadaeafa', 'z')).to.be(0);
            expect(utilx.countCharacter('abacadaeafa', '')).to.be(Infinity);

            expect(function () {
                utilx.countCharacter('abacadaeafa');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.countCharacter('abacadaeafa', null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
