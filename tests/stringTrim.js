/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringTrim', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.stringTrim('')).to.be('');
            expect(utilx.stringTrim('     ')).to.be('');
            expect(utilx.stringTrim('x ')).to.be('x');
            expect(utilx.stringTrim(' x')).to.be('x');
            expect(utilx.stringTrim(' x ')).to.be('x');
            expect(utilx.stringTrim('    x x x    ')).to.be('x x x');
        });
    });
}());
