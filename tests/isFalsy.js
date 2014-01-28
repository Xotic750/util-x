/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isFalsy', function () {
        it('should be falsy in each case', function () {
            expect(utilx.isFalsy(false)).to.be.ok();
            expect(utilx.isFalsy('')).to.be.ok();
            expect(utilx.isFalsy(0)).to.be.ok();
            expect(utilx.isFalsy()).to.be.ok();
            expect(utilx.isFalsy(null)).to.be.ok();
        });

        it('should not be falsy in each case', function () {
            expect(utilx.isFalsy(true)).to.not.be.ok();
            expect(utilx.isFalsy('true')).to.not.be.ok();
            expect(utilx.isFalsy('false')).to.not.be.ok();
            expect(utilx.isFalsy('-1')).to.not.be.ok();
            expect(utilx.isFalsy('0')).to.not.be.ok();
            expect(utilx.isFalsy('1')).to.not.be.ok();
            expect(utilx.isFalsy(-1)).to.not.be.ok();
            expect(utilx.isFalsy(1)).to.not.be.ok();
            expect(utilx.isFalsy([])).to.not.be.ok();
            expect(utilx.isFalsy([-1])).to.not.be.ok();
            expect(utilx.isFalsy([0])).to.not.be.ok();
            expect(utilx.isFalsy([1])).to.not.be.ok();
            expect(utilx.isFalsy({})).to.not.be.ok();
            expect(utilx.isFalsy(utilx.noop)).to.not.be.ok();
        });
    });
}());
