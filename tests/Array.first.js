/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.first', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Array.first([])).to.be(undefined);
            expect(utilx.Array.first([1, 2, 3])).to.be(1);
            expect(utilx.Array.first(utilx.Function.returnArgs(1, 2, 3))).to.be(1);
            expect(utilx.Array.first({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            })).to.be(1);
        });
    });
}());
