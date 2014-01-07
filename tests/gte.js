/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('gte', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.gte(1, 0)).to.be.ok();
            expect(utilx.gte(1, 1)).to.be.ok();
            expect(utilx.gte(1, 2)).to.not.be.ok();
            expect(utilx.gte(0, 0)).to.be.ok();
            expect(utilx.gte(0, +0)).to.be.ok();
            expect(utilx.gte(0, -0)).to.be.ok();
        });
    });
}());
