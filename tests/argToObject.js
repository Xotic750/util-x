/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('argToObject', function (t) {
        t.throws(function () {
            utilx.argToObject();
        }, TypeError, 'argToObject');

        t.throws(function () {
            utilx.argToObject(privateUndefined);
        }, TypeError, 'argToObject');

        t.throws(function () {
            utilx.argToObject(null);
        }, TypeError, 'argToObject');

        t.strictEqual(typeof utilx.argToObject(1), 'object', 'argToObject');
        t.strictEqual(typeof utilx.argToObject(true), 'object', 'argToObject');
        t.strictEqual(typeof utilx.argToObject(''), 'object', 'argToObject');
        t.strictEqual(typeof utilx.argToObject([]), 'object', 'argToObject');
        t.strictEqual(typeof utilx.argToObject({}), 'object', 'argToObject');
        t.strictEqual(typeof utilx.argToObject(Object('a')), 'object', 'argToObject');
        t.strictEqual(typeof utilx.argToObject(utilx.noop), 'function', 'argToObject');
        t.strictEqual(typeof utilx.argToObject(new Date()), 'object', 'argToObject');
        t.strictEqual(utilx.argToObject(new RegExp('c')).toString(), '/c/', 'argToObject');


        t.end();
    });
}());
