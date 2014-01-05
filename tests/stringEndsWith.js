/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringEndsWith', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.stringEndsWith();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringEndsWith(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringEndsWith(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.stringEndsWith('abcdefghijklmnopqrstuvwxyz', 'xyz')).to.be.ok();
            expect(utilx.stringEndsWith('abcdefghijklmnopqrstuvwxyz', 'abc')).to.not.be.ok();
            expect(utilx.stringEndsWith('abcdefghijklmnopqrstuvwxyz', 'abc', 3)).to.be.ok();
            expect(utilx.stringEndsWith('abcdefghijklmnopqrstuvwxyz', 'xyz', 24)).to.not.be.ok();
        });
    });
}());
