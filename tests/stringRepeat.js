/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringRepeat', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.stringRepeat();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringRepeat(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringRepeat(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.stringRepeat(' ')).to.be('');
            expect(function () {
                utilx.stringRepeat(' ', -1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(utilx.stringRepeat(' ', 0)).to.be('');
            expect(utilx.stringRepeat(' ', 5)).to.be('     ');
            expect(utilx.stringRepeat('ab', 5)).to.be('ababababab');
            expect(utilx.stringRepeat('', 5)).to.be('');
        });
    });
}());
