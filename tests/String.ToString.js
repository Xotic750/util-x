/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.ToString', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.ToString()).to.be('undefined');
            expect(utilx.String.ToString(undefined)).to.be('undefined');
            expect(utilx.String.ToString(null)).to.be('null');
            expect(utilx.String.ToString(1)).to.be('1');
            expect(utilx.String.ToString(true)).to.be('true');
            expect(utilx.String.ToString('x')).to.be('x');
            expect(utilx.String.ToString([1, 2, 3])).to.be('1,2,3');
            expect(utilx.String.ToString({})).to.be('[object Object]');
            expect(utilx.String.ToString(utilx.Function.noop)).to.be(utilx.Function.noop.toString());
            expect(utilx.String.ToString(new RegExp('c'))).to.be('/c/');
            expect(utilx.String.ToString(NaN)).to.be('NaN');
            expect(utilx.String.ToString(Infinity)).to.be('Infinity');
            expect(utilx.String.ToString(-Infinity)).to.be('-Infinity');
        });
    });
}());
