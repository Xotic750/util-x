/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isTruthy', function () {
        it('should be truthy in each case', function () {
            expect(utilx.isTruthy(true)).to.be.ok();
            expect(utilx.isTruthy('true')).to.be.ok();
            expect(utilx.isTruthy('false')).to.be.ok();
            expect(utilx.isTruthy('-1')).to.be.ok();
            expect(utilx.isTruthy('0')).to.be.ok();
            expect(utilx.isTruthy('1')).to.be.ok();
            expect(utilx.isTruthy(-1)).to.be.ok();
            expect(utilx.isTruthy(1)).to.be.ok();
            expect(utilx.isTruthy([])).to.be.ok();
            expect(utilx.isTruthy([-1])).to.be.ok();
            expect(utilx.isTruthy([0])).to.be.ok();
            expect(utilx.isTruthy([1])).to.be.ok();
            expect(utilx.isTruthy({})).to.be.ok();
            expect(utilx.isTruthy(utilx.noop)).to.be.ok();
        });

        it('should not be truthy in each case', function () {
            expect(utilx.isTruthy(false)).to.not.be.ok();
            expect(utilx.isTruthy('')).to.not.be.ok();
            expect(utilx.isTruthy(0)).to.not.be.ok();
            expect(utilx.isTruthy()).to.not.be.ok();
            expect(utilx.isTruthy(null)).to.not.be.ok();
        });
    });
}());
