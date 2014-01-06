/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('normaliseErrorIEToString', function () {
        it('should not throw an error in each case', function () {
            var message = 'We want a normalised toString!';

            expect(!utilx.normaliseErrorIEToString.off()).to.be.ok();
            expect(!utilx.normaliseErrorIEToString.state()).to.be.ok();

            try {
                throw new Error(message);
            } catch (e) {
                if (utilx.strictEqual(e.message, message) &&
                        utilx.strictEqual(e.toString(), '[object Error]')) {

                    expect(utilx.normaliseErrorIEToString.on()).to.be.ok();
                    expect(utilx.normaliseErrorIEToString.state()).to.be.ok();
                }
            }

            expect(function () {
                throw new Error(message);
            }).to.throwException(function (e) {
                expect(e).to.be.a(Error);
                expect(e.toString()).to.match(new RegExp('^Error: ' + message));
            });

            expect(!utilx.normaliseErrorIEToString.off()).to.be.ok();
            expect(!utilx.normaliseErrorIEToString.state()).to.be.ok();
        });
    });
}());
