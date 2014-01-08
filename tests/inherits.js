/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
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

            try {
                expect(Object.getOwnPropertyDescriptor(Tested.prototype))
                    .to.eql(Object.getOwnPropertyDescriptor(Test.prototype));

                expect(Object.getOwnPropertyDescriptor(Tested.prototype.flum))
                    .to.eql(Object.getOwnPropertyDescriptor(Test.prototype.flum));

                expect(Object.getOwnPropertyDescriptor(Tested.prototype.wiz))
                    .to.eql(Object.getOwnPropertyDescriptor(Test.prototype.wiz));
            } catch (e) {
                expect(Object.getOwnPropertyDescriptor).to.be(utilx.privateUndefined);
            }
        });
    });
}());
