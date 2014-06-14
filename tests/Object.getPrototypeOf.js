/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.getPrototypeOf', function () {
        it('primitive argument should throw an TypeError in each case', function () {
            expect(function () {
                utilx.Object.getPrototypeOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.getPrototypeOf(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.getPrototypeOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('native objects should return their own prototype', function () {
            expect(utilx.Object.getPrototypeOf(1)).to.be(Number.prototype);
            expect(utilx.Object.getPrototypeOf(true)).to.be(Boolean.prototype);
            expect(utilx.Object.getPrototypeOf('')).to.be(String.prototype);
            expect(utilx.Object.getPrototypeOf([])).to.be(Array.prototype);
            expect(utilx.Object.getPrototypeOf({})).to.be(Object.prototype);
            expect(utilx.Object.getPrototypeOf(required.noop)).to.be(Function.prototype);
            expect(utilx.Object.getPrototypeOf(new RegExp('c'))).to.be(RegExp.prototype);
            expect(utilx.Object.getPrototypeOf(new Date())).to.be(Date.prototype);
            expect(utilx.Object.getPrototypeOf(new Error('x'))).to.be(Error.prototype);
        });

        it('arguments object should return Object.prototype', function () {
            expect(utilx.Object.getPrototypeOf(required.returnArgs())).to.be(Object.prototype);
        });

        it('custom error should return own prototype', function () {
            var MyError = utilx.customError('MyError');

            expect(utilx.Object.getPrototypeOf(new MyError('x'))).to.be(MyError.prototype);
        });

        it('other custom objects should return their own prototype', function () {
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

            expect(utilx.Object.getPrototypeOf(new Person())).to.be(Person.prototype);
            expect(utilx.Object.getPrototypeOf(new Employee())).to.be(Employee.prototype);
            expect(utilx.Object.getPrototypeOf(new Manager())).to.be(Manager.prototype);

            function Constructor() {
                this.prototype = new Manager();
                this.constructor = Employee;
            }

            Constructor.prototype.constructor = Person;
            expect(utilx.Object.getPrototypeOf(new Constructor().prototype).constructor).to.be(Manager);
        });
    });
}());
