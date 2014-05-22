/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.truncate', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.String.truncate()).to.be('undefined');
            expect(utilx.String.truncate(undefined, 5)).to.be('undef');
            expect(utilx.String.truncate('null', -1)).to.be('null');
            expect(utilx.String.truncate(null, 2)).to.be('nu');
            expect(utilx.String.truncate('-1', 1)).to.be('-');
            expect(utilx.String.truncate('0', 0)).to.be('');
            expect(utilx.String.truncate('1', 2)).to.be('1');
            expect(utilx.String.truncate(false, 4)).to.be('fals');
            expect(utilx.String.truncate(true, 4)).to.be('true');
            expect(utilx.String.truncate('null', -1)).to.be('null');
            expect(utilx.String.truncate('null', -Infinity)).to.be('null');
            expect(utilx.String.truncate('null', NaN)).to.be('null');
            expect(utilx.String.truncate('null', Infinity)).to.be('null');
            expect(utilx.String.truncate(undefined, '5')).to.be('undef');
            expect(utilx.String.truncate(undefined, '-Infinity')).to.be('undefined');
            expect(utilx.String.truncate(undefined, 'NaN')).to.be('undefined');
            expect(utilx.String.truncate(undefined, 'Infinity')).to.be('undefined');
            expect(utilx.String.truncate(undefined, 'a')).to.be('undefined');
        });
    });
}());
