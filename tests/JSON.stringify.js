/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('JSON.stringify', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.JSON.stringify(null)).to.be('null');
            expect(utilx.JSON.stringify(-1)).to.be('-1');
            expect(utilx.JSON.stringify(0)).to.be('0');
            expect(utilx.JSON.stringify(1)).to.be('1');
            expect(utilx.JSON.stringify(false)).to.be('false');
            expect(utilx.JSON.stringify(true)).to.be('true');
            expect(utilx.JSON.stringify()).to.be(undefined);
            expect(utilx.JSON.stringify(undefined)).to.be(undefined);
            expect(utilx.JSON.stringify('')).to.be('""');
            expect(utilx.JSON.stringify('abc')).to.be('"abc"');

            expect(utilx.JSON.stringify({
                'A': undefined,
                'B': null
            })).to.be('{"B":null}');

            expect(utilx.JSON.stringify({
                'A': [1, true, false, null, '\u0000\b\n\f\r\t']
            })).to.be('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
        });
    });
}());
