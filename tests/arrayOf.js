/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayOf', function () {
        it('should create correct array from arguments', function () {
            expect(utilx.arrayOf(1, null, utilx.privateUndefined)).to.eql([1, null, utilx.privateUndefined]);
        });
    });
}());
