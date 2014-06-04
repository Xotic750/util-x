/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        log = required.log;

    describe('Number.parseInt', function () {
        var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
            '\u2029\uFEFF';

        it('accepts a radix', function () {
            var i;

            for (i = 2; i <= 36; i += 1) {
                expect(utilx.Number.parseInt('10', i)).to.be(i);
                if (i === 16) {
                    expect(log.toBe(utilx.Number.parseInt('0x16', i), 22)).to.be(22);
                } else if (i === 34) {
                    expect(log.toBe(utilx.Number.parseInt('0x16', i), 38188)).to.be(38188);
                } else if (i === 35) {
                    expect(log.toBe(utilx.Number.parseInt('0x16', i), 40466)).to.be(40466);
                } else if (i === 36) {
                    expect(log.toBe(utilx.Number.parseInt('0x16', i), 42810)).to.be(42810);
                } else {
                    expect(log.toBe(utilx.Number.parseInt('0x16', i), 0)).to.be(0);
                }
            }
        });

        it('returns NaN if radix < 2 or > 36', function () {
            expect(utilx.Number.isNaN(utilx.Number.parseInt('10', 1))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Number.parseInt('10', 37))).to.be.ok();
        });

        it('defaults the radix to 10 when the number does not start with 0x or 0X', function () {
            utilx.Array.forEach(['01', '08', '10', '42'], function (str) {
                expect(utilx.Number.parseInt(str)).to.be(utilx.Number.parseInt(str, 10));
            });
        });

        it('defaults the radix to 16 when the number starts with 0x or 0X', function () {
            expect(utilx.Number.parseInt('0x16')).to.be(utilx.Number.parseInt('0x16', 16));
            expect(utilx.Number.parseInt('0X16')).to.be(utilx.Number.parseInt('0X16', 16));
        });

        it('ignores leading whitespace', function () {
            expect(utilx.Number.parseInt('  0x16')).to.be(utilx.Number.parseInt('0x16', 16));
            expect(utilx.Number.parseInt('  42')).to.be(utilx.Number.parseInt('42', 10));
            expect(utilx.Number.parseInt('  08')).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt(ws + '08')).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt(ws + '0x16')).to.be(utilx.Number.parseInt('0x16', 16));
        });

        it('ignores trailing whitespace', function () {
            expect(utilx.Number.parseInt('0x16  ')).to.be(utilx.Number.parseInt('0x16', 16));
            expect(utilx.Number.parseInt('42  ')).to.be(utilx.Number.parseInt('42', 10));
            expect(utilx.Number.parseInt('08  ')).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt('08' + ws)).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt('0x16' + ws)).to.be(utilx.Number.parseInt('0x16', 16));
        });

        it('ignores leading & trailing whitespace', function () {
            expect(utilx.Number.parseInt('  0x16  ')).to.be(utilx.Number.parseInt('0x16', 16));
            expect(utilx.Number.parseInt('  42  ')).to.be(utilx.Number.parseInt('42', 10));
            expect(utilx.Number.parseInt('  08  ')).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt(ws + '08' + ws)).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt(ws + '0x16' + ws)).to.be(utilx.Number.parseInt('0x16', 16));
        });

        it('defaults the radix properly when not a true number', function () {
            var fakeZero = {
                valueOf: function () {
                    return 0;
                }
            };

            expect(utilx.Number.parseInt('08', fakeZero)).to.be(utilx.Number.parseInt('08', 10));
            expect(utilx.Number.parseInt('0x16', fakeZero)).to.be(utilx.Number.parseInt('0x16', 16));
        });
    });
}());
