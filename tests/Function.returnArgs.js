/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.returnArgs', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isArguments(utilx.Function.returnArgs())).to.be.ok();
            expect(Array.prototype.slice.call(utilx.Function.returnArgs())).to.eql([]);
            expect(Array.prototype.slice.call(utilx.Function.returnArgs(1, 2, 3))).to.eql([1, 2, 3]);
            expect(Array.prototype.slice.call(utilx.Function.returnArgs(utilx.Function.noop))).to.eql([utilx.Function.noop]);
        });
    });
}());
