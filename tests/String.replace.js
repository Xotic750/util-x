/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.replace', function () {
        var msg;

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.replace();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.replace(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.replace(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should replace the first match only when given a nonglobal regex', function () {
            expect(utilx.String.replace('aaa', /a/, 'b')).to.be('baa');
        });

        it('should replace all matches when given a global regex', function () {
            expect(utilx.String.replace('aaa', /a/g, 'b')).to.be('bbb');
        });

        it('should replace the first match only when given a string as the search pattern', function () {
            expect(utilx.String.replace('aaa', 'a', 'b')).to.be('baa');
        });

        it('should not type convert a string search pattern to a regex', function () {
            expect(utilx.String.replace('aaa', 'a(a)', 'b')).to.be('aaa');
            expect(utilx.String.replace('a(a)a', 'a(a)', 'b')).to.be('ba');
        });

        it('should handle single-digit backreference $1 in the replacement string', function () {
            expect(utilx.String.replace('aaa', /a(a)/, '$1b')).to.be('aba');

            // Backreference to a nonparticipating capturing group
            expect(utilx.String.replace('test', /t|(e)/g, '$1')).to.be('es');
        });

        it('should handle double-digit backreferences $01, $10, and $99 in the replacement string', function () {
            expect(utilx.String.replace('aaa', /a(a)/, '$01b')).to.be('aba');
            expect(utilx.String.replace('aaa', new RegExp('a' + utilx.String.repeat('()', 9) + '(a)'), '$10b'))
                .to.be('aba');
            expect(utilx.String.replace('aaa', new RegExp('a' + utilx.String.repeat('()', 98) + '(a)'), '$99b'))
                .to.be('aba');
        });

        it('should end backreferences in the replacement string after two digits', function () {
            expect(utilx.String.replace('aaa', new RegExp('a' + utilx.String.repeat('()', 99) + '(a)'), '$100b'))
                .to.be('0ba');
        });

        // NOTE: IE < 9 incorrectly treats all occurrences of $ as literal text when performing a
        // replacement based on a search value that is not a regex. Restores the special
        // meaning of $$, $&, etc. for all replacements.

        it('should handle backreference $& in the replacement string', function () {
            expect(utilx.String.replace('aaa', /aa/, '$&b')).to.be('aaba');
            expect(utilx.String.replace('aaa', 'aa', '$&b')).to.be('aaba');
        });

        it('should handle right context token $\' in the replacement string', function () {
            expect(utilx.String.replace('aaa', /aa/, '$\'b')).to.be('aba');
            expect(utilx.String.replace('aaa', 'aa', '$\'b')).to.be('aba');
        });

        it('should handle left context token $` in the replacement string', function () {
            expect(utilx.String.replace('xaaa', /aa/, '$`b')).to.be('xxba');
            expect(utilx.String.replace('xaaa', 'aa', '$`b')).to.be('xxba');
        });

        it('should handle token $$ in the replacement string', function () {
            expect(utilx.String.replace('aaa', /aa/, '$$b')).to.be('$ba');
            expect(utilx.String.replace('aaa', 'aa', '$$b')).to.be('$ba');
        });

        it('should allow a function to generate the replacement', function () {
            expect(utilx.String.replace('aaa', /a/, function () {
                return 'b';
            })).to.be('baa');
            expect(utilx.String.replace('aaa', /a/g, function () {
                return 'b';
            })).to.be('bbb');
            expect(utilx.String.replace('aaa', 'a', function () {
                return 'b';
            })).to.be('baa');
        });

        it('should allow using backreferences with replacement functions', function () {
            expect(utilx.String.replace('aaa', /aa/, function ($0) {
                return $0 + 'b';
            })).to.be('aaba');

            /*jshint -W098 */
            expect(utilx.String.replace('aaa', /a(a)/, function ($0, $1) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return $1 + 'b';
            })).to.be('aba');
            /*jshint +W098 */

            expect(utilx.String.replace('aaa', 'aa', function ($0) {
                return $0 + 'b';
            })).to.be('aaba');
        });

        it('should not substitute tokens returned by replacement functions', function () {
            // Regex search...
            /*jshint -W098 */
            expect(utilx.String.replace('aaa', /a(a)/, function ($0, $1) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return '$1';
            })).to.be('$1a');
            /*jshint +W098 */

            expect(utilx.String.replace('aaa', /a/, function () {
                return '$&';
            })).to.be('$&aa');
        });

        it('should allow using the match position within replacement functions', function () {
            /*jshint -W098 */
            expect(utilx.String.replace('xaaa', /a/, function ($0, pos) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return utilx.String.ToString(pos);
            })).to.be('x1aa');

            expect(utilx.String.replace('xaaa', /a/g, function ($0, pos) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return utilx.String.ToString(pos);
            })).to.be('x123');

            expect(utilx.String.replace('xaaa', /(a)/g, function ($0, $1, pos) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return utilx.String.ToString(pos);
            })).to.be('x123');

            expect(utilx.String.replace('xaaa', 'a', function ($0, pos) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return utilx.String.ToString(pos);
            })).to.be('x1aa');
            /*jshint +W098 */
        });

        it('should allow using the source string within replacement functions', function () {
            /*jshint -W098 */
            expect(utilx.String.replace('xaaa', /a/, function ($0, pos, str) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return str;
            })).to.be('xxaaaaa');

            expect(utilx.String.replace('xaaa', /(a)/, function ($0, $1, pos, str) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return str;
            })).to.be('xxaaaaa');

            expect(utilx.String.replace('xaaa', 'a', function ($0, pos, str) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return str;
            })).to.be('xxaaaaa');
            /*jshint +W098 */
        });

        it('should return string as the typeof the last argument in replacement functions', function () {
            // NOTE: This tests a fix for IE < 9, which doesn't get this correct natively

            /*jshint -W098 */
            expect(utilx.String.replace('100', /0/, function ($0, pos, str) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return typeof str;
            })).to.be('1string0');

            /*jshint -W053 */
            expect(utilx.String.replace(new String('100'), /0/, function ($0, pos, str) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return typeof str;
            })).to.be('1string0');
            /*jshint +W053 */

            expect(utilx.String.replace(100, /0/, function ($0, pos, str) {
                /*jslint unparam: true */
                /*jshint unused: false */
                return typeof str;
            })).to.be('1string0');
            /*jshint +W098 */
        });

        msg = 'should handle nonstring context when using a replacement text token that references the subject text';
        it(msg, function () {
            expect(utilx.String.replace(0, /^/, '$`')).to.be('0');
        });

        it('should not modify the lastIndex of a nonglobal regex', function () {
            var regex = /x/;

            utilx.String.replace('123x567', regex, '_');
            expect(regex.lastIndex).to.be(0);

            regex.lastIndex = 1;
            utilx.String.replace('123x567', regex, '_');
            expect(regex.lastIndex).to.be(1);

            utilx.String.replace('nomatch', regex, '_');
            expect(regex.lastIndex).to.be(1);
        });

        it('should reset the lastIndex of a global regex to 0', function () {
            var regex = /x/g;

            regex.lastIndex = 1;
            utilx.String.replace('123x567', regex, '_');
            expect(regex.lastIndex).to.be(0);

            regex.lastIndex = 1;
            utilx.String.replace('nomatch', regex, '_');
            expect(regex.lastIndex).to.be(0);
        });

        it('should ignore lastIndex when setting the search start position', function () {
            utilx.Array.forEach([/x/, /x/g], function (regex) {
                regex.lastIndex = 5;
                expect(utilx.String.replace('123x567', regex, '_')).to.be('123_567');
            });
        });

        it('should update lastIndex during replacement iterations', function () {
            var regex = /x/g,
                interimLastIndex = 0;

            utilx.String.replace('1x2', regex, function () {
                interimLastIndex = regex.lastIndex;
            });

            expect(interimLastIndex).to.be(2);
        });

        it('should convert any provided nonstring search to a string', function () {
            var values = [{
                target: '10x10',
                search: 10,
                replacement: 'x',
                expected: 'xx10'
            }, {
                target: 'xaaa,ba,b',
                search: ['a', 'b'],
                replacement: 'x',
                expected: 'xaaxa,b'
            }, {
                target: 'undefined',
                search: undefined,
                replacement: 'x',
                expected: 'x'
            }];

            utilx.Array.forEach(values, function (value) {
                expect(utilx.String.replace(value.target, value.search, value.replacement)).to.be(value.expected);
            });

            // Implicit undefined search and replacement
            expect(utilx.String.replace('undefined')).to.be('undefined');
        });

        it('should convert any provided nonstring/nonfunction replacement to a string', function () {
            var values = [{
                target: 'xaaa',
                search: /a/g,
                replacement: 1.1,
                expected: 'x1.11.11.1'
            }, {
                target: 'xaaa',
                search: /a/g,
                replacement: ['a', 'b'],
                expected: 'xa,ba,ba,b'
            }, {
                target: 'x',
                search: /x/,
                replacement: /x/,
                expected: '/x/'
            }, {
                target: 'xaaa',
                search: /a/,
                replacement: undefined,
                expected: 'xundefinedaa'
            }];

            utilx.Array.forEach(values, function (value) {
                expect(utilx.String.replace(value.target, value.search, value.replacement)).to.be(value.expected);
            });

            // Implicit undefined replacement
            expect(utilx.String.replace('xaaa', /a/)).to.be('xundefinedaa');
        });

        it('should convert any nonstring context to a string (except null and undefined)', function () {
            var values = [
                100,
                {},
                true,
                false,
                NaN,
                ['a']
            ];

            utilx.Array.forEach(values, function (value) {
                expect(utilx.String.replace(value, /^/, 'x')).to.be('x' + value);
            });
        });

        /*
        msg = 'should throw an exception when called on null or undefined context, if strict mode is supported';
        it(msg, function () {
            utilx.Array.forEach([null, undefined], function (value) {
                // This doesn't work the same when strict mode isn't supported, because the replace
                // method will be called with the global object (window) as its context, rather
                // than null or undefined
                if (hasStrictMode) {
                    expect(function () {
                        utilx.String.replace(value, /^/, '');
                    }).to.throwException(function (e) {
                        expect(e).to.be.a(TypeError);
                    });
                } else {
                    // Keep the assertion count consistent cross-browser
                    expect(hasStrictMode).to.not.be.ok();
                }
            });
        });
        */
    });
}());
