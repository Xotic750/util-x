/*global require, describe, it */

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

            try {
                utilx.jsonParse();
            } catch (e) {
                expect(utilx.objectInstanceOf(e, SyntaxError)).to.be(true);
            }

            try {
                utilx.jsonParse(utilx.privateUndefined);
            } catch (e) {
                expect(utilx.objectInstanceOf(e, SyntaxError)).to.be(true);
            }

            try {
                utilx.jsonParse('');
            } catch (e) {
                expect(utilx.objectInstanceOf(e, SyntaxError)).to.be(true);
            }

            try {
                utilx.jsonParse('{"A": undefined}');
            } catch (e) {
                expect(utilx.objectInstanceOf(e, SyntaxError)).to.be(true);
            }

            expect(utilx.jsonParse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}')).to.eql({
                'A': [1, true, false, null, '\u0000\b\n\f\r\t']
            });
        });
    });
}());
