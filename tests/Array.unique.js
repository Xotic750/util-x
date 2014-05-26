/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.unique', function () {
        it('should not throw an error in each case', function () {
            var list = [1, 2, 1, 3, 1, 4],
                result;

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

            result = (function () {
                return utilx.Array.unique(arguments);
            }(1, 2, 1, 3, 1, 4));

            expect(result).to.eql([1, 2, 3, 4]);

            list = {
                0: 1,
                1: 2,
                2: 2,
                3: 3,
                4: 4,
                5: 4,
                length: 6
            };

            expect(utilx.Array.unique(list)).to.eql([1, 2, 3, 4]);
            expect(utilx.Array.unique({})).to.eql([]);
            expect(utilx.Array.unique([])).to.eql([]);
        });

        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Array.unique();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.unique(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.unique(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
