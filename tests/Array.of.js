/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.of', function () {
        it('should create correct array from arguments', function () {
            expect(utilx.Array.of(1, null, undefined)).to.eql([1, null, undefined]);
        });
    });
}());
