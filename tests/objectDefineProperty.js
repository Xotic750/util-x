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
        });

        it('11', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty([], '0', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('12', function () {
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
        });

        it('13', function () {
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
        });

        it('14', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty([], 0, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(1);
                expect(obj[0]).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('15', function () {
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
        });

        it('16', function () {
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
        });

        it('17', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty([], 1, {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('18', function () {
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
        });

        it('19', function () {
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
        });


        it('20', function () {
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
        });

        /*jshint -W047 */
        it('21', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty([], 1., {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('22', function () {
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
        });

        it('23', function () {
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
        });

        it('24', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty([], '1.', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(obj.length).to.be(2);
                expect(obj[1]).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('25', function () {
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
        });

        it('26', function () {
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
        });

        it('27', function () {
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
        });
        /*jshint +W047 */

        it('28', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty(function () {}, 'foo', {
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('29', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty(function () {}, 'foo', {
                    value: utilx.privateUndefined,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(utilx.privateUndefined);
            }).to.not.throwException();
        });

        it('30', function () {
            expect(function () {
                var obj = utilx.objectDefineProperty(function () {}, 'foo', {
                    value: null,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });

                expect(utilx.objectHasOwnProperty(obj, 'foo')).to.be.ok();
                expect(obj.foo).to.be(null);
            }).to.not.throwException();
        });
    });
}());
