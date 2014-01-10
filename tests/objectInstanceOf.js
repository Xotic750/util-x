/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectInstanceOf', function () {
        it('argument that is not a constructor should throw TypeError in each case', function () {
            expect(function () {
                utilx.objectInstanceOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf(utilx.privateUndefined, utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf(null, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf(1, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf(true, true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf('x', 'x');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf([], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectInstanceOf({}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('primitives should be false in each case', function () {
            expect(utilx.objectInstanceOf(utilx.privateUndefined, Object)).to.not.be.ok();
            expect(utilx.objectInstanceOf(null, Object)).to.not.be.ok();
            expect(utilx.objectInstanceOf(1, Number)).to.not.be.ok();
            expect(utilx.objectInstanceOf('', String)).to.not.be.ok();
            expect(utilx.objectInstanceOf(true, Boolean)).to.not.be.ok();
            expect(utilx.objectInstanceOf(false, Boolean)).to.not.be.ok();
        });

        it('native objects should be true in each case', function () {
            expect(utilx.objectInstanceOf({}, Object)).to.be.ok();
            expect(utilx.objectInstanceOf(utilx.noop, Function)).to.be.ok();
            expect(utilx.objectInstanceOf(new RegExp('c'), RegExp)).to.be.ok();
            expect(utilx.objectInstanceOf(new Date(), Date)).to.be.ok();
            expect(utilx.objectInstanceOf(new Error('x'), Error)).to.be.ok();
        });

        it('arguments object should be an instance of Object', function () {
            expect(utilx.objectInstanceOf(utilx.returnArgs(), Object)).to.be.ok();
        });

        it('custom error should be an instance of MyError, Error and Object', function () {
            var MyError = utilx.customError('MyError');

            expect(utilx.objectInstanceOf(new MyError('x'), MyError)).to.be.ok();
            expect(utilx.objectInstanceOf(new MyError('x'), Error)).to.be.ok();
            expect(utilx.objectInstanceOf(new MyError('x'), Object)).to.be.ok();
        });

        it('other custom objects should be an instance of their own constructor and parents', function () {
            function Person() {
                return;
            }

            function Employee() {
                return;
            }

            utilx.inherits(Employee, Person);

            function Manager() {
                return;
            }

            utilx.inherits(Manager, Employee);

            expect(utilx.objectInstanceOf(new Person(), Person)).to.be.ok();
            expect(utilx.objectInstanceOf(new Person(), Object)).to.be.ok();
            expect(utilx.objectInstanceOf(new Employee(), Employee)).to.be.ok();
            expect(utilx.objectInstanceOf(new Employee(), Person)).to.be.ok();
            expect(utilx.objectInstanceOf(new Employee(), Object)).to.be.ok();
            expect(utilx.objectInstanceOf(new Manager(), Manager)).to.be.ok();
            expect(utilx.objectInstanceOf(new Manager(), Employee)).to.be.ok();
            expect(utilx.objectInstanceOf(new Manager(), Person)).to.be.ok();
            expect(utilx.objectInstanceOf(new Manager(), Object)).to.be.ok();
        });
    });
}());
