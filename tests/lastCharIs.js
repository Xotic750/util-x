/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('lastCharIs', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.lastCharIs();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.lastCharIs(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.lastCharIs(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.lastCharIs('', '')).to.be.ok();
            expect(utilx.lastCharIs('abcdef', 'f')).to.be.ok();
        });
    });
}());
