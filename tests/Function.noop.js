/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.noop', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Function.noop()).to.be(undefined);
            expect(utilx.Function.noop(1, 2, 3)).to.be(undefined);
            expect(utilx.Function.isFunction(utilx.Function.noop)).to.be.ok();
        });
    });
}());
