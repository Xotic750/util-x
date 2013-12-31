/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringTruncate', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.stringTruncate()).to.be('undefined');
            expect(utilx.stringTruncate(utilx.privateUndefined, 5)).to.be('undef');
            expect(utilx.stringTruncate('null', -1)).to.be('null');
            expect(utilx.stringTruncate(null, 2)).to.be('nu');
            expect(utilx.stringTruncate('-1', 1)).to.be('-');
            expect(utilx.stringTruncate('0', 0)).to.be('');
            expect(utilx.stringTruncate('1', 2)).to.be('1');
            expect(utilx.stringTruncate(false, 4)).to.be('fals');
            expect(utilx.stringTruncate(true, 4)).to.be('true');
            expect(utilx.stringTruncate('null', -1)).to.be('null');
            expect(utilx.stringTruncate('null', -Infinity)).to.be('null');
            expect(utilx.stringTruncate('null', NaN)).to.be('null');
            expect(utilx.stringTruncate('null', Infinity)).to.be('null');
            expect(utilx.stringTruncate(utilx.privateUndefined, '5')).to.be('undef');
            expect(utilx.stringTruncate(utilx.privateUndefined, '-Infinity')).to.be('undefined');
            expect(utilx.stringTruncate(utilx.privateUndefined, 'NaN')).to.be('undefined');
            expect(utilx.stringTruncate(utilx.privateUndefined, 'Infinity')).to.be('undefined');
            expect(utilx.stringTruncate(utilx.privateUndefined, 'a')).to.be('undefined');
        });
    });
}());
