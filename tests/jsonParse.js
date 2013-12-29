/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('jsonParse', function () {
        it('should not throw an error in each case', function () {
            console.log('#1');
            expect(utilx.jsonParse(null)).to.be(null);
            console.log('#2');
            expect(utilx.jsonParse('-1')).to.be(-1);
            console.log('#3');
            expect(utilx.jsonParse('0')).to.be(0);
            console.log('#4');
            expect(utilx.jsonParse('1')).to.be(1);
            console.log('#5');
            expect(utilx.jsonParse(false)).to.be(false);
            console.log('#6');
            expect(utilx.jsonParse(true)).to.be(true);
            console.log('#7');
            expect(utilx.jsonParse('null')).to.be(null);

            console.log('#8');
            expect(function () {
                utilx.jsonParse();
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            console.log('#9');
            expect(function () {
                utilx.jsonParse(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            console.log('#10');
            expect(function () {
                utilx.jsonParse('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            console.log('#11');
            expect(function () {
                utilx.jsonParse('{"A": undefined}');
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            console.log('#12');
            expect(utilx.jsonParse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}')).to.eql({
                'A': [1, true, false, null, '\u0000\b\n\f\r\t']
            });
        });
    });
}());
