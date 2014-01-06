/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('normaliseErrorIEToString', function () {
        it('should not throw an error in each case', function () {
            var message = 'We want a normalised toString!';

            try {
                throw new Error(message);
            } catch (e) {
                if (utilx.strictEqual(e.message, 'We want a normalised toString!') &&
                        utilx.strictEqual(e.toString(), '[object Error]')) {

                    utilx.normaliseErrorIE();
                }
            }

            expect(function () {
                throw new Error(message);
            }).to.throwException(function (e) {
                expect(e).to.be.a(Error);
                expect(e.toString()).to.be('Error: ' + message);
            });
        });
    });
}());
