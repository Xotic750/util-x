/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.wrapInChars', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.wrapInChars('a')).to.be('a');
            expect(utilx.String.wrapInChars('a', undefined)).to.be('a');
            expect(utilx.String.wrapInChars('a', null)).to.be('a');
            expect(utilx.String.wrapInChars('a', '')).to.be('a');
            expect(utilx.String.wrapInChars('a', ' ')).to.be(' a ');
            expect(utilx.String.wrapInChars('a', 1)).to.be('1a1');
            expect(utilx.String.wrapInChars('a', 12)).to.be('12a12');
            expect(utilx.String.wrapInChars('a', -1)).to.be('-1a-1');
            expect(utilx.String.wrapInChars('a', utilx.Object.ToObject(' '))).to.be(' a ');
            expect(utilx.String.wrapInChars('a', utilx.Object.ToObject(1))).to.be('1a1');
            expect(utilx.String.wrapInChars('a', [])).to.be('a');
            expect(utilx.String.wrapInChars('a', {})).to.be('a');
            expect(utilx.String.wrapInChars('a', true)).to.be('a');
            expect(utilx.String.wrapInChars('a', utilx.Object.ToObject(false))).to.be('a');
            expect(utilx.String.wrapInChars('a', 'xyz')).to.be('xyzaxyz');
            expect(utilx.String.wrapInChars('a', '\u0021')).to.be('!a!');
        });
    });
}());
