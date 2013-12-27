/*global require */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test,
        MyError = utilx.customError('MyError');

    test('customError', function (t) {
        t.throws(function () {
            throw new MyError('test');
        }, MyError, 'customError');

        t.strictEqual(new MyError('test').message, 'test', 'customError');
        t.ok(utilx.objectInstanceOf(new MyError('test'), Error), 'customError');
        t.ok(utilx.objectInstanceOf(new MyError('test'), MyError), 'customError');
        t.ok(!utilx.objectInstanceOf(new MyError('test'), TypeError), 'customError');

        t.end();
    });
}());
