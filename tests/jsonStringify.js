/*global require */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('jsonStringify', function (t) {
        t.strictEqual(utilx.jsonStringify(null), 'null', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(-1), '-1', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(0), '0', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(1), '1', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(false), 'false', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(true), 'true', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(), utilx.privateUndefined, 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(utilx.privateUndefined), utilx.privateUndefined, 'jsonStringify');
        t.strictEqual(utilx.jsonStringify(''), '""', 'jsonStringify');
        t.strictEqual(utilx.jsonStringify('abc'), '"abc"', 'jsonStringify');


        t.strictEqual(utilx.jsonStringify({
            'A': utilx.privateUndefined,
            'B': null
        }), '{"B":null}', 'jsonStringify');

        t.strictEqual(utilx.jsonStringify({
            'A': [1, true, false, null, '\u0000\b\n\f\r\t']
        }), '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', 'jsonStringify');

        t.end();
    });
}());
