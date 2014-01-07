/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isDateValid', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isDateValid(new Date())).to.be.ok();
            expect(utilx.isDateValid(new Date(NaN))).to.not.be.ok();
        });
    });
}());
