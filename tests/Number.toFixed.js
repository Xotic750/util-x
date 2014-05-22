/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.toFixed', function () {
        it('should convert numbers correctly', function () {
            expect(utilx.Number.toFixed(0.00008, 3)).to.be('0.000');
            expect(utilx.Number.toFixed(0.9, 0)).to.be('1');
            expect(utilx.Number.toFixed(1.255, 2)).to.be('1.25');
            expect(utilx.Number.toFixed(1843654265.0774949, 5)).to.be('1843654265.07749');
            expect(utilx.Number.toFixed(1000000000000000128, 0)).to.be('1000000000000000128');
        });
    });
}());
