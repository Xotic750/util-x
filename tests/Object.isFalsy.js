/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isFalsy', function () {
        it('should be falsy in each case', function () {
            expect(utilx.Object.isFalsy(false)).to.be.ok();
            expect(utilx.Object.isFalsy('')).to.be.ok();
            expect(utilx.Object.isFalsy(0)).to.be.ok();
            expect(utilx.Object.isFalsy()).to.be.ok();
            expect(utilx.Object.isFalsy(null)).to.be.ok();
        });

        it('should not be falsy in each case', function () {
            expect(utilx.Object.isFalsy(true)).to.not.be.ok();
            expect(utilx.Object.isFalsy('true')).to.not.be.ok();
            expect(utilx.Object.isFalsy('false')).to.not.be.ok();
            expect(utilx.Object.isFalsy('-1')).to.not.be.ok();
            expect(utilx.Object.isFalsy('0')).to.not.be.ok();
            expect(utilx.Object.isFalsy('1')).to.not.be.ok();
            expect(utilx.Object.isFalsy(-1)).to.not.be.ok();
            expect(utilx.Object.isFalsy(1)).to.not.be.ok();
            expect(utilx.Object.isFalsy([])).to.not.be.ok();
            expect(utilx.Object.isFalsy([-1])).to.not.be.ok();
            expect(utilx.Object.isFalsy([0])).to.not.be.ok();
            expect(utilx.Object.isFalsy([1])).to.not.be.ok();
            expect(utilx.Object.isFalsy({})).to.not.be.ok();
            expect(utilx.Object.isFalsy(utilx.Function.noop)).to.not.be.ok();
        });
    });
}());
