/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('toObjectFixIndexedAccess', function (t) {
        t.throws(function () {
            utilx.toObjectFixIndexedAccess();
        }, TypeError, 'toObjectFixIndexedAccess');

        t.throws(function () {
            utilx.toObjectFixIndexedAccess(privateUndefined);
        }, TypeError, 'toObjectFixIndexedAccess');

        t.throws(function () {
            utilx.toObjectFixIndexedAccess(null);
        }, TypeError, 'toObjectFixIndexedAccess');

        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(1), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(true), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(''), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess([]), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess({}), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(Object('a')), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(utilx.noop), 'function', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(new Date()), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(utilx.toObjectFixIndexedAccess(new RegExp('c')).toString(), '/c/', 'toObjectFixIndexedAccess');


        t.end();
    });
}());
