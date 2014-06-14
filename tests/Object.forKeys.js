/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.forKeys', function () {
        /*jshint -W001 */
        var forKeys;

        beforeEach(function () {
            forKeys = {
                'str': 'boz',
                'obj': {},
                'arr': [],
                'bool': true,
                'num': 42,
                'null': null,
                'undefined': undefined,
                'toString': required.noop,
                'toLocaleString': required.noop,
                'valueOf': required.noop,
                'hasOwnProperty': required.noop,
                'isPrototypeOf': required.noop,
                'propertyIsEnumerable': required.noop,
                'constructor': required.noop
            };
        });

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Object.forKeys();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Object.forKeys(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Object.forKeys(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is a boolean', function () {
            expect(function () {
                utilx.Object.forKeys(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is a string', function () {
            expect(function () {
                utilx.Object.forKeys('1');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is a number', function () {
            expect(function () {
                utilx.Object.forKeys(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if function argument is not a function', function () {
            expect(function () {
                utilx.Object.forKeys(forKeys);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.forKeys(forKeys, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.forKeys(forKeys, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Object.forKeys(forKeys, function (element, prop, obj) {
                expect(obj).to.be(forKeys);
                expect(utilx.String.isString(prop)).to.be.ok();
                if (utilx.Number.isNumber(element) && utilx.Number.isNaN(element)) {
                    expect(utilx.Number.isNumber(forKeys[prop]) && utilx.Number.isNaN(forKeys[prop])).to.be(true);
                } else {
                    expect(element).to.be(forKeys[prop]);
                }

                if (prop === 'toString') {
                    return true;
                }

                return false;
            })).to.be(true);
        });

        it('should pass the right parameters', function () {
            var object = {'blah': '1'};

            utilx.Object.forKeys(object, function (item, prop, obj) {
                expect(item).to.be('1');
                expect(prop).to.be('blah');
                expect(obj).to.be(object);
            });
        });

        it('should not affect elements added to the object after it has begun', function () {
            var object = {
                    'blah': '1',
                    'wibble': '1',
                    'wobble': '1'
                },
                i = 0;

            utilx.Object.forKeys(object, function (item, prop, obj) {
                /*jslint unparam: true */
                /*jshint unused: false */
                i += 1;
                obj['blah' + i] = i;

                return i === 3;
            });

            expect(object).to.eql({
                'blah': '1',
                'wibble': '1',
                'wobble': '1',
                'blah1': 1,
                'blah2': 2,
                'blah3': 3
            });

            expect(i).to.be(3);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.Object.forKeys({'blah': '1'}, function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should return false if it runs to the end', function () {
            var actual = utilx.Object.forKeys(forKeys, function () {
                return;
            });

            expect(actual).to.be(false);
        });

        it('should return true if it is stopped somewhere', function () {
            var actual = utilx.Object.forKeys(forKeys, function () {
                return true;
            });

            expect(actual).to.be(true);
        });

        it('should return false if there are no elements', function () {
            var actual = utilx.Object.forKeys([], function () {
                return true;
            });

            expect(actual).to.be(false);
        });

        it('should enumerate all', function () {
            var actual = {};

            utilx.Object.forKeys(forKeys, function (item, prop) {
                actual[prop] = item;
            });

            expect(actual).to.eql(forKeys);
        });

        it('should stop after 3 elements', function () {
            var numberOfRuns = 0;

            utilx.Object.forKeys(forKeys, function () {
                numberOfRuns += 1;

                return numberOfRuns === 3;
            });

            expect(numberOfRuns).to.be(3);
        });

        it('should enumerate all in string', function () {
            var count = 0,
                inner = [],
                props = [];

            utilx.Object.forKeys('foo', function (item, prop) {
                /*jslint unparam: true */
                /*jshint unused: true */
                inner.push(item);
                props.push(prop);
                count += 1;
            });

            expect(count).to.be(3);
            expect(inner.sort()).to.eql(['f', 'o', 'o']);
            expect(props.sort()).to.eql(['0', '1', '2']);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.Object.forKeys('foo', function (item, prop, list) {
                /*jslint unparam: true */
                /*jshint unused: true */
                actual = list;

                return true;
            });

            if (typeof actual !== 'object') {
                /*global console */
                console.log('actual', typeof actual);
            }

            expect(typeof actual).to.be('object');
            expect(utilx.Object.ToClassString(actual)).to.be('[object String]');
            expect(actual.toString()).to.be('foo');
            expect(actual[0]).to.be('f');
        });

        it('does not autobox the content in strict mode', function () {
            var actual;

            utilx.Object.forKeys({'blah': '1'}, function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be(required.isStrictMode() ? 'string' : 'object');
        });
    });
}());
