/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.returnArgs', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isArguments(utilx.Function.returnArgs())).to.be.ok();
            expect(utilx.Array.slice(utilx.Function.returnArgs())).to.eql([]);
            expect(utilx.Array.slice(utilx.Function.returnArgs(1, 2, 3))).to.eql([1, 2, 3]);
            expect(utilx.Array.slice(utilx.Function.returnArgs(required.noop))).to.eql([required.noop]);
        });
    });
}());
