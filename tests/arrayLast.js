/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayLast', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.arrayLast([])).to.be(utilx.privateUndefined);
            expect(utilx.arrayLast([1, 2, 3])).to.be(3);
            expect(utilx.arrayLast(utilx.returnArgs(1, 2, 3))).to.be(3);
            expect(utilx.arrayLast({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            })).to.be(3);
        });
    });
}());
