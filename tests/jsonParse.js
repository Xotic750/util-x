/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('jsonParse', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.jsonParse(null)).to.be(null);
            expect(utilx.jsonParse('-1')).to.be(-1);
            expect(utilx.jsonParse('0')).to.be(0);
            expect(utilx.jsonParse('1')).to.be(1);
            expect(utilx.jsonParse(false)).to.be(false);
            expect(utilx.jsonParse(true)).to.be(true);
            expect(utilx.jsonParse('null')).to.be(null);

            expect(function () {
                utilx.jsonParse();
            }).to.throwException(function (e) {
                console.log(e.name + '\n' + e.message + '\n' + Object.prototype.toString.call(e) + '\n');
                expect(e).to.be.a(Error);
            });

            console.log('#9');
            expect(function () {
                utilx.jsonParse(utilx.privateUndefined);
            }).to.throwException(function (e) {
                console.log(e.name + '\n' + e.message + '\n' + Object.prototype.toString.call(e) + '\n');
                expect(e).to.be.a(Error);
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
