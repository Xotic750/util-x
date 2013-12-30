/*global require, describe, it */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect,
        Test,
        Tested;

    describe('inherits', function () {
        it('setting up should not throw an error', function () {
            expect(function () {
                Test = function () {
                    return;
                };

                utilx.objectDefineProperties(Test.prototype, {
                    foo: {
                        value: '123'
                    },

                    bar: {
                        value: utilx.noop
                    },

                    flum: {
                        value: new Date()
                    },

                    wiz: {
                        value: new RegExp('x'),
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }
                });

                Tested = function () {
                    return;
                };

                utilx.inherits(Tested, Test);
            }).to.not.throwException();
        });

        it('should not throw an error in each case', function () {
            expect(Tested.prototype).not.to.be(Test.prototype);
            expect(Tested.prototype.foo).to.be(Test.prototype.foo);
            expect(Tested.prototype.bar).to.be(Test.prototype.bar);
            expect(Tested.prototype.flum).to.be(Test.prototype.flum);
            expect(Tested.prototype.wiz).to.be(Test.prototype.wiz);
            expect(Tested.prototype.constructor).to.be(Tested);

            expect(utilx.objectGetOwnPropertyDescriptor(Tested.prototype))
                .to.eql(utilx.objectGetOwnPropertyDescriptor(Test.prototype));

            expect(utilx.objectGetOwnPropertyDescriptor(Tested.prototype.flum))
                .to.eql(utilx.objectGetOwnPropertyDescriptor(Test.prototype.flum));

            expect(utilx.objectGetOwnPropertyDescriptor(Tested.prototype.wiz))
                .to.eql(utilx.objectGetOwnPropertyDescriptor(Test.prototype.wiz));
        });
    });
}());
