/*global require */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    function Test() {
        return;
    }

    utilx.objectDefineProperties(Test.prototype, {
        foo: {
            value: '123'
        },

        bar: {
            value: utilx.noop
        }
    });

    utilx.objectDefineProperty(Test.prototype, 'flum', {
        value: new Date()
    });

    utilx.objectDefineProperty(Test.prototype, 'wiz', {
        value: new RegExp('x'),
        writable: true,
        enumerable: true,
        configurable: true
    });

    function Tested() {
        return;
    }

    utilx.inherits(Tested, Test);

    test('inherits', function (t) {
        t.notStrictEqual(Tested.prototype, Test.prototype, 'inherits');
        t.strictEqual(Tested.prototype.foo, Test.prototype.foo, 'inherits');
        t.strictEqual(Tested.prototype.bar, Test.prototype.bar, 'inherits');
        t.strictEqual(Tested.prototype.flum, Test.prototype.flum, 'inherits');
        t.strictEqual(Tested.prototype.wiz, Test.prototype.wiz, 'inherits');
        t.strictEqual(Tested.prototype.constructor, Tested, 'inherits');
        t.deepEqual(utilx.objectGetOwnPropertyDescriptor(Tested.prototype), utilx.objectGetOwnPropertyDescriptor(Test.prototype), 'inherits');
        t.deepEqual(utilx.objectGetOwnPropertyDescriptor(Tested.prototype.flum), utilx.objectGetOwnPropertyDescriptor(Test.prototype.flum), 'inherits');
        t.deepEqual(utilx.objectGetOwnPropertyDescriptor(Tested.prototype.wiz), utilx.objectGetOwnPropertyDescriptor(Test.prototype.wiz), 'inherits');

        t.end();
    });
}());
