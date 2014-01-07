/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('noop', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.noop()).to.be(utilx.privateUndefined);
            expect(utilx.noop(1, 2, 3)).to.be(utilx.privateUndefined);
            expect(utilx.isFunction(utilx.noop)).to.be.ok();
        });
    });
}());
