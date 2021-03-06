/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        //utilx = required.utilx,
        expect = required.expect,
        dontRun = true;

    if (dontRun) {
        return;
    }

    describe('Native string', function () {
        var test,
            msg,
            temp = expect.Assertion.prototype.assert;

        it('SET TO WARNING MODE. THESE ARE FIXABLE', function () {
            expect.Assertion.prototype.assert = expect.Assertion.prototype.assertWarn;
        });

        it('characters should be accessible by index', function () {
            test = 'hej';
            expect(test[0]).to.be('h');
        });

        it('should throw if no arguments', function () {
            expect(function () {
                String.prototype.split.call();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                String.prototype.split.call(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                String.prototype.split.call(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw on basic tests', function () {
            expect(String.prototype.split.call('abcdef', '')).to.eql(['a', 'b', 'c', 'd', 'e', 'f']);
            expect(String.prototype.split.call('abcdefabcdefabcdef', 'c')).to.eql(['ab', 'defab', 'defab', 'def']);
            expect(String.prototype.split.call('abcdefabcdefabcdef', new RegExp('c')))
                                                    .to.eql(['ab', 'defab', 'defab', 'def']);
        });

        test = 'ab';

        it('If "separator" is undefined must return Array with one String - "this" string', function () {
            expect(String.prototype.split.call(test)).to.eql([test]);
            expect(String.prototype.split.call(test, undefined)).to.eql([test]);
        });

        it('If "separator" is undefined and "limit" set to 0 must return Array[]', function () {
            expect(String.prototype.split.call(test, undefined, 0)).to.eql([]);
        });

        it('(\'\') results in [\'\']', function () {
            var txt = '';

            expect(String.prototype.split.call(txt)).to.eql(['']);
        });

        it('(\'\', /./) results in [\'\']', function () {
            var txt = '',
                rx = new RegExp('.');

            expect(String.prototype.split.call(txt, rx)).to.eql(['']);
        });

        it('(\'\', /.?/) results in []', function () {
            var txt = '',
                rx = new RegExp('.?');

            expect(String.prototype.split.call(txt, rx)).to.eql([]);
        });

        it('(\'\', /.??/) results in []', function () {
            var txt = '',
                rx = new RegExp('.??');

            expect(String.prototype.split.call(txt, rx)).to.eql([]);
        });

        it('(\'ab\', /a*/) results in [\'\', \'b\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /a*/)).to.eql(['', 'b']);
        });

        it('(\'ab\', /a*?/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /a*?/)).to.eql(['a', 'b']);
        });

        it('(\'ab\', /(?:ab)/) results in [\'\', \'\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /(?:ab)/)).to.eql(['', '']);
        });

        it('(\'ab\', /(?:ab)*/) results in [\'\', \'\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /(?:ab)*/)).to.eql(['', '']);
        });

        it('(\'ab\', /(?:ab)*?/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /(?:ab)*?/)).to.eql(['a', 'b']);
        });

        it('(\'test\', \'\') results in [\'t\', \'e\', \'s\', \'t\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, '')).to.eql(['t', 'e', 's', 't']);
        });

        it('(\'test\', ) results in [\'test\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt)).to.eql(['test']);
        });

        it('(\'111\', 1) results in [\'\', \'\', \'\', \'\']', function () {
            var txt = '111';

            expect(String.prototype.split.call(txt, 1)).to.eql(['', '', '', '']);
        });

        it('(\'test\', /(?:)/, 2) results in [\'t\', \'e\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, 2)).to.eql(['t', 'e']);
        });

        it('(\'test\', /(?:)/, -1) results in []', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, -1)).to.eql([]);
        });

        it('(\'test\', /(?:)/, undefined) results in [\'t\', \'e\', \'s\', \'t\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, undefined)).to.eql(['t', 'e', 's', 't']);
        });

        it('(\'test\', /(?:)/, null) results in []', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, null)).to.eql([]);
        });

        it('(\'test\', /(?:)/, NaN) results in []', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, NaN)).to.eql([]);
        });

        it('(\'test\', /(?:)/, true) results in [\'t\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, true)).to.eql(['t']);
        });

        it('(\'test\', /(?:)/, \'2\') results in [\'t\', \'e\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, '2')).to.eql(['t', 'e']);
        });

        it('(\'test\', /(?:)/, \'two\') results in []', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(?:)/, 'two')).to.eql([]);
        });

        it('(\'a\', /-/) results in [\'a\']', function () {
            var txt = 'a';

            expect(String.prototype.split.call(txt, /-/)).to.eql(['a']);
        });

        it('(\'a\', /-?/) results in [\'a\']', function () {
            var txt = 'a';

            expect(String.prototype.split.call(txt, /-?/)).to.eql(['a']);
        });

        it('(\'a\', /-??/) results in [\'a\']', function () {
            var txt = 'a';

            expect(String.prototype.split.call(txt, /-??/)).to.eql(['a']);
        });

        it('(\'a\', /a/) results in [\'\', \'\']', function () {
            var txt = 'a';

            expect(String.prototype.split.call(txt, /a/)).to.eql(['', '']);
        });

        it('(\'a\', /a?/) results in [\'\', \'\']', function () {
            var txt = 'a';

            expect(String.prototype.split.call(txt, /a?/)).to.eql(['', '']);
        });

        it('(\'a\', /a??/) results in [\'a\']', function () {
            var txt = 'a';

            expect(String.prototype.split.call(txt, /a??/)).to.eql(['a']);
        });

        it('(\'ab\', /-/) results in [\'ab\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /-/)).to.eql(['ab']);
        });

        it('(\'ab\', /-?/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /-?/)).to.eql(['a', 'b']);
        });

        it('(\'ab\', /-??/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(String.prototype.split.call(txt, /-??/)).to.eql(['a', 'b']);
        });

        it('(\'a-b\', /-/) results in [\'a\', \'b\']', function () {
            var txt = 'a-b';

            expect(String.prototype.split.call(txt, /-/)).to.eql(['a', 'b']);
        });

        it('(\'a-b\', /-?/) results in [\'a\', \'b\']', function () {
            var txt = 'a-b';

            expect(String.prototype.split.call(txt, /-?/)).to.eql(['a', 'b']);
        });

        it('(\'a-b\', /-??/) results in [\'a\', \'-\', \'b\']', function () {
            var txt = 'a-b';

            expect(String.prototype.split.call(txt, /-??/)).to.eql(['a', '-', 'b']);
        });

        it('(\'a--b\', /-/) results in [\'a\', \'\', \'b\']', function () {
            var txt = 'a--b';

            expect(String.prototype.split.call(txt, /-/)).to.eql(['a', '', 'b']);
        });

        it('(\'a--b\', /-?/) results in [\'a\', \'\', \'b\']', function () {
            var txt = 'a--b';

            expect(String.prototype.split.call(txt, /-?/)).to.eql(['a', '', 'b']);
        });

        it('(\'a--b\', /-??/) results in [\'a\', \'-\', \'-\', \'b\']', function () {
            var txt = 'a--b';

            expect(String.prototype.split.call(txt, /-??/)).to.eql(['a', '-', '-', 'b']);
        });

        it('(\'\', /()()/) results in []', function () {
            var txt = '';

            expect(String.prototype.split.call(txt, /()()/)).to.eql([]);
        });

        it('(\'.\', /()()/) results in [\'.\']', function () {
            var txt = '.';

            expect(String.prototype.split.call(txt, /()()/)).to.eql(['.']);
        });

        it('(\'.\', /(.?)(.?)/) results in [\'\', \'.\', \'\', \'\']', function () {
            var txt = '.',
                rx = new RegExp('(.?)(.?)');

            expect(String.prototype.split.call(txt, rx)).to.eql(['', '.', '', '']);
        });

        it('(\'.\', /(.??)(.??)/) results in [\'.\']', function () {
            var txt = '.',
                rx = new RegExp('(.??)(.??)');

            expect(String.prototype.split.call(txt, rx)).to.eql(['.']);
        });

        it('(\'.\', /(.)?(.)?/) results in [\'\', \'.\', undefined, \'\']', function () {
            var txt = '.',
                rx = new RegExp('(.)?(.)?');

            expect(String.prototype.split.call(txt, rx)).to.eql(required.create('', '.', undefined, ''));
        });

        msg = '(\'A<B>bold</B>and<CODE>coded</CODE>\', /<(\\/)?([^<>]+)>/) results in [\'A\', undefined, ' +
            '\'B\', \'bold\', \'/\', \'B\', \'and\', undefined, \'CODE\', \'coded\', \'/\', \'CODE\', \'\']';
        it(msg, function () {
            var txt = 'A<B>bold</B>and<CODE>coded</CODE>',
                rx = new RegExp('<(\\/)?([^<>]+)>');

            expect(String.prototype.split.call(txt, rx))
                .to.eql(required.create(
                    'A',
                    undefined,
                    'B',
                    'bold',
                    '/',
                    'B',
                    'and',
                    undefined,
                    'CODE',
                    'coded',
                    '/',
                    'CODE',
                    ''
                ));
        });

        it('(\'test\', /(s)*/) results in [\'t\', undefined, \'e\', \'s\', \'t\']', function () {
            var txt = 'tesst';

            expect(String.prototype.split.call(txt, /(s)*/)).to.eql(required.create(
                't',
                undefined,
                'e',
                's',
                't'
            ));
        });

        msg = '(\'test\', /(s)*?/) results in [\'t\', undefined, \'e\',' +
            'undefined, \'s\', undefined, \'s\', undefined, \'t\']';
        it(msg, function () {
            var txt = 'tesst';

            expect(String.prototype.split.call(txt, /(s)*?/))
                .to.eql(required.create(
                    't',
                    undefined,
                    'e',
                    undefined,
                    's',
                    undefined,
                    's',
                    undefined,
                    't'
                ));
        });

        it('(\'test\', /(s*)/) results in [\'t\', \'\', \'e\', \'ss\', \'t\']', function () {
            var txt = 'tesst';

            expect(String.prototype.split.call(txt, /(s*)/)).to.eql(['t', '', 'e', 'ss', 't']);
        });


        msg = '(\'test\', /(s*?)/) results in [\'t\', \'\', \'e\', \'\', \'s\', \'\', \'s\', \'\', \'t\']';
        it(msg, function () {
            var txt = 'tesst';

            expect(String.prototype.split.call(txt, /(s*?)/)).to.eql(['t', '', 'e', '', 's', '', 's', '', 't']);
        });

        it('(\'test\', /(?:s)*/) results in [\'t\', \'e\', \'t\']', function () {
            var txt = 'tesst';

            expect(String.prototype.split.call(txt, /(?:s)*/)).to.eql(['t', 'e', 't']);
        });

        it('(\'test\', /(?=s+)/) results in [\'te\', \'s\', \'st\']', function () {
            var txt = 'tesst';

            expect(String.prototype.split.call(txt, /(?=s+)/)).to.eql(['te', 's', 'st']);
        });

        it('(\'test\', \'t\') results in [\'\', \'es\', \'\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, 't')).to.eql(['', 'es', '']);
        });

        it('(\'test\', \'es\') results in [\'t\', \'t\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, 'es')).to.eql(['t', 't']);
        });

        it('(\'test\', /t/) results in [\'\', \'es\', \'\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /t/)).to.eql(['', 'es', '']);
        });

        it('(\'test\', /es/) results in [\'t\', \'t\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /es/)).to.eql(['t', 't']);
        });

        it('(\'test\', /(t)/) results in [\'\', \'t\', \'es\', \'t\', \'\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(t)/)).to.eql(['', 't', 'es', 't', '']);
        });

        it('(\'test\', /(es)/) results in [\'t\', \'es\', \'t\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(es)/)).to.eql(['t', 'es', 't']);
        });

        it('(\'test\', /(t)(e)(s)(t)/) results in [\'\', \'t\', \'e\', \'s\', \'t\', \'\']', function () {
            var txt = 'test';

            expect(String.prototype.split.call(txt, /(t)(e)(s)(t)/)).to.eql(['', 't', 'e', 's', 't', '']);
        });

        it('(\'.\', /(((.((.??)))))/) results in [\'\', \'.\', \'.\', \'.\', \'\', \'\', \'\']', function () {
            var txt = '.',
                rx = new RegExp('(((.((.??)))))');

            expect(String.prototype.split.call(txt, rx)).to.eql(['', '.', '.', '.', '', '', '']);
        });

        it('(\'.\', /(((((.??)))))/) results in [\'.\']', function () {
            var txt = '.',
                rx = new RegExp('(((((.??)))))');

            expect(String.prototype.split.call(txt, rx)).to.eql(['.']);
        });

        it('(\'a b c d\', / /, -(Math.pow(2, 32) - 1)) results in []', function () {
            var txt = 'a b c d';

            expect(String.prototype.split.call(txt, / /, -(Math.pow(2, 32) - 1))).to.eql([]);
        });

        it('(\'a b c d\', / /, Math.pow(2, 32) + 1) results in []', function () {
            var txt = 'a b c d';

            expect(String.prototype.split.call(txt, / /, Math.pow(2, 32) + 1)).to.eql(['a', 'b', 'c', 'd']);
        });

        it('(\'a b c d\', / /, Infinity) results in []', function () {
            var txt = 'a b c d';

            expect(String.prototype.split.call(txt, / /, Infinity)).to.eql(['a', 'b', 'c', 'd']);
        });

        it('RESET TO ERROR MODE', function () {
            expect.Assertion.prototype.assert = temp;
        });
    });
}());
