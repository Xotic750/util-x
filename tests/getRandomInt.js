/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('getRandomInt', function () {
        it('should be ok in each case', function () {
            var index;

            for (index = 0; utilx.lt(index, 100); index += 1) {
                expect(utilx.numberIsInteger(utilx.getRandomInt(utilx.MIN_INTEGER, utilx.MAX_INTEGER))).to.be.ok();
                expect(utilx.inRange(utilx.getRandomInt(), 0, 1)).to.be.ok();
                expect(utilx.inRange(utilx.getRandomInt(0), 0, 1)).to.be.ok();
                expect(utilx.inRange(utilx.getRandomInt(1), 0, 1)).to.be.ok();
            }
        });
    });
}());
