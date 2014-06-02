/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.copyWithin', function () {
        var testSubject;

        beforeEach(function () {
            testSubject = [1, 2, 3, 4, 5];
        });

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.copyWithin();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.copyWithin(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.copyWithin(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('works with 2 args', function () {
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 0, 3)).to.eql([4, 5, 3, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 1, 3)).to.eql([1, 4, 5, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 1, 2)).to.eql([1, 3, 4, 5, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 2, 2)).to.eql([1, 2, 3, 4, 5]);
        });

        it('works with 3 args', function () {
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 0, 3, 4)).to.eql([4, 2, 3, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 1, 3, 4)).to.eql([1, 4, 3, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 1, 2, 4)).to.eql([1, 3, 4, 4, 5]);
        });

        it('works with negative args', function () {
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 0, -2)).to.eql([4, 5, 3, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), 0, -2, -1)).to.eql([4, 2, 3, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), -4, -3, -2)).to.eql([1, 3, 3, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), -4, -3, -1)).to.eql([1, 3, 4, 4, 5]);
            expect(utilx.Array.copyWithin(utilx.Array.slice(testSubject), -4, -3)).to.eql([1, 3, 4, 5, 5]);
        });

        it('works with arraylike objects', function () {
            var args = utilx.Array.toObject(testSubject),
                exp1 = [1, 2, 3, 1, 2],
                exp2 = utilx.Array.toObject(exp1);

            expect(utilx.Object.isPlainObject(args)).to.be.ok();
            expect(utilx.Array.slice(args)).to.eql(testSubject);
            utilx.Array.copyWithin(args, -2, 0);
            expect(utilx.Array.slice(args)).to.eql(exp1);
            expect(args).to.eql(exp2);
            expect(utilx.Object.isPlainObject(args)).to.be.ok();
        });

        it('works with arguments object', function () {
            var args = utilx.Function.returnArgs(1, 2, 3, 4, 5),
                exp1 = [1, 2, 3, 1, 2],
                exp2 = utilx.Array.toObject(exp1);

            expect(utilx.Object.isArguments(args)).to.be.ok();
            expect(utilx.Array.slice(args)).to.eql(testSubject);
            utilx.Array.copyWithin(args, -2, 0);
            expect(utilx.Array.slice(args)).to.eql(exp1);
            expect(utilx.Array.toObject(args)).to.eql(exp2);
            expect(utilx.Object.isArguments(args)).to.be.ok();
        });
    });
}());
