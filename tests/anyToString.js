/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('anyToString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.anyToString()).to.be('undefined');
            expect(utilx.anyToString(privateUndefined)).to.be('undefined');
            expect(utilx.anyToString(null)).to.be('null');
            expect(utilx.anyToString(1)).to.be('1');
            expect(utilx.anyToString(true)).to.be('true');
            expect(utilx.anyToString('x')).to.be('x');
            expect(utilx.anyToString([1, 2, 3])).to.be('1,2,3');
            expect(utilx.anyToString({})).to.be('[object Object]');
            expect(utilx.anyToString(utilx.noop)).to.be(utilx.noop.toString());
            expect(utilx.anyToString(new RegExp('c'))).to.be('/c/');
        });
    });
}());
