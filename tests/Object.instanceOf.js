/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.instanceOf', function () {
        it('argument that is not a constructor should throw TypeError in each case', function () {
            expect(function () {
                utilx.Object.instanceOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf(undefined, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf(null, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf(1, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf(true, true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf('x', 'x');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf([], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.instanceOf({}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('primitives should be false in each case', function () {
            expect(utilx.Object.instanceOf(undefined, Object)).to.not.be.ok();
            expect(utilx.Object.instanceOf(null, Object)).to.not.be.ok();
            expect(utilx.Object.instanceOf(1, Number)).to.not.be.ok();
            expect(utilx.Object.instanceOf('', String)).to.not.be.ok();
            expect(utilx.Object.instanceOf(true, Boolean)).to.not.be.ok();
            expect(utilx.Object.instanceOf(false, Boolean)).to.not.be.ok();
        });

        it('native objects should be true in each case', function () {
            expect(utilx.Object.instanceOf({}, Object)).to.be.ok();
            expect(utilx.Object.instanceOf(required.noop, Function)).to.be.ok();
            expect(utilx.Object.instanceOf(new RegExp('c'), RegExp)).to.be.ok();
            expect(utilx.Object.instanceOf(new Date(), Date)).to.be.ok();
            expect(utilx.Object.instanceOf(new Error('x'), Error)).to.be.ok();
        });

        it('arguments object should be an instance of Object', function () {
            expect(utilx.Object.instanceOf(required.returnArgs(), Object)).to.be.ok();
        });

        it('custom error should be an instance of MyError, Error and Object', function () {
            var MyError = utilx.customError('MyError');

            expect(utilx.Object.instanceOf(new MyError('x'), MyError)).to.be.ok();
            expect(utilx.Object.instanceOf(new MyError('x'), Error)).to.be.ok();
            expect(utilx.Object.instanceOf(new MyError('x'), Object)).to.be.ok();
        });

        it('other custom objects should be an instance of their own constructor and parents', function () {
            function Person() {
                return;
            }

            function Employee() {
                return;
            }

            utilx.Function.inherits(Employee, Person);

            function Manager() {
                return;
            }

            utilx.Function.inherits(Manager, Employee);

            expect(utilx.Object.instanceOf(new Person(), Person)).to.be.ok();
            expect(utilx.Object.instanceOf(new Person(), Object)).to.be.ok();
            expect(utilx.Object.instanceOf(new Employee(), Employee)).to.be.ok();
            expect(utilx.Object.instanceOf(new Employee(), Person)).to.be.ok();
            expect(utilx.Object.instanceOf(new Employee(), Object)).to.be.ok();
            expect(utilx.Object.instanceOf(new Manager(), Manager)).to.be.ok();
            expect(utilx.Object.instanceOf(new Manager(), Employee)).to.be.ok();
            expect(utilx.Object.instanceOf(new Manager(), Person)).to.be.ok();
            expect(utilx.Object.instanceOf(new Manager(), Object)).to.be.ok();
        });
    });
}());
