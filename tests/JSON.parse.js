/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('JSON.parse', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.JSON.parse(null)).to.be(null);
            expect(utilx.JSON.parse('-1')).to.be(-1);
            expect(utilx.JSON.parse('0')).to.be(0);
            expect(utilx.JSON.parse('1')).to.be(1);
            expect(utilx.JSON.parse(false)).to.be(false);
            expect(utilx.JSON.parse(true)).to.be(true);
            expect(utilx.JSON.parse('null')).to.be(null);

            expect(function () {
                utilx.JSON.parse();
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.JSON.parse(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.JSON.parse('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.JSON.parse('{"A": undefined}');
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(utilx.JSON.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}')).to.eql({
                'A': [1, true, false, null, '\u0000\b\n\f\r\t']
            });
        });
    });
}());
