/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectDefineProperty', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.objectDefineProperty();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty({}, 'foo');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty({}, 'foo', utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty({}, 'foo', null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty({}, 'foo', true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectDefineProperty({}, 'foo', 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error definining properties on plain objects', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: 1,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(1);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(true);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: '',
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be('');
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: {},
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql({});
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: [],
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql([]);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: utilx.noop,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.noop);
            }).to.not.throwException();
        });

        it('should not throw an error redefinining properties on plain objects', function () {
            expect(function () {
                var obj = {
                    foo: 10
                };

                utilx.objectDefineProperty(obj, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(10);

                utilx.objectDefineProperty(obj, 'foo', {
                    enumerable: false,
                    writable: false,
                    configurable: false
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(10);
            }).to.not.throwException();
        });

        it('should not throw an error definining properties on arrays', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty([], 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([10], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(10);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, '0')).to.be.ok();
                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, '0')).to.be.ok();
                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 0, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 0, {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 0, {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 0)).to.be.ok();
                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1, {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1, {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 1)).to.be.ok();
                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1.1, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 1.1)).to.be.ok();
                expect(obj.length).to.be(0);
                expect(obj[1.1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1.1, {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 1.1)).to.be.ok();
                expect(obj.length).to.be(0);
                expect(obj[1.1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1.1, {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 1.1)).to.be.ok();
                expect(obj.length).to.be(0);
                expect(obj[1.1]).to.be(null);
            }).to.not.throwException();

            /*jshint -W047 */
            expect(function () {
                var obj = utilx.objectDefineProperty([], 1., {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1., {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], 1., {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '1.', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '1.', {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '1.', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '1.', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(true);
            }).to.not.throwException();
            /*jshint +W047 */
        });

        it('should not throw an error definining properties on functions', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: {},
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql({});
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: [],
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.eql([]);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: '',
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be('');
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(true);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: 1,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(1);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () { return; }, 'foo', {
                    value: utilx.noop,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.noop);
            }).to.not.throwException();
        });
    });
}());
