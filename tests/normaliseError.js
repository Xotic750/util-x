/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('normaliseErrorIEToString', function () {
        it('should not throw an error in each case', function () {
            var message = 'We want a normalised toString!',
                testError = new Error(message);

            try {
                throw testError;
            } catch (e) {
                if (utilx.strictEqual(e.message, 'Should we patch IE6&7?') &&
                        utilx.strictEqual(e.toString(), '[object Error]')) {

                    utilx.normaliseErrorIE();
                }
            }

            expect(function () {
                throw testError;
            }).to.throwException(function (e) {
                expect(e).to.be.a(Error);
                expect(e.toString()).to.be('Error: ' + message);
            });
        });
    });
}());
