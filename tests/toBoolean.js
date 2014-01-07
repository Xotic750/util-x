/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toBoolean', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toBoolean(true)).to.be.ok();
            expect(utilx.toBoolean(false)).to.not.be.ok();
            expect(utilx.toBoolean('true')).to.be.ok();
            expect(utilx.toBoolean('false')).to.be.ok();
            expect(utilx.toBoolean('-1')).to.be.ok();
            expect(utilx.toBoolean('0')).to.be.ok();
            expect(utilx.toBoolean('1')).to.be.ok();
            expect(utilx.toBoolean('')).to.not.be.ok();
            expect(utilx.toBoolean(-1)).to.be.ok();
            expect(utilx.toBoolean(0)).to.not.be.ok();
            expect(utilx.toBoolean(1)).to.be.ok();
            expect(utilx.toBoolean([])).to.be.ok();
            expect(utilx.toBoolean([-1])).to.be.ok();
            expect(utilx.toBoolean([0])).to.be.ok();
            expect(utilx.toBoolean([1])).to.be.ok();
            expect(utilx.toBoolean({})).to.be.ok();
            expect(utilx.toBoolean()).to.not.be.ok();
            expect(utilx.toBoolean(null)).to.not.be.ok();
            expect(utilx.toBoolean(utilx.noop)).to.be.ok();
        });
    });
}());
