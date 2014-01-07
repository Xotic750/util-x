/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('firstCharIs', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.firstCharIs();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.firstCharIs(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.firstCharIs(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.firstCharIs('', '')).to.be.ok();
            expect(utilx.firstCharIs('abcdef', 'a')).to.be.ok();
        });
    });
}());
