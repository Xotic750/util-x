/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.powerSet', function () {
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
            var a = [1, 2, 3],
                r = [
                    [],
                    [ 3 ],
                    [ 2 ],
                    [ 2, 3 ],
                    [ 1 ],
                    [ 1, 3 ],
                    [ 1, 2 ],
                    [ 1, 2, 3 ]
                ];

            expect(utilx.Array.powerSet(a)).to.eql(r);
        });

        it('object', function () {
            var a = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                },
                r = [
                    [],
                    [ 3 ],
                    [ 2 ],
                    [ 2, 3 ],
                    [ 1 ],
                    [ 1, 3 ],
                    [ 1, 2 ],
                    [ 1, 2, 3 ]
                ];

            expect(utilx.Array.powerSet(a)).to.eql(r);
        });

        it('string', function () {
            var a = '123',
                r = [
                    [],
                    [ 3 ],
                    [ 2 ],
                    [ 2, 3 ],
                    [ 1 ],
                    [ 1, 3 ],
                    [ 1, 2 ],
                    [ 1, 2, 3 ]
                ];

            expect(utilx.Array.powerSet(a)).to.eql(r);
            a = Object(a);
            expect(utilx.Array.powerSet(a)).to.eql(r);
        });
    });
}());
