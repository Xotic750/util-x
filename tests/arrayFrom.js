/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayFrom', function () {
        it('should create correct array from iterable', function () {
            expect(utilx.arrayFrom(utilx.returnArgs(0, 1, 2))).to.eql([0, 1, 2]);

            expect(utilx.arrayFrom([null, utilx.privateUndefined, 0.1248, -0, 0])).to.eql(
                [null, utilx.privateUndefined, 0.1248, -0, 0]
            );
        });

        it('should handle empty iterables correctly', function () {
            expect(utilx.arrayFrom(utilx.returnArgs())).to.eql([]);
        });

        it('should work with other constructors', function () {
            var Foo = function (length, args) {
                    this.length = length;
                },
                args = ['a', 'b', 'c'],
                expected = new Foo(args.length);

            utilx.arrayForEach(args, function (arg, index) {
                expected[index] = arg;
            });

            expect(utilx.arrayFrom.call(Foo, args)).to.eql(expected);
        });

        it('supports a map function', function () {
            var original = [1, 2, 3],
                mapper = function (item) {
                    return item * 2;
                },
                mapped = utilx.arrayFrom(original, mapper);

            expect(mapped).to.eql([2, 4, 6]);
        });

        it('throws when provided a nonfunction second arg', function () {
            expect(function () {
                utilx.arrayFrom([], false);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFrom([], true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFrom([], /a/g);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFrom([], {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFrom([], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFrom([], '');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFrom([], 3);
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
                mapped = utilx.arrayFrom(original, mapper, context);

            expect(mapped).to.eql([2, 4, 6]);
        });

        it('throws when provided null or undefined', function () {
            expect(function () {
                utilx.arrayFrom();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            expect(function () {
                utilx.arrayFrom(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            expect(function () {
                utilx.arrayFrom(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('returns [] when given 3', function () {
            expect(utilx.arrayFrom(3)).to.eql([]);
        });

        it('removes holes', function () {
            var input = [0, , 2],
                result = utilx.arrayFrom([0, , 2]);

            expect(utilx.hasProperty(input, 1)).not.to.be.ok();
            expect(utilx.hasProperty(result, 1)).to.be.ok();
            expect(result).to.eql([0, utilx.privateUndefined, 2]);
        });
    });
}());
