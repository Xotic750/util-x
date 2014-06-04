/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;

    describe('Array.unshift', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.last();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.unshift(undefined);
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
            var arrCmp = create(
                    undefined,
                    null,
                    -1,
                    0,
                    1,
                    false,
                    true,
                    undefined,
                    '',
                    'abc',
                    null,
                    undefined
                ),
                arr = [],
                i;

            expect(utilx.Array.unshift(arr, undefined)).to.be(1);
            expect(utilx.Array.unshift(arr, null)).to.be(2);
            expect(utilx.Array.unshift(arr, 'abc')).to.be(3);
            expect(utilx.Array.unshift(arr, '')).to.be(4);
            expect(utilx.Array.unshift(arr, undefined)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr, true)).to.be(6);
            expect(utilx.Array.unshift(arr, false)).to.be(7);
            expect(utilx.Array.unshift(arr, 1)).to.be(8);
            expect(utilx.Array.unshift(arr, 0)).to.be(9);
            expect(utilx.Array.unshift(arr, -1)).to.be(10);
            expect(utilx.Array.unshift(arr, null)).to.be(11);
            expect(utilx.Array.unshift(arr, undefined)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(arr).to.eql(arrCmp);
        });

        it('arguments', function () {
            var arrCmp = create(
                    undefined,
                    null,
                    -1,
                    0,
                    1,
                    false,
                    true,
                    undefined,
                    '',
                    'abc',
                    null,
                    undefined
                ),
                arr = utilx.Function.returnArgs(),
                i;

            expect(utilx.Array.unshift(arr, undefined)).to.be(1);
            expect(utilx.Array.unshift(arr, null)).to.be(2);
            expect(utilx.Array.unshift(arr, 'abc')).to.be(3);
            expect(utilx.Array.unshift(arr, '')).to.be(4);
            expect(utilx.Array.unshift(arr, undefined)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr, true)).to.be(6);
            expect(utilx.Array.unshift(arr, false)).to.be(7);
            expect(utilx.Array.unshift(arr, 1)).to.be(8);
            expect(utilx.Array.unshift(arr, 0)).to.be(9);
            expect(utilx.Array.unshift(arr, -1)).to.be(10);
            expect(utilx.Array.unshift(arr, null)).to.be(11);
            expect(utilx.Array.unshift(arr, undefined)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(utilx.Array.slice(arr)).to.eql(arrCmp);
        });

        it('object with length', function () {
            var arrCmp = {
                    0: undefined,
                    1: null,
                    2: -1,
                    3: 0,
                    4: 1,
                    5: false,
                    6: true,
                    7: undefined,
                    8: '',
                    9: 'abc',
                    10: null,
                    11: undefined,
                    length: 12
                },
                arr = {
                    length: 0
                },
                i;

            expect(utilx.Array.unshift(arr, undefined)).to.be(1);
            expect(utilx.Array.unshift(arr, null)).to.be(2);
            expect(utilx.Array.unshift(arr, 'abc')).to.be(3);
            expect(utilx.Array.unshift(arr, '')).to.be(4);
            expect(utilx.Array.unshift(arr, undefined)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr, true)).to.be(6);
            expect(utilx.Array.unshift(arr, false)).to.be(7);
            expect(utilx.Array.unshift(arr, 1)).to.be(8);
            expect(utilx.Array.unshift(arr, 0)).to.be(9);
            expect(utilx.Array.unshift(arr, -1)).to.be(10);
            expect(utilx.Array.unshift(arr, null)).to.be(11);
            expect(utilx.Array.unshift(arr, undefined)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(arr).to.eql(arrCmp);
        });

        it('object without length', function () {
            var arrCmp = {
                    0: undefined,
                    1: null,
                    2: -1,
                    3: 0,
                    4: 1,
                    5: false,
                    6: true,
                    7: undefined,
                    8: '',
                    9: 'abc',
                    10: null,
                    11: undefined,
                    length: 12
                },
                arr = {},
                i;

            expect(utilx.Array.unshift(arr, undefined)).to.be(1);
            expect(utilx.Array.unshift(arr, null)).to.be(2);
            expect(utilx.Array.unshift(arr, 'abc')).to.be(3);
            expect(utilx.Array.unshift(arr, '')).to.be(4);
            expect(utilx.Array.unshift(arr, undefined)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr)).to.be(5);
            expect(utilx.Array.unshift(arr, true)).to.be(6);
            expect(utilx.Array.unshift(arr, false)).to.be(7);
            expect(utilx.Array.unshift(arr, 1)).to.be(8);
            expect(utilx.Array.unshift(arr, 0)).to.be(9);
            expect(utilx.Array.unshift(arr, -1)).to.be(10);
            expect(utilx.Array.unshift(arr, null)).to.be(11);
            expect(utilx.Array.unshift(arr, undefined)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(arr).eql(arrCmp);
        });
    });
}());
