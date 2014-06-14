/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.ToClassString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.ToClassString()).to.be('[object Undefined]');
            expect(utilx.Object.ToClassString(undefined)).to.be('[object Undefined]');
            expect(utilx.Object.ToClassString(null)).to.be('[object Null]');
            expect(utilx.Object.ToClassString(1)).to.be('[object Number]');
            expect(utilx.Object.ToClassString(true)).to.be('[object Boolean]');
            expect(utilx.Object.ToClassString('x')).to.be('[object String]');
            expect(utilx.Object.ToClassString([1, 2, 3])).to.be('[object Array]');
            expect(utilx.Object.ToClassString(required.returnArgs())).to.be('[object Arguments]');
            expect(utilx.Object.ToClassString({})).to.be('[object Object]');
            expect(utilx.Object.ToClassString(required.noop)).to.be('[object Function]');
            expect(utilx.Object.ToClassString(new RegExp('c'))).to.be('[object RegExp]');
            expect(utilx.Object.ToClassString(new Date())).to.be('[object Date]');
            expect(utilx.Object.ToClassString(new Error('x'))).to.be('[object Error]');
            expect(utilx.Object.ToClassString(Object.prototype)).to.be('[object Object]');
            expect(utilx.Object.ToClassString(Array.prototype)).to.be('[object Array]');
            expect(utilx.Object.ToClassString(Boolean.prototype)).to.be('[object Boolean]');
            expect(utilx.Object.ToClassString(Number.prototype)).to.be('[object Number]');
            expect(utilx.Object.ToClassString(String.prototype)).to.be('[object String]');
            expect(utilx.Object.ToClassString(Error.prototype)).to.be('[object Error]');
            expect(utilx.Object.ToClassString(Date.prototype)).to.be('[object Date]');
            expect(utilx.Object.ToClassString(RegExp.prototype)).to.be('[object RegExp]');
            expect(utilx.Object.ToClassString(Function.prototype)).to.be('[object Function]');
        });
    });
}());
