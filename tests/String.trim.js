/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.trim', function () {
        var test = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF' +
            'Hello, World!' +
            '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004' +
            '\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.trim();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.trim(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.trim(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should work with strings', function () {
            expect(utilx.String.trim('')).to.be('');
            expect(utilx.String.trim('     ')).to.be('');
            expect(utilx.String.trim('x ')).to.be('x');
            expect(utilx.String.trim(' x')).to.be('x');
            expect(utilx.String.trim(' x ')).to.be('x');
            expect(utilx.String.trim('    x x x    ')).to.be('x x x');
            expect(utilx.String.trim(Object(''))).to.be('');
            expect(utilx.String.trim(Object('     '))).to.be('');
            expect(utilx.String.trim(Object('x '))).to.be('x');
            expect(utilx.String.trim(Object(' x'))).to.be('x');
            expect(utilx.String.trim(Object(' x '))).to.be('x');
            expect(utilx.String.trim(Object('    x x x    '))).to.be('x x x');
        });

        it('should work with numbers', function () {
            expect(utilx.String.trim(1234567890)).to.be('1234567890');
            expect(utilx.String.trim(Object(1234567890))).to.be('1234567890');
        });

        it('trims all ES5 whitespace', function () {
            expect(utilx.String.trim(test)).to.be('Hello, World!');
            expect(utilx.String.trim(test).length).to.be(13);
            expect(utilx.String.trim(Object(test))).to.be('Hello, World!');
            expect(utilx.String.trim(Object(test)).length).to.be(13);
        });
    });
}());
