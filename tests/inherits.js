/*global require, describe, it */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

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

    describe('inherits', function () {
        it('should not throw an error in each case', function () {
            expect(Tested.prototype).not.to.be(Test.prototype);
            expect(Tested.prototype.foo).to.be(Test.prototype.foo);
            expect(Tested.prototype.bar).to.be(Test.prototype.bar);
            expect(Tested.prototype.flum).to.be(Test.prototype.flum);
            expect(Tested.prototype.wiz).to.be(Test.prototype.wiz);
            expect(Tested.prototype.constructor).to.be(Tested);
        });
    });
}());
