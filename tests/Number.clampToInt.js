/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.clampToInt', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.clampToInt(-10, -5, 5)).to.be(-5);
            expect(utilx.Number.clampToInt(10, -5, 5)).to.be(5);
            expect(utilx.Number.clampToInt(-5, -5, 5)).to.be(-5);
            expect(utilx.Number.clampToInt(5, -5, 5)).to.be(5);
            expect(utilx.Number.clampToInt(-10.5, -5, 5)).to.be(-5);
            expect(utilx.Number.clampToInt(10.5, -5, 5)).to.be(5);
            expect(utilx.Number.clampToInt(-4.6, -5, 5)).to.be(-4);
            expect(utilx.Number.clampToInt(4.6, -5, 5)).to.be(4);
            expect(utilx.Number.clampToInt(-4.5, -5, 5)).to.be(-4);
            expect(utilx.Number.clampToInt(4.5, -5, 5)).to.be(4);
            expect(utilx.Number.clampToInt(-4.4, -5, 5)).to.be(-4);
            expect(utilx.Number.clampToInt(4.4, -5, 5)).to.be(4);
        });
    });
}());
