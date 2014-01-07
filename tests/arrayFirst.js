/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayFirst', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.arrayFirst([])).to.be(utilx.privateUndefined);
            expect(utilx.arrayFirst([1, 2, 3])).to.be(1);
            expect(utilx.arrayFirst(utilx.returnArgs(1, 2, 3))).to.be(1);
            expect(utilx.arrayFirst({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            })).to.be(1);
        });
    });
}());
