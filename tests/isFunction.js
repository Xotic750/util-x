/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isFunction', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isFunction()).to.not.be.ok();
            expect(utilx.isFunction(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isFunction(null)).to.not.be.ok();
            expect(utilx.isFunction(1)).to.not.be.ok();
            expect(utilx.isFunction(true)).to.not.be.ok();
            expect(utilx.isFunction('')).to.not.be.ok();
            expect(utilx.isFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.isFunction(new Date())).to.not.be.ok();
            expect(utilx.isFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isFunction(utilx.noop)).to.be.ok();
            expect(utilx.isFunction([])).to.not.be.ok();
            expect(utilx.isFunction({})).to.not.be.ok();
            expect(utilx.isFunction(utilx.returnArgs())).to.not.be.ok();
        });
    });
}());
