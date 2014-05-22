/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isTruthy', function () {
        it('should be truthy in each case', function () {
            expect(utilx.Object.isTruthy(true)).to.be.ok();
            expect(utilx.Object.isTruthy('true')).to.be.ok();
            expect(utilx.Object.isTruthy('false')).to.be.ok();
            expect(utilx.Object.isTruthy('-1')).to.be.ok();
            expect(utilx.Object.isTruthy('0')).to.be.ok();
            expect(utilx.Object.isTruthy('1')).to.be.ok();
            expect(utilx.Object.isTruthy(-1)).to.be.ok();
            expect(utilx.Object.isTruthy(1)).to.be.ok();
            expect(utilx.Object.isTruthy([])).to.be.ok();
            expect(utilx.Object.isTruthy([-1])).to.be.ok();
            expect(utilx.Object.isTruthy([0])).to.be.ok();
            expect(utilx.Object.isTruthy([1])).to.be.ok();
            expect(utilx.Object.isTruthy({})).to.be.ok();
            expect(utilx.Object.isTruthy(utilx.Function.noop)).to.be.ok();
        });

        it('should not be truthy in each case', function () {
            expect(utilx.Object.isTruthy(false)).to.not.be.ok();
            expect(utilx.Object.isTruthy('')).to.not.be.ok();
            expect(utilx.Object.isTruthy(0)).to.not.be.ok();
            expect(utilx.Object.isTruthy()).to.not.be.ok();
            expect(utilx.Object.isTruthy(null)).to.not.be.ok();
        });
    });
}());
