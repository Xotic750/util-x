/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Date.now', function () {
        it('should be the current time', function () {
            var before = (new Date()).getTime(),
                middle = utilx.Date.now(),
                after = (new Date()).getTime();

            expect(before <= middle).to.be.ok();
            expect(middle <= after).to.be.ok(after);
        });
    });
}());
