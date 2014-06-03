/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;

    describe('Array.fill', function () {
        var testSubject;

        beforeEach(function () {
            testSubject = [1, 2, 3, 4, 5, 6];
        });

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.fill();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.fill(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.fill(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('works without a value', function () {
            var original = testSubject,
                filled = create(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined
                );

            expect(utilx.Array.fill(original)).to.eql(filled);
        });

        it('works with just a value', function () {
            var original = testSubject,
                filled = [-1, -1, -1, -1, -1, -1];

            expect(utilx.Array.fill(original, -1)).to.eql(filled);
        });

        it('modifies original array', function () {
            var original = testSubject,
                filled = [-1, -1, -1, -1, -1, -1];

            utilx.Array.fill(original, -1);
            expect(original).to.eql(filled);
        });

        it('accepts a positive start index', function () {
            var original = testSubject,
                filled = [1, -1, -1, -1, -1, -1];

            expect(utilx.Array.fill(original, -1, 1)).to.eql(filled);
        });

        it('accepts a positive start and end index', function () {
            var original = testSubject,
                filled = [1, -1, -1, -1, 5, 6];

            expect(utilx.Array.fill(original, -1, 1, 4)).to.eql(filled);
        });

        it('accepts a positive start and negative end index', function () {
            var original = testSubject,
                filled = [1, -1, -1, -1, -1, 6];

            expect(utilx.Array.fill(original, -1, 1, -1)).to.eql(filled);
        });

        it('accepts a positive start and large end index', function () {
            var original = testSubject,
                filled = [1, -1, -1, -1, -1, -1];

            expect(utilx.Array.fill(original, -1, 1, 42)).to.eql(filled);
        });

        it('accepts a negative start and large positive end index', function () {
            var original = testSubject,
                filled = [1, 2, 3, -1, -1, -1];

            expect(utilx.Array.fill(original, -1, -3, 42)).to.eql(filled);
        });

        it('accepts a negative start and small positive end index', function () {
            var original = testSubject,
                filled = [1, 2, 3, -1, -1, 6];

            expect(utilx.Array.fill(original, -1, -3, 5)).to.eql(filled);
        });

        it('accepts a negative start smaller than negative end index', function () {
            var original = testSubject,
                filled = [1, 2, 3, -1, -1, 6];

            expect(utilx.Array.fill(original, -1, -3, -1)).to.eql(filled);
        });

        it('accepts a negative start larger than negative end index', function () {
            var original = testSubject,
                filled = testSubject;

            expect(utilx.Array.fill(original, -1, -1, -3)).to.eql(filled);
        });

        it('accepts a undefined start larger and positve end index', function () {
            var original = testSubject,
                filled = [-1, -1, -1, -1, 5, 6];

            expect(utilx.Array.fill(original, -1, undefined, 4)).to.eql(filled);
        });

        it('works with sparse arrays', function () {
            var original = [],
                filled;

            utilx.Array.assign(original, 5, 6);
            filled = Array.prototype.slice.call(original);
            utilx.Array.assign(filled, 1, -1);
            utilx.Array.assign(filled, 2, -1);
            expect(utilx.Array.fill(original, -1, 1, 3)).to.eql(filled);
        });

        it('empty range remains unchanged', function () {
            var original = testSubject,
                filled = testSubject;

            expect(utilx.Array.fill(original, -1, 0, 0)).to.eql(filled);
        });

        it('accepts a positive start index', function () {
            var original = testSubject,
                filled = [1, 2, 3, -1, -1, -1];

            expect(utilx.Array.fill(original, -1, 3)).to.eql(filled);
        });

        it('accepts a negative start index', function () {
            var original = testSubject,
                filled = [1, 2, 3, -1, -1, -1];

            expect(utilx.Array.fill(original, -1, -3)).to.eql(filled);
        });

        it('accepts a large start index', function () {
            var original = testSubject,
                filled = testSubject;

            expect(utilx.Array.fill(original, -1, 9)).to.eql(filled);
        });
    });
}());
