/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringSplit', function () {
        var test,
            msg;

        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.stringSplit();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringSplit(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringSplit(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.stringSplit('abcdef', '')).to.eql(['a', 'b', 'c', 'd', 'e', 'f']);
            expect(utilx.stringSplit('abcdefabcdefabcdef', 'c')).to.eql(['ab', 'defab', 'defab', 'def']);
            expect(utilx.stringSplit('abcdefabcdefabcdef', new RegExp('c'))).to.eql(['ab', 'defab', 'defab', 'def']);
        });

        test = 'ab';

        it('If "separator" is undefined must return Array with one String - "this" string', function () {
            expect(utilx.stringSplit(test)).to.eql([test]);
            expect(utilx.stringSplit(test, utilx.privateUndefined)).to.eql([test]);
        });

        it('If "separator" is undefined and "limit" set to 0 must return Array[]', function () {
            expect(utilx.stringSplit(test, utilx.privateUndefined, 0)).to.eql([]);
        });

        it('stringSplit() results in [\'\']', function () {
            var txt = '';

            expect(utilx.stringSplit(txt)).to.eql(['']);
        });

        it('stringSplit(/./) results in [\'\']', function () {
            var txt = '',
                rx = new RegExp('.');

            expect(utilx.stringSplit(txt, rx)).to.eql(['']);
        });

        it('stringSplit(/.?/) results in []', function () {
            var txt = '',
                rx = new RegExp('.?');

            expect(utilx.stringSplit(txt, rx)).to.eql([]);
        });

        it('stringSplit(/.??/) results in []', function () {
            var txt = '',
                rx = new RegExp('.??');

            expect(utilx.stringSplit(txt, rx)).to.eql([]);
        });

        it('stringSplit(ab/a*/) results in [\'\', \'b\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /a*/)).to.eql(['', 'b']);
        });

        it('stringSplit(ab/a*?/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /a*?/)).to.eql(['a', 'b']);
        });

        it('stringSplit(ab/(?:ab)/) results in [\'\', \'\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /(?:ab)/)).to.eql(['', '']);
        });

        it('stringSplit(ab/(?:ab)*/) results in [\'\', \'\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /(?:ab)*/)).to.eql(['', '']);
        });

        it('stringSplit(ab/(?:ab)*?/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /(?:ab)*?/)).to.eql(['a', 'b']);
        });

        it('stringSplit(test\'\') results in [\'t\', \'e\', \'s\', \'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, '')).to.eql(['t', 'e', 's', 't']);
        });

        it('stringSplit(test) results in [\'test\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt)).to.eql(['test']);
        });

        it('stringSplit(1111) results in [\'\', \'\', \'\', \'\']', function () {
            var txt = '111';

            expect(utilx.stringSplit(txt, 1)).to.eql(['', '', '', '']);
        });

        it('stringSplit(test/(?:)/, 2) results in [\'t\', \'e\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, 2)).to.eql(['t', 'e']);
        });

        it('stringSplit(test/(?:)/, -1) results in [\'t\', \'e\', \'s\', \'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, -1)).to.eql(['t', 'e', 's', 't']);
        });

        it('stringSplit(test/(?:)/, undefined) results in [\'t\', \'e\', \'s\', \'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, undefined)).to.eql(['t', 'e', 's', 't']);
        });

        it('stringSplit(test/(?:)/, null) results in []', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, null)).to.eql([]);
        });

        it('stringSplit(test/(?:)/, NaN) results in []', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, NaN)).to.eql([]);
        });

        it('stringSplit(test/(?:)/, true) results in [\'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, true)).to.eql(['t']);
        });

        it('stringSplit(test/(?:)/, \'2\') results in [\'t\', \'e\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, '2')).to.eql(['t', 'e']);
        });

        it('stringSplit(test/(?:)/, \'two\') results in []', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(?:)/, 'two')).to.eql([]);
        });

        it('stringSplit(a/-/) results in [\'a\']', function () {
            var txt = 'a';

            expect(utilx.stringSplit(txt, /-/)).to.eql(['a']);
        });

        it('stringSplit(a/-?/) results in [\'a\']', function () {
            var txt = 'a';

            expect(utilx.stringSplit(txt, /-?/)).to.eql(['a']);
        });

        it('stringSplit(a/-??/) results in [\'a\']', function () {
            var txt = 'a';

            expect(utilx.stringSplit(txt, /-??/)).to.eql(['a']);
        });

        it('stringSplit(a/a/) results in [\'\', \'\']', function () {
            var txt = 'a';

            expect(utilx.stringSplit(txt, /a/)).to.eql(['', '']);
        });

        it('stringSplit(a/a?/) results in [\'\', \'\']', function () {
            var txt = 'a';

            expect(utilx.stringSplit(txt, /a?/)).to.eql(['', '']);
        });

        it('stringSplit(a/a??/) results in [\'a\']', function () {
            var txt = 'a';

            expect(utilx.stringSplit(txt, /a??/)).to.eql(['a']);
        });

        it('stringSplit(ab/-/) results in [\'ab\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /-/)).to.eql(['ab']);
        });

        it('stringSplit(ab/-?/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /-?/)).to.eql(['a', 'b']);
        });

        it('stringSplit(ab/-??/) results in [\'a\', \'b\']', function () {
            var txt = 'ab';

            expect(utilx.stringSplit(txt, /-??/)).to.eql(['a', 'b']);
        });

        it('stringSplit(a-b/-/) results in [\'a\', \'b\']', function () {
            var txt = 'a-b';

            expect(utilx.stringSplit(txt, /-/)).to.eql(['a', 'b']);
        });

        it('stringSplit(a-b/-?/) results in [\'a\', \'b\']', function () {
            var txt = 'a-b';

            expect(utilx.stringSplit(txt, /-?/)).to.eql(['a', 'b']);
        });

        it('stringSplit(a-b/-??/) results in [\'a\', \'-\', \'b\']', function () {
            var txt = 'a-b';

            expect(utilx.stringSplit(txt, /-??/)).to.eql(['a', '-', 'b']);
        });

        it('stringSplit(a--b/-/) results in [\'a\', \'\', \'b\']', function () {
            var txt = 'a--b';

            expect(utilx.stringSplit(txt, /-/)).to.eql(['a', '', 'b']);
        });

        it('stringSplit(a--b/-?/) results in [\'a\', \'\', \'b\']', function () {
            var txt = 'a--b';

            expect(utilx.stringSplit(txt, /-?/)).to.eql(['a', '', 'b']);
        });

        it('stringSplit(a--b/-??/) results in [\'a\', \'-\', \'-\', \'b\']', function () {
            var txt = 'a--b';

            expect(utilx.stringSplit(txt, /-??/)).to.eql(['a', '-', '-', 'b']);
        });

        it('stringSplit(/()()/) results in []', function () {
            var txt = '';

            expect(utilx.stringSplit(txt, /()()/)).to.eql([]);
        });

        it('stringSplit(./()()/) results in [\'.\']', function () {
            var txt = '.';

            expect(utilx.stringSplit(txt, /()()/)).to.eql(['.']);
        });

        it('stringSplit(./(.?)(.?)/) results in [\'\', \'.\', \'\', \'\']', function () {
            var txt = '.',
                rx = new RegExp('(.?)(.?)');

            expect(utilx.stringSplit(txt, rx)).to.eql(['', '.', '', '']);
        });

        it('stringSplit(./(.??)(.??)/) results in [\'.\']', function () {
            var txt = '.',
                rx = new RegExp('(.??)(.??)');

            expect(utilx.stringSplit(txt, rx)).to.eql(['.']);
        });

        it('stringSplit(./(.)?(.)?/) results in [\'\', \'.\', undefined, \'\']', function () {
            var txt = '.',
                rx = new RegExp('(.)?(.)?');

            expect(utilx.stringSplit(txt, rx)).to.eql(['', '.', undefined, '']);
        });

        msg = 'stringSplit(\'A<B>bold</B>and<CODE>coded</CODE>\', /<(\\/)?([^<>]+)>/) results in [\'A\', undefined, ' +
            '\'B\', \'bold\', \'/\', \'B\', \'and\', undefined, \'CODE\', \'coded\', \'/\', \'CODE\', \'\']';
        it(msg, function () {
            var txt = 'A<B>bold</B>and<CODE>coded</CODE>',
                rx = new RegExp('<(\\/)?([^<>]+)>');

            expect(utilx.stringSplit(txt, rx))
                .to.eql(['A', undefined, 'B', 'bold', '/', 'B', 'and', undefined, 'CODE', 'coded', '/', 'CODE', '']);
        });

        it('stringSplit(test/(s)*/) results in [\'t\', undefined, \'e\', \'s\', \'t\']', function () {
            var txt = 'tesst';

            expect(utilx.stringSplit(txt, /(s)*/)).to.eql(['t', undefined, 'e', 's', 't']);
        });

        msg = 'stringSplit(\'test\', /(s)*?/) results in [\'t\', undefined, \'e\',' +
            'undefined, \'s\', undefined, \'s\', undefined, \'t\']';
        it(msg, function () {
            var txt = 'tesst';

            expect(utilx.stringSplit(txt, /(s)*?/))
                .to.eql(['t', undefined, 'e', undefined, 's', undefined, 's', undefined, 't']);
        });

        it('stringSplit(test/(s*)/) results in [\'t\', \'\', \'e\', \'ss\', \'t\']', function () {
            var txt = 'tesst';

            expect(utilx.stringSplit(txt, /(s*)/)).to.eql(['t', '', 'e', 'ss', 't']);
        });


        msg = 'stringSplit(\'test\', /(s*?)/) results in [\'t\', \'\', \'e\', \'\', \'s\', \'\', \'s\', \'\', \'t\']';
        it(msg, function () {
            var txt = 'tesst';

            expect(utilx.stringSplit(txt, /(s*?)/)).to.eql(['t', '', 'e', '', 's', '', 's', '', 't']);
        });

        it('stringSplit(test/(?:s)*/) results in [\'t\', \'e\', \'t\']', function () {
            var txt = 'tesst';

            expect(utilx.stringSplit(txt, /(?:s)*/)).to.eql(['t', 'e', 't']);
        });

        it('stringSplit(test/(?=s+)/) results in [\'te\', \'s\', \'st\']', function () {
            var txt = 'tesst';

            expect(utilx.stringSplit(txt, /(?=s+)/)).to.eql(['te', 's', 'st']);
        });

        it('stringSplit(test\'t\') results in [\'\', \'es\', \'\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, 't')).to.eql(['', 'es', '']);
        });

        it('stringSplit(test\'es\') results in [\'t\', \'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, 'es')).to.eql(['t', 't']);
        });

        it('stringSplit(test/t/) results in [\'\', \'es\', \'\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /t/)).to.eql(['', 'es', '']);
        });

        it('stringSplit(test/es/) results in [\'t\', \'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /es/)).to.eql(['t', 't']);
        });

        it('stringSplit(test/(t)/) results in [\'\', \'t\', \'es\', \'t\', \'\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(t)/)).to.eql(['', 't', 'es', 't', '']);
        });

        it('stringSplit(test/(es)/) results in [\'t\', \'es\', \'t\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(es)/)).to.eql(['t', 'es', 't']);
        });

        it('stringSplit(test/(t)(e)(s)(t)/) results in [\'\', \'t\', \'e\', \'s\', \'t\', \'\']', function () {
            var txt = 'test';

            expect(utilx.stringSplit(txt, /(t)(e)(s)(t)/)).to.eql(['', 't', 'e', 's', 't', '']);
        });

        it('stringSplit(./(((.((.??)))))/) results in [\'\', \'.\', \'.\', \'.\', \'\', \'\', \'\']', function () {
            var txt = '.',
                rx = new RegExp('(((.((.??)))))');

            expect(utilx.stringSplit(txt, rx)).to.eql(['', '.', '.', '.', '', '', '']);
        });

        it('stringSplit(./(((((.??)))))/) results in [\'.\']', function () {
            var txt = '.',
                rx = new RegExp('(((((.??)))))');

            expect(utilx.stringSplit(txt, rx)).to.eql(['.']);
        });

        it('stringSplit(a b c d/ /, -(Math.pow(2, 32) - 1)) results in [\'a\']', function () {
            var txt = 'a b c d';

            expect(utilx.stringSplit(txt, / /, -(Math.pow(2, 32) - 1))).to.eql(['a']);
        });

        it('stringSplit(a b c d/ /, Math.pow(2, 32) + 1) results in [\'a\']', function () {
            var txt = 'a b c d';

            expect(utilx.stringSplit(txt, / /, Math.pow(2, 32) + 1)).to.eql(['a']);
        });

        it('stringSplit(a b c d/ /, Infinity) results in []', function () {
            var txt = 'a b c d';

            expect(utilx.stringSplit(txt, / /, Infinity)).to.eql([]);
        });
    });
}());
