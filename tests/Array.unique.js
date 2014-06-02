/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.unique', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.last();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.unique(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.last(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('array', function () {
            var list = [1, 2, 1, 3, 1, 4];

            expect(utilx.Array.unique(list)).to.eql([1, 2, 3, 4]);

            list = [1, 1, 1, NaN, 2, 2, 3, NaN];
            expect(utilx.Array.unique(list).join(',')).to.be([1, NaN, 2, 3, NaN].join(','));

            list = [{
                name: 'moe'
            }, {
                name: 'curly'
            }, {
                name: 'larry'
            }, {
                name: 'curly'
            }];

            expect(utilx.Array.unique(list)).to.eql(list);
            expect(utilx.Array.unique(list, utilx.Object.deepStrictEqual)).to.eql([{
                name: 'moe'
            }, {
                name: 'curly'
            }, {
                name: 'larry'
            }]);

            list = [1, 2, 2, NaN, 3, 4, NaN, 4];
            expect(utilx.Array.unique(list, utilx.Object.is).join(',')).to.be([1, 2, NaN, 3, 4].join(','));

            expect(utilx.Array.unique([])).to.eql([]);
        });

        it('arguments', function () {
            expect(utilx.Array.unique(utilx.Function.returnArgs(1, 2, 1, 3, 1, 4))).to.eql([1, 2, 3, 4]);
            expect(utilx.Array.unique(utilx.Function.returnArgs())).to.eql([]);
        });

        it('object with length', function () {
            var list = {
                0: 1,
                1: 2,
                2: 2,
                3: 3,
                4: 4,
                5: 4,
                length: 6
            };

            expect(utilx.Array.unique(list)).to.eql([1, 2, 3, 4]);
            expect(utilx.Array.unique({length: 0})).to.eql([]);
        });

        it('object without length', function () {
            var list = {
                0: 1,
                1: 2,
                2: 2,
                3: 3,
                4: 4,
                5: 4
            };

            expect(utilx.Array.unique(list)).to.eql([]);
            expect(utilx.Array.unique({})).to.eql([]);
        });
    });
}());
