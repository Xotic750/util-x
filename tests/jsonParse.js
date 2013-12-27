/*global require */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('jsonParse', function (t) {
        t.strictEqual(utilx.jsonParse(null), null, 'jsonParse');
        t.strictEqual(utilx.jsonParse('-1'), -1, 'jsonParse');
        t.strictEqual(utilx.jsonParse('0'), 0, 'jsonParse');
        t.strictEqual(utilx.jsonParse('1'), 1, 'jsonParse');
        t.strictEqual(utilx.jsonParse(false), false, 'jsonParse');
        t.strictEqual(utilx.jsonParse(true), true, 'jsonParse');
        t.strictEqual(utilx.jsonParse('null'), null, 'jsonParse');

        t.throws(function () {
            utilx.jsonParse();
        }, SyntaxError, 'jsonParse');

        t.throws(function () {
            utilx.jsonParse(utilx.privateUndefined);
        }, SyntaxError, 'jsonParse');

        t.throws(function () {
            utilx.jsonParse('');
        }, SyntaxError, 'jsonParse');

        t.throws(function () {
            utilx.jsonParse('01');
        }, SyntaxError, 'jsonParse');

        t.throws(function () {
            utilx.jsonParse('"\t"');
        }, SyntaxError, 'jsonParse');

        t.throws(function () {
            utilx.jsonParse('{"A": undefined}');
        }, SyntaxError, 'jsonParse');

        t.deepEqual(utilx.jsonParse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'), {
            'A': [1, true, false, null, '\u0000\b\n\f\r\t']
        }, 'jsonParse');

        t.end();
    });
}());
