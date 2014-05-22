/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Date.isValid', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Date.isValid(new Date())).to.be.ok();
            expect(utilx.Date.isValid(new Date(NaN))).to.not.be.ok();
        });
    });
}());
