/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.replaceAll', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.replaceAll();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.replaceAll(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.replaceAll(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should replace all matches', function () {
            expect(utilx.String.replaceAll('aaa', 'a')).to.be('');
            expect(utilx.String.replaceAll('aaa', 'a', undefined)).to.be('');
            expect(utilx.String.replaceAll('aaa', 'a', null)).to.be('');
            expect(utilx.String.replaceAll('acaacaac', 'ac')).to.be('aa');
            expect(utilx.String.replaceAll('aaa', 'a', 'b')).to.be('bbb');
            expect(utilx.String.replaceAll('acaacaac', 'ac', 'b')).to.be('babab');
            expect(utilx.String.replaceAll('aaa', utilx.Object.ToObject('a'), utilx.Object.ToObject('b'))).to.be('bbb');
            expect(utilx.String.replaceAll('acaacaac', utilx.Object.ToObject('ac'), utilx.Object.ToObject('b'))).to.be('babab');
            expect(utilx.String.replaceAll('aaa', /a/, 'b')).to.be('bbb');
            expect(utilx.String.replaceAll('acaacaac', /ac/, 'b')).to.be('babab');
            expect(utilx.String.replaceAll('aaa', 'a', [])).to.be('');
            expect(utilx.String.replaceAll('aaa', 'a', {})).to.be('');
            expect(utilx.String.replaceAll('aaa', 'a', true)).to.be('');
        });
    });
}());
