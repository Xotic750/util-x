/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('regExpTest', function () {
        it('should ignore lastIndex and set the search start position at 0 for a nonglobal regex', function () {
            var regex = /x/;

            regex.lastIndex = 4;
            expect(utilx.regExpTest(regex, '123x5')).to.be.ok();
        });

        it('should use lastIndex to set the search start position for a global regex', function () {
            var regex = /x/g;

            regex.lastIndex = 4;
            expect(utilx.regExpTest(regex, '123x5')).to.not.be.ok();

            regex.lastIndex = 2;
            expect(utilx.regExpTest(regex, '123x5')).to.be.ok();
        });

        it('should type convert lastIndex when setting the search start position', function () {
            var regex = /x/g;

            regex.lastIndex = '3';
            expect(utilx.regExpTest(regex, '123x5')).to.be.ok();

            regex.lastIndex = '4';
            expect(utilx.regExpTest(regex, '123x5')).to.not.be.ok();
        });
    });
}());
