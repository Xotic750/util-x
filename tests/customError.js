/*global require */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test,
        MyError = utilx.customError('MyError'),
        MySyntaxError = utilx.customError('MySyntaxError', SyntaxError);

    function Fn() {
        return;
    }

    test('customError', function (t) {
        t.throws(function () {
            utilx.customError();
        }, TypeError, 'customError');

        t.throws(function () {
            utilx.customError(null);
        }, TypeError, 'customError');

        t.throws(function () {
            utilx.customError('');
        }, SyntaxError, 'customError');

        t.throws(function () {
            utilx.customError('MyError', null);
        }, TypeError, 'customError');

        t.throws(function () {
            utilx.customError('MyError', Fn);
        }, TypeError, 'customError');

        try {
            throw new MyError('test');
        } catch (e) {
            t.strictEqual(MyError.errorToString(e), 'MyError: test', 'customError');
        }

        try {
            throw new MySyntaxError('test');
        } catch (e) {
            t.strictEqual(MySyntaxError.errorToString(e), 'MySyntaxError: test', 'customError');
        }

        t.throws(function () {
            throw new MyError('test');
        }, MyError, 'customError');

        t.throws(function () {
            throw new MySyntaxError('test');
        }, MySyntaxError, 'customError');


        t.strictEqual(new MyError('test').message, 'test', 'customError');
        t.ok(utilx.objectInstanceOf(new MyError('test'), Error), 'customError');
        t.ok(utilx.objectInstanceOf(new MyError('test'), MyError), 'customError');
        t.ok(!utilx.objectInstanceOf(new MyError('test'), SyntaxError), 'customError');
        t.ok(!utilx.objectInstanceOf(new MyError('test'), TypeError), 'customError');

        t.strictEqual(new MySyntaxError('test').message, 'test', 'customError');
        t.ok(utilx.objectInstanceOf(new MySyntaxError('test'), Error), 'customError');
        t.ok(utilx.objectInstanceOf(new MySyntaxError('test'), MySyntaxError), 'customError');
        t.ok(utilx.objectInstanceOf(new MySyntaxError('test'), SyntaxError), 'customError');
        t.ok(!utilx.objectInstanceOf(new MySyntaxError('test'), TypeError), 'customError');

        t.end();
    });
}());
