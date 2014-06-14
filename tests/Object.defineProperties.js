/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.defineProperties', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Object.defineProperties();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties({});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties({}, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties({}, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties({}, true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperties({}, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error definining properties on plain objects', function () {
            var obj = {};

            expect(function () {
                utilx.Object.defineProperties(obj, {
                    foo: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo1: {
                        value: undefined,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo2: {
                        value: null,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo3: {
                        value: 1,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    }
                });
            }).to.not.throwException();

            expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
            expect(obj.foo).to.be(undefined);
            expect(utilx.Object.hasOwn(obj, 'foo1')).to.be.ok();
            expect(obj.foo1).to.be(undefined);
            expect(utilx.Object.hasOwn(obj, 'foo2')).to.be.ok();
            expect(obj.foo2).to.be(null);
            expect(utilx.Object.hasOwn(obj, 'foo3')).to.be.ok();
            expect(obj.foo3).to.be(1);
        });

        it('should not throw an error redefinining properties on plain objects', function () {
            var obj = {
                foo: 10,
                foo1: true,
                foo2: 'x'
            };

            expect(function () {
                utilx.Object.defineProperties(obj, {
                    foo: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo1: {
                        enumerable: false,
                        writable: false,
                        configurable: false
                    },

                    foo2: {
                        enumerable: false,
                        writable: false,
                        configurable: false
                    }
                });
            }).to.not.throwException();

            expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
            expect(obj.foo).to.be(10);
            expect(utilx.Object.hasOwn(obj, 'foo1')).to.be.ok();
            expect(obj.foo1).to.be(true);
            expect(utilx.Object.hasOwn(obj, 'foo2')).to.be.ok();
            expect(obj.foo2).to.be('x');
        });

        it('should not throw an error redefinining elements on arrays', function () {
            var obj = [10, true, 'x'];

            expect(function () {
                utilx.Object.defineProperties(obj, {
                    0: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    1: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    2: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    }
                });
            }).to.not.throwException();

            expect(obj.length).to.be(3);
            expect(obj[0]).to.be(10);
            expect(obj[1]).to.be(true);
            expect(obj[2]).to.be('x');
        });

        it('should not throw an error definining elements/properties on arrays', function () {
            var obj = [];

            expect(function () {
                utilx.Object.defineProperties(obj, {
                    0: {
                        value: 10,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    1: {
                        value: true,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    2: {
                        value: 'x',
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo: {
                        value: required.noop,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    }
                });
            }).to.not.throwException();

            expect(obj.length).to.be(3);
            expect(obj[0]).to.be(10);
            expect(obj[1]).to.be(true);
            expect(obj[2]).to.be('x');
            expect(obj.foo).to.be(required.noop);
        });

        it('should not throw an error definining properties on functions', function () {
            var obj = function () {
                return;
            };

            expect(function () {
                utilx.Object.defineProperties(obj, {
                    foo: {
                        value: 10,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo1: {
                        value: true,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo2: {
                        value: 'x',
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo3: {
                        value: required.noop,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    }
                });
            }).to.not.throwException();

            expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
            expect(obj.foo).to.be(10);
            expect(utilx.Object.hasOwn(obj, 'foo1')).to.be.ok();
            expect(obj.foo1).to.be(true);
            expect(utilx.Object.hasOwn(obj, 'foo2')).to.be.ok();
            expect(obj.foo2).to.be('x');
            expect(utilx.Object.hasOwn(obj, 'foo3')).to.be.ok();
            expect(obj.foo3).to.be(required.noop);
        });

        it('should not throw an error redefinining properties on functions', function () {
            var obj = function () {
                return;
            };

            obj.foo = 10;
            obj.foo1 = true;
            obj.foo2 = 'x';
            obj.foo3 = required.noop;

            expect(function () {
                utilx.Object.defineProperties(obj, {
                    foo: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo1: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo2: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    },

                    foo3: {
                        enumerable: true,
                        writable: true,
                        configurable: true
                    }
                });
            }).to.not.throwException();

            expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
            expect(obj.foo).to.be(10);
            expect(utilx.Object.hasOwn(obj, 'foo1')).to.be.ok();
            expect(obj.foo1).to.be(true);
            expect(utilx.Object.hasOwn(obj, 'foo2')).to.be.ok();
            expect(obj.foo2).to.be('x');
            expect(utilx.Object.hasOwn(obj, 'foo3')).to.be.ok();
            expect(obj.foo3).to.be(required.noop);
        });
    });
}());
