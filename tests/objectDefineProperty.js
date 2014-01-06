/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectDefineProperty', function () {
        it('should not throw an error in each case', function () {
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

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {});

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: utilx.privateUndefined
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty({}, 'foo', {
                    value: null
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {});

                expect(utilx.objectHasOwnProperty(obj, '0')).to.be.ok();
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    value: utilx.privateUndefined
                });

                expect(utilx.objectHasOwnProperty(obj, '0')).to.be.ok();
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    value: null
                });

                expect(utilx.objectHasOwnProperty(obj, '0')).to.be.ok();
                expect(obj[0]).to.be(null);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () {}, 'foo', {});

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () {}, 'foo', {
                    value: utilx.privateUndefined
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                var obj = utilx.objectDefineProperty(function () {}, 'foo', {
                    value: null
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();
        });
    });
}());
