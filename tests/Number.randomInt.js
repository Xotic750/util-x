/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.randomInt', function () {
        it('should be ok in each case', function () {
            var index;

            for (index = 0; utilx.Object.lt(index, 100); index += 1) {
                expect(utilx.Number.isInteger(utilx.Number.randomInt(utilx.Number.MIN_SAFE_INTEGER, utilx.Number.MAX_SAFE_INTEGER))).to.be.ok();
                expect(utilx.Number.inRange(utilx.Number.randomInt(), 0, 1)).to.be.ok();
                expect(utilx.Number.inRange(utilx.Number.randomInt(0), 0, 1)).to.be.ok();
                expect(utilx.Number.inRange(utilx.Number.randomInt(1), 0, 1)).to.be.ok();
            }
        });
    });
}());
