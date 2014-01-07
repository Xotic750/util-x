/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('inRange', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.inRange(-10, -5, 5)).to.not.be.ok();
            expect(utilx.inRange(10, -5, 5)).to.not.be.ok();
            expect(utilx.inRange(-5, -5, 5)).to.be.ok();
            expect(utilx.inRange(5, -5, 5)).to.be.ok();
        });
    });
}());
