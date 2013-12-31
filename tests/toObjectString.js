/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    describe('toObjectString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toObjectString()).to.be('[object Undefined]');
            expect(utilx.toObjectString(privateUndefined)).to.be('[object Undefined]');
            expect(utilx.toObjectString(null)).to.be('[object Null]');
            expect(utilx.toObjectString(1)).to.be('[object Number]');
            expect(utilx.toObjectString(true)).to.be('[object Boolean]');
            expect(utilx.toObjectString('x')).to.be('[object String]');
            expect(utilx.toObjectString([1, 2, 3])).to.be('[object Array]');
            expect(utilx.toObjectString(returnArgs())).to.be('[object Arguments]');
            expect(utilx.toObjectString({})).to.be('[object Object]');
            expect(utilx.toObjectString(utilx.noop)).to.be('[object Function]');
            expect(utilx.toObjectString(new RegExp('c'))).to.be('[object RegExp]');
            expect(utilx.toObjectString(new Date())).to.be('[object Date]');
            expect(utilx.toObjectString(new Error('x'))).to.be('[object Error]');
        });
    });
}());
