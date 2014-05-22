/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.from', function () {
        it('should create correct array from iterable', function () {
            expect(utilx.Array.from(utilx.Function.returnArgs(0, 1, 2))).to.eql([0, 1, 2]);

            expect(utilx.Array.from([null, undefined, 0.1248, -0, 0])).to.eql(
                [null, undefined, 0.1248, -0, 0]
            );
        });

        it('should handle empty iterables correctly', function () {
            expect(utilx.Array.from(utilx.Function.returnArgs())).to.eql([]);
        });

        it('should work with other constructors', function () {
            var Foo = function (length, args) {
                    this.length = length;
                },
                args = ['a', 'b', 'c'],
                expected = new Foo(args.length);

            utilx.Array.forEach(args, function (arg, index) {
                expected[index] = arg;
            });

            expect(utilx.Array.from.call(Foo, args)).to.eql(expected);
        });

        it('supports a map function', function () {
            var original = [1, 2, 3],
                mapper = function (item) {
                    return item * 2;
                },
                mapped = utilx.Array.from(original, mapper);

            expect(mapped).to.eql([2, 4, 6]);
        });

        it('throws when provided a nonfunction second arg', function () {
            expect(function () {
                utilx.Array.from([], false);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.from([], true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.from([], /a/g);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.from([], {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.from([], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.from([], '');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.from([], 3);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('supports a this arg', function () {
            var original = [1, 2, 3],
                context = {},
                mapper = function (item) {
                    expect(this).to.equal(context);
                    return item * 2;
                },
                mapped = utilx.Array.from(original, mapper, context);

            expect(mapped).to.eql([2, 4, 6]);
        });

        it('throws when provided null or undefined', function () {
            expect(function () {
                utilx.Array.from();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            expect(function () {
                utilx.Array.from(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            expect(function () {
                utilx.Array.from(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('returns [] when given 3', function () {
            expect(utilx.Array.from(3)).to.eql([]);
        });

        it('removes holes', function () {
            var input = [0, , 2],
                result = utilx.Array.from([0, , 2]);

            expect(utilx.Object.has(input, 1)).not.to.be.ok();
            expect(utilx.Object.has(result, 1)).to.be.ok();
            expect(result).to.eql([0, undefined, 2]);
        });

        it('does not autobox the content in strict mode', function () {
            var actual;

            utilx.Array.from([1], function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be('string');
        });
    });
}());
