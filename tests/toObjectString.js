/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    function returnArgs() {
        return arguments;
    }

    test('toObjectString', function (t) {
        t.strictEqual(utilx.toObjectString(), '[object Undefined]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(privateUndefined), '[object Undefined]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(null), '[object Null]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(1), '[object Number]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(true), '[object Boolean]', 'toObjectString');
        t.strictEqual(utilx.toObjectString('x'), '[object String]', 'toObjectString');
        t.strictEqual(utilx.toObjectString([1, 2, 3]), '[object Array]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(returnArgs()), '[object Arguments]', 'toObjectString');
        t.strictEqual(utilx.toObjectString({}), '[object Object]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(utilx.noop), '[object Function]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(new RegExp('c')), '[object RegExp]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(new Date()), '[object Date]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(new Error('x')), '[object Error]', 'toObjectString');

        t.end();
    });
}());
