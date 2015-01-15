/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.defineProperty', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Object.defineProperty();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty({}, 'foo');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty({}, 'foo', undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty({}, 'foo', null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty({}, 'foo', true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.defineProperty({}, 'foo', 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error definining properties on plain objects', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: 1,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(1);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(true);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: '',
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be('');
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: {},
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql({});
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: [],
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql([]);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty({}, 'foo', {
                    value: required.noop,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(required.noop);
            }).to.not.throwException();
        });

        it('should not throw an error redefinining properties on plain objects', function () {
            expect(function () {
                var obj = {
                    foo: 10
                };

                utilx.Object.defineProperty(obj, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(10);

                utilx.Object.defineProperty(obj, 'foo', {
                    enumerable: false,
                    writable: false,
                    configurable: false
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(10);
            }).to.not.throwException();
        });

        it('should not throw an error redefinining elements on arrays', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty([10], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(10);
            }).to.not.throwException();
        });

        it('should not throw an error definining properties on arrays', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    value: 1,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(1);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(true);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    value: '',
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be('');
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 'foo', {
                    value: required.noop,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(required.noop);
            }).to.not.throwException();
        });

        it('should not throw an error definining elements on arrays using integer strings', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty([], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '0', {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '0', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, '0')).to.be.ok();
                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '0', {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '0', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, '0')).to.be.ok();
                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(null);
            }).to.not.throwException();
        });

        it('should not throw an error definining elements on arrays using integer numbers', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty([], 0, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 0, {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 0, {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 0)).to.be.ok();
                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1, {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1, {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 1)).to.be.ok();
                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(null);
            }).to.not.throwException();
        });

        it('should not throw an error definining elements on arrays using float numbers', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty([], 1.1, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 1.1)).to.be.ok();
                expect(obj.length).to.be(0);
                expect(obj[1.1]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1.1, {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 1.1)).to.be.ok();
                expect(obj.length).to.be(0);
                expect(obj[1.1]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1.1, {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 1.1)).to.be.ok();
                expect(obj.length).to.be(0);
                expect(obj[1.1]).to.be(null);
            }).to.not.throwException();
        });

        it('should not throw an error definining elements on arrays using trailing point numbers', function () {
            /*jshint -W047 */
            expect(function () {
                var obj = utilx.Object.defineProperty([], 1., {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1., {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], 1., {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(null);
            }).to.not.throwException();
        });

        it('should not throw an error definining elements on arrays using trailing point numbers strings', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty([], '1.', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(0);
                expect(obj['1.']).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '1.', {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(0);
                expect(obj['1.']).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '1.', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(0);
                expect(obj['1.']).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty([], '1.', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(0);
                expect(obj['1.']).to.be(true);
            }).to.not.throwException();
            /*jshint +W047 */
        });

        it('should not throw an error definining properties on functions', function () {
            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: undefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(undefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: {},
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql({});
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: [],
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql([]);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: '',
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be('');
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(true);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: 1,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(1);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.Object.defineProperty(function () { return; }, 'foo', {
                    value: required.noop,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.Object.hasOwn(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(required.noop);
            }).to.not.throwException();
        });
    });
}());
