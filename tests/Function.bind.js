/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.bind', function () {
        var actual, expected,
            testSubject;

        testSubject = {
            push: function (o) {
                this.a.push(o);
            }
        };

        function func() {
            /*jshint -W040 */
            utilx.Array.forEach(arguments, function (a) {
                utilx.Array.push(this, a);
            }, this);

            return this;
            /*jshint +W040 */
        }

        beforeEach(function () {
            actual = [];
            testSubject.a = [];
        });

        it('binds properly without a context', function () {
            var context;

            testSubject.func = utilx.Function.bind(function () {
                context = this;
            });

            testSubject.func();
            expect(context).to.be(function () {
                return this;
            }.call());
        });

        it('binds properly without a context, and still supplies bound arguments', function () {
            var a,
                context;

            testSubject.func = utilx.Function.bind(function () {
                a = Array.prototype.slice.call(arguments);
                context = this;
            }, undefined, 1, 2, 3);

            testSubject.func(1, 2, 3);
            expect(a).to.eql([1, 2, 3, 1, 2, 3]);
            expect(context).to.be(function () {
                return this;
            }.call());
        });

        it('binds a context properly', function () {
            testSubject.func = utilx.Function.bind(func, actual);
            testSubject.func(1, 2, 3);
            expect(actual).to.eql([1, 2, 3]);
            expect(testSubject.a).to.eql([]);
        });

        it('binds a context and supplies bound arguments', function () {
            testSubject.func = utilx.Function.bind(func, actual, 1, 2, 3);
            testSubject.func(4, 5, 6);
            expect(actual).to.eql([1, 2, 3, 4, 5, 6]);
            expect(testSubject.a).to.eql([]);
        });

        it('returns properly without binding a context', function () {
            testSubject.func = utilx.Function.bind(function () {
                return this;
            });

            var context = testSubject.func();
            expect(context).to.be(function () {
                return this;
            }.call());
        });

        it('returns properly without binding a context, and still supplies bound arguments', function () {
            var context;

            testSubject.func = utilx.Function.bind(function () {
                context = this;

                return Array.prototype.slice.call(arguments);
            }, undefined, 1, 2, 3);

            actual = testSubject.func(1, 2, 3);
            expect(context).to.be(function () {
                return this;
            }.call());

            expect(actual).to.eql([1, 2, 3, 1, 2, 3]);
        });

        it('returns properly while binding a context properly', function () {
            var ret;

            testSubject.func = utilx.Function.bind(func, actual);
            ret = testSubject.func(1, 2, 3);
            expect(ret).to.be(actual);
            expect(ret).not.to.be(testSubject);
        });

        it('returns properly while binding a context and supplies bound arguments', function () {
            var ret;

            testSubject.func = utilx.Function.bind(func, actual, 1, 2, 3);
            ret = testSubject.func(4, 5, 6);
            expect(ret).to.be(actual);
            expect(ret).not.to.be(testSubject);
        });

        it('passes the correct arguments as a constructor', function () {
            var ret;

            expected = {
                name: 'Correct'
            };

            testSubject.func = utilx.Function.bind(function (arg) {
                return arg;
            }, {
                name: 'Incorrect'
            });

            ret = new testSubject.func(expected);
            expect(ret).to.be(expected);
        });

        it('returns the return value of the bound function when called as a constructor', function () {
            var oracle = [1, 2, 3],
                Subject = utilx.Function.bind(function () {
                    return oracle;
                }, null),
                result = new Subject();

            expect(result).to.be(oracle);
        });

        it('returns the correct value if constructor returns primitive', function () {
            var oracle = [1, 2, 3],
                Subject = utilx.Function.bind(function () {
                    return oracle;
                }, null),
                result = new Subject();
            expect(result).to.be(oracle);

            oracle = {};
            result = new Subject();
            expect(result).to.be(oracle);

            oracle = function () {};
            result = new Subject();
            expect(result).to.be(oracle);

            oracle = 'asdf';
            result = new Subject();
            expect(result).not.to.be(oracle);

            oracle = null;
            result = new Subject();
            expect(result).not.to.be(oracle);

            oracle = true;
            result = new Subject();
            expect(result).not.to.be(oracle);

            oracle = 1;
            result = new Subject();
            expect(result).not.to.be(oracle);
        });

        it('returns the value that instance of original "class" when called as a constructor', function () {
            var classA = function (x) {
                    this.name = x || 'A';
                },
                ClassB = utilx.Function.bind(classA, null, 'B'),
                result = new ClassB();

            expect(result instanceof classA).to.be(true);
            expect(result instanceof ClassB).to.be(true);
        });

        it('sets a correct length without thisArg', function () {
            var subject = utilx.Function.bind(function (a, b, c) {
                return a + b + c;
            });

            expect(subject.length).to.be(3);
        });

        it('sets a correct length with thisArg', function () {
            var subject = utilx.Function.bind(function (a, b, c) {
                return a + b + c;
            }, {});

            expect(subject.length).to.be(3);
        });

        it('sets a correct length with thisArg and first argument', function () {
            var subject = utilx.Function.bind(function (a, b, c) {
                return a + b + c;
            }, {}, 1);

            expect(subject.length).to.be(2);
        });

        it('sets a correct length without thisArg and first argument', function () {
            var subject = utilx.Function.bind(function (a, b, c) {
                return a + b + c;
            }, undefined, 1);

            expect(subject.length).to.be(2);
        });

        it('sets a correct length without thisArg and too many argument', function () {
            var subject = utilx.Function.bind(function (a, b, c) {
                return a + b + c;
            }, undefined, 1, 2, 3, 4);

            expect(subject.length).to.be(0);
        });
    });
}());
