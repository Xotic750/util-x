/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringTrim', function () {
        var test = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF' +
            'Hello, World!' +
            '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004' +
            '\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

        it('should not throw an error in each case', function () {
            expect(utilx.stringTrim('')).to.be('');
            expect(utilx.stringTrim('     ')).to.be('');
            expect(utilx.stringTrim('x ')).to.be('x');
            expect(utilx.stringTrim(' x')).to.be('x');
            expect(utilx.stringTrim(' x ')).to.be('x');
            expect(utilx.stringTrim('    x x x    ')).to.be('x x x');
        });

        it('trims all ES5 whitespace', function () {
            expect(utilx.stringTrim(test)).to.be('Hello, World!');
            expect(utilx.stringTrim(test).length).to.be(13);
        });
    });
}());
