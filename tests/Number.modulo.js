/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.modulo', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.modulo(10, 3)).to.be(1);
            expect(utilx.Number.modulo(-10, 3)).to.be(2);
            expect(utilx.Number.modulo(10, 3.1)).to.be(0.6999999999999993);
            expect(utilx.Number.modulo(-10, 3.1)).to.be(2.4000000000000004);
            expect(utilx.Number.modulo(10.1, 3)).to.be(1.0999999999999996);
            expect(utilx.Number.modulo(10.1, 3.1)).to.be(0.7999999999999989);
            expect(utilx.Number.modulo(-10.1, 3.1)).to.be(2.3000000000000007);
        });
    });
}());
