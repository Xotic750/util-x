/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectGetPrototypeOf', function () {
        it('primitive argument should throw an TypeError in each case', function () {
            expect(function () {
                utilx.objectGetPrototypeOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf('x');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('native objects should return their own prototype', function () {
            expect(utilx.objectGetPrototypeOf([])).to.be(Array.prototype);
            expect(utilx.objectGetPrototypeOf({})).to.be(Object.prototype);
            expect(utilx.objectGetPrototypeOf(utilx.noop)).to.be(Function.prototype);
            expect(utilx.objectGetPrototypeOf(new RegExp('c'))).to.be(RegExp.prototype);
            expect(utilx.objectGetPrototypeOf(new Date())).to.be(Date.prototype);
            expect(utilx.objectGetPrototypeOf(new Error('x'))).to.be(Error.prototype);
        });

        it('arguments object should return Object.prototype', function () {
            expect(utilx.objectGetPrototypeOf(utilx.returnArgs())).to.be(Object.prototype);
        });

        it('custom error should return own prototype', function () {
            var MyError = utilx.customError('MyError');

            expect(utilx.objectGetPrototypeOf(new MyError('x'))).to.be(MyError.prototype);
        });

        it('other custom objects should return their own prototype', function () {
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

            expect(utilx.objectGetPrototypeOf(new Person())).to.be(Person.prototype);
            expect(utilx.objectGetPrototypeOf(new Employee())).to.be(Employee.prototype);
            expect(utilx.objectGetPrototypeOf(new Manager())).to.be(Manager.prototype);

            function Constructor() {
                this.prototype = new Manager();
                this.constructor = Employee;
            }

            Constructor.prototype.constructor = Person;
            try {
                expect(utilx.objectGetPrototypeOf(new Constructor().prototype).constructor).to.be(Manager);
                console.log('# IE<9 was ok utilx.objectGetPrototypeOf when examining prototype.constructor');
            } catch (e) {
                console.log('# IE<9 throws on utilx.objectGetPrototypeOf when examining prototype.constructor: ' +
                            e.message);
            }
        });
    });
}());
