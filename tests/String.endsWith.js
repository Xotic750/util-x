/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.endsWith', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.String.endsWith();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.String.endsWith(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.String.endsWith(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.String.endsWith('abcdefghijklmnopqrstuvwxyz', 'xyz')).to.be.ok();
            expect(utilx.String.endsWith('abcdefghijklmnopqrstuvwxyz', 'abc')).to.not.be.ok();
            expect(utilx.String.endsWith('abcdefghijklmnopqrstuvwxyz', 'abc', 3)).to.be.ok();
            expect(utilx.String.endsWith('abcdefghijklmnopqrstuvwxyz', 'xyz', 24)).to.not.be.ok();
        });
    });
}());
