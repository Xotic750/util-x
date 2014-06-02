/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.powerSet', function () {
        var testSubject = [1, 2, 3],
            expected = [
                [],
                [ 3 ],
                [ 2 ],
                [ 2, 3 ],
                [ 1 ],
                [ 1, 3 ],
                [ 1, 2 ],
                [ 1, 2, 3 ]
            ];

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.powerSet();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.powerSet(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.powerSet(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('strict equal', function () {
            expect(utilx.Array.powerSet(testSubject)).to.eql(expected);
        });

        it('object', function () {
            expect(utilx.Array.powerSet(utilx.Array.toObject(testSubject))).to.eql(expected);
        });

        it('arguments', function () {
            expect(utilx.Array.powerSet(utilx.Function.returnArgs(1, 2, 3))).to.eql(expected);
        });

        it('string', function () {
            var a = '123';

            expect(utilx.Array.powerSet(a)).to.eql(expected);
            expect(utilx.Array.powerSet(utilx.Object.ToObject(a))).to.eql(expected);
        });
    });
}());
