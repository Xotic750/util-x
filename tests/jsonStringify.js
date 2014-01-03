/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('jsonStringify', function () {
        it('should not throw an error in each case', function () {
            //expect(utilx.jsonStringify(null)).to.be('null');
            expect(utilx.jsonStringify(-1)).to.be('-1');
            expect(utilx.jsonStringify(0)).to.be('0');
            expect(utilx.jsonStringify(1)).to.be('1');
            expect(utilx.jsonStringify(false)).to.be('false');
            expect(utilx.jsonStringify(true)).to.be('true');
            //expect(utilx.jsonStringify()).to.be(utilx.privateUndefined);
            //expect(utilx.jsonStringify(utilx.privateUndefined)).to.be(utilx.privateUndefined);
            expect(utilx.jsonStringify('')).to.be('""');
            expect(utilx.jsonStringify('abc')).to.be('"abc"');

            expect(utilx.jsonStringify({
                'A': utilx.privateUndefined,
                'B': null
            })).to.be('{"B":null}');

            expect(utilx.jsonStringify({
                'A': [1, true, false, null, '\u0000\b\n\f\r\t']
            })).to.be('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
        });
    });
}());
