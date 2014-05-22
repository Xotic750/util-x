/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.clipDuplicates', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.clipDuplicates('')).to.be('');
            expect(utilx.String.clipDuplicates('      ')).to.be(' ');
            expect(utilx.String.clipDuplicates('abc')).to.be('abc');
            expect(utilx.String.clipDuplicates('aabc')).to.be('abc');
            expect(utilx.String.clipDuplicates('abca')).to.be('bca');
            expect(utilx.String.clipDuplicates('aabaacaa')).to.be('bca');
        });
    });
}());
