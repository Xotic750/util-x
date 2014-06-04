/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;

    describe('Array.assign', function () {
        var overflow = Math.pow(2, 32),
            maxLength = overflow - 1,
            maxLast = maxLength - 1,
            overflowHex = 0xFFFFFFFF,
            minHex = 0x0,
            maxLastHex = 0xFFFFFFFE,
            minHexStr = '0x0',
            maxLastHexStr = '0x' + maxLast.toString(16),
            testSubject = create(
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
            );

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.assign();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.assign(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.assign(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw if argument is number', function () {
            expect(function () {
                utilx.Array.assign(1);
            }).to.not.throwException();
        });

        it('should not throw if argument is boolean', function () {
            expect(function () {
                utilx.Array.assign(true);
            }).to.not.throwException();
        });

        it('should not throw if argument is string', function () {
            expect(function () {
                utilx.Array.assign('a');
            }).to.not.throwException();
        });

        it('should not throw if argument is function', function () {
            expect(function () {
                utilx.Array.assign(function () {
                    return;
                }, 0, 'a');
            }).to.not.throwException();
        });

        it('should not throw if argument is complex object', function () {
            expect(function () {
                utilx.Array.assign(new utilx.Function.noop(), 0, 'a');
            }).to.not.throwException();
        });

        it('should work on array', function () {
            var arrCmp = utilx.Array.slice(testSubject),
                arr = [],
                i;

            expect(utilx.Array.assign(arr, 0, undefined)).to.be(1);
            expect(utilx.Array.assign(arr, 1, null)).to.be(2);
            expect(utilx.Array.assign(arr, 2, -1)).to.be(3);
            expect(utilx.Array.assign(arr, 3, 0)).to.be(4);
            expect(utilx.Array.assign(arr, 4, 1)).to.be(5);
            expect(utilx.Array.assign(arr, 5, false)).to.be(6);
            expect(utilx.Array.assign(arr, 6, true)).to.be(7);
            expect(utilx.Array.assign(arr, 20)).to.be(7);
            expect(utilx.Array.assign(arr, 21)).to.be(7);
            expect(utilx.Array.assign(arr, 22)).to.be(7);
            expect(utilx.Array.assign(arr, 23)).to.be(7);
            expect(utilx.Array.assign(arr, 11, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 7, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 8, '')).to.be(12);
            expect(utilx.Array.assign(arr, 9, 'abc')).to.be(12);
            expect(utilx.Array.assign(arr, 10, null)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(arr).to.eql(arrCmp);
        });

        it('string number in range', function () {
            var a = [],
                b = [],
                max = maxLast.toString();

            expect(utilx.Array.assign(a, '0', '1')).to.be(1);
            b['0'] = '1';
            expect(b.length).to.be(1);
            expect(utilx.Array.assign(a, max, '1')).to.be(maxLength);
            b[max] = '1';
            expect(b.length).to.be(maxLength);
        });

        it('string number out of range', function () {
            var a = [],
                b = [],
                over = overflow.toString();

            expect(utilx.Array.assign(a, '-1', '1')).to.be(0);
            expect(a.hasOwnProperty('-1')).to.be.ok();
            b['-1'] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty('-1')).to.be.ok();
            expect(utilx.Array.assign(a, over, '1')).to.be(0);
            expect(a.hasOwnProperty(over)).to.be.ok();
            b[over] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(over)).to.be.ok();
        });

        it('hex number in range', function () {
            var a = [],
                b = [];

            expect(utilx.Array.assign(a, minHex, '1')).to.be(1);
            expect(a.hasOwnProperty(minHex)).to.be.ok();
            b[minHex] = '1';
            expect(b.length).to.be(1);
            expect(b.hasOwnProperty(minHex)).to.be.ok();
            expect(utilx.Array.assign(a, maxLastHex, '1')).to.be(maxLength);
            expect(a.hasOwnProperty(maxLastHex)).to.be.ok();
            b[maxLastHex] = '1';
            expect(b.length).to.be(maxLength);
            expect(b.hasOwnProperty(maxLastHex)).to.be.ok();
        });

        it('hex number out of range', function () {
            var a = [],
                b = [];

            expect(utilx.Array.assign(a, overflowHex, '1')).to.be(0);
            expect(a.hasOwnProperty(overflowHex)).to.be.ok();
            b[overflowHex] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(overflowHex)).to.be.ok();
        });

        it('hex string in range', function () {
            var a = [],
                b = [];

            expect(utilx.Array.assign(a, minHexStr, '1')).to.be(0);
            expect(a.hasOwnProperty(minHexStr)).to.be.ok();
            b[minHexStr] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(minHexStr)).to.be.ok();
            expect(utilx.Array.assign(a, maxLastHexStr, '1')).to.be(0);
            expect(a.hasOwnProperty(maxLastHexStr)).to.be.ok();
            b[maxLastHexStr] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(maxLastHexStr)).to.be.ok();
        });

        it('string number leading space', function () {
            var a = [],
                b = [],
                max = ' ' + maxLast.toString();

            expect(utilx.Array.assign(a, ' 0', '1')).to.be(0);
            expect(a.hasOwnProperty(' 0')).to.be.ok();
            b[' 0'] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(' 0')).to.be.ok();
            expect(utilx.Array.assign(a, max, '1')).to.be(0);
            expect(a.hasOwnProperty(max)).to.be.ok();
            b[max] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(max)).to.be.ok();
        });

        it('string number trailing space', function () {
            var a = [],
                b = [],
                max = maxLast.toString() + ' ';

            expect(utilx.Array.assign(a, '0 ', '1')).to.be(0);
            expect(a.hasOwnProperty('0 ')).to.be.ok();
            b['0 '] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty('0 ')).to.be.ok();
            expect(utilx.Array.assign(a, max, '1')).to.be(0);
            expect(a.hasOwnProperty(max)).to.be.ok();
            b[max] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(max)).to.be.ok();
        });

        it('string number leading point', function () {
            var a = [],
                b = [],
                max = '.' + maxLast.toString();

            expect(utilx.Array.assign(a, '.0', '1')).to.be(0);
            expect(a.hasOwnProperty('.0')).to.be.ok();
            b['.0'] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty('.0')).to.be.ok();
            expect(utilx.Array.assign(a, max, '1')).to.be(0);
            expect(a.hasOwnProperty(max)).to.be.ok();
            b[max] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(max)).to.be.ok();
        });

        it('string number trailing point', function () {
            var a = [],
                b = [],
                max = maxLast.toString() + '.';

            expect(utilx.Array.assign(a, '0.', '1')).to.be(0);
            expect(a.hasOwnProperty('0.')).to.be.ok();
            b['0.'] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty('0.')).to.be.ok();
            expect(utilx.Array.assign(a, max, '1')).to.be(0);
            expect(a.hasOwnProperty(max)).to.be.ok();
            b[max] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty(max)).to.be.ok();
        });

        it('floating point number', function () {
            var a = [],
                b = [];

            expect(utilx.Array.assign(a, 1.1, '1')).to.be(0);
            b[1.1] = '1';
            expect(b.length).to.be(0);
        });

        it('floating point string', function () {
            var a = [],
                b = [];

            expect(utilx.Array.assign(a, '1.1', '1')).to.be(0);
            expect(a.hasOwnProperty('1.1')).to.be.ok();
            b['1.1'] = '1';
            expect(b.length).to.be(0);
            expect(b.hasOwnProperty('1.1')).to.be.ok();
        });

        it('should work on objects with length', function () {
            var arrCmp = utilx.Array.toObject(testSubject),
                arr = {
                    length: 0
                },
                i;

            expect(utilx.Array.assign(arr, 0, undefined)).to.be(1);
            expect(utilx.Array.assign(arr, 1, null)).to.be(2);
            expect(utilx.Array.assign(arr, 2, -1)).to.be(3);
            expect(utilx.Array.assign(arr, 3, 0)).to.be(4);
            expect(utilx.Array.assign(arr, 4, 1)).to.be(5);
            expect(utilx.Array.assign(arr, 5, false)).to.be(6);
            expect(utilx.Array.assign(arr, 6, true)).to.be(7);
            expect(utilx.Array.assign(arr, 20)).to.be(7);
            expect(utilx.Array.assign(arr, 21)).to.be(7);
            expect(utilx.Array.assign(arr, 22)).to.be(7);
            expect(utilx.Array.assign(arr, 23)).to.be(7);
            expect(utilx.Array.assign(arr, 11, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 7, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 8, '')).to.be(12);
            expect(utilx.Array.assign(arr, 9, 'abc')).to.be(12);
            expect(utilx.Array.assign(arr, 10, null)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(arr).to.eql(arrCmp);
        });

        it('should work on objects without length', function () {
            var arrCmp = utilx.Array.toObject(testSubject),
                arr = {},
                i;

            delete arrCmp.length;
            expect(utilx.Array.assign(arr, 0, undefined)).to.be(undefined);
            expect(utilx.Array.assign(arr, 1, null)).to.be(undefined);
            expect(utilx.Array.assign(arr, 2, -1)).to.be(undefined);
            expect(utilx.Array.assign(arr, 3, 0)).to.be(undefined);
            expect(utilx.Array.assign(arr, 4, 1)).to.be(undefined);
            expect(utilx.Array.assign(arr, 5, false)).to.be(undefined);
            expect(utilx.Array.assign(arr, 6, true)).to.be(undefined);
            expect(utilx.Array.assign(arr, 20)).to.be(undefined);
            expect(utilx.Array.assign(arr, 21)).to.be(undefined);
            expect(utilx.Array.assign(arr, 22)).to.be(undefined);
            expect(utilx.Array.assign(arr, 23)).to.be(undefined);
            expect(utilx.Array.assign(arr, 11, undefined)).to.be(undefined);
            expect(utilx.Array.assign(arr, 7, undefined)).to.be(undefined);
            expect(utilx.Array.assign(arr, 8, '')).to.be(undefined);
            expect(utilx.Array.assign(arr, 9, 'abc')).to.be(undefined);
            expect(utilx.Array.assign(arr, 10, null)).to.be(undefined);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(arr).to.eql(arrCmp);
        });

        it('should work on arguments', function () {
            var arrCmp = utilx.Array.slice(testSubject),
                arr = utilx.Function.returnArgs(),
                i;

            expect(utilx.Array.assign(arr, 0, undefined)).to.be(1);
            expect(utilx.Array.assign(arr, 1, null)).to.be(2);
            expect(utilx.Array.assign(arr, 2, -1)).to.be(3);
            expect(utilx.Array.assign(arr, 3, 0)).to.be(4);
            expect(utilx.Array.assign(arr, 4, 1)).to.be(5);
            expect(utilx.Array.assign(arr, 5, false)).to.be(6);
            expect(utilx.Array.assign(arr, 6, true)).to.be(7);
            expect(utilx.Array.assign(arr, 20)).to.be(7);
            expect(utilx.Array.assign(arr, 21)).to.be(7);
            expect(utilx.Array.assign(arr, 22)).to.be(7);
            expect(utilx.Array.assign(arr, 23)).to.be(7);
            expect(utilx.Array.assign(arr, 11, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 7, undefined)).to.be(12);
            expect(utilx.Array.assign(arr, 8, '')).to.be(12);
            expect(utilx.Array.assign(arr, 9, 'abc')).to.be(12);
            expect(utilx.Array.assign(arr, 10, null)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(utilx.Array.slice(arr)).to.eql(arrCmp);
        });
    });
}());
