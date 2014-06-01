/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.constants', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.POSITIVE_ZERO).to.be(0);
            expect(utilx.Number.NEGATIVE_ZERO).to.be(0);
            expect(1 / utilx.Number.POSITIVE_ZERO).to.be(Infinity);
            expect(1 / utilx.Number.NEGATIVE_ZERO).to.be(-Infinity);
            expect(utilx.Number.WORD8).to.be(128);
            expect(utilx.Number.UWORD8).to.be(256);
            expect(utilx.Number.WORD16).to.be(32768);
            expect(utilx.Number.UWORD16).to.be(65536);
            expect(utilx.Number.WORD32).to.be(2147483648);
            expect(utilx.Number.UWORD32).to.be(4294967296);
            expect(utilx.Number.MAX_UINT32).to.be(4294967295);
            expect(utilx.Number.MAX_INT32).to.be(2147483647);
            expect(utilx.Number.MIN_INT32).to.be(-2147483648);
            expect(utilx.Number.MAX_UINT16).to.be(65535);
            expect(utilx.Number.MAX_INT16).to.be(32767);
            expect(utilx.Number.MIN_INT16).to.be(-32768);
            expect(utilx.Number.MAX_UINT8).to.be(255);
            expect(utilx.Number.MAX_INT8).to.be(127);
            expect(utilx.Number.MIN_INT8).to.be(-128);
            expect(utilx.Number.MAX_SAFE_INTEGER).to.be(9007199254740991);
            expect(utilx.Number.MIN_SAFE_INTEGER).to.be(-9007199254740991);
            expect(utilx.Number.UNSAFE_INTEGER).to.be(9007199254740992);
            expect(utilx.Number.POSITIVE_INFINITY).to.be(Infinity);
            expect(utilx.Number.NEGATIVE_INFINITY).to.be(-Infinity);
            expect(utilx.Number.MAX_VALUE).to.be(1.7976931348623157e+308);
            expect(utilx.Number.MIN_VALUE).to.be(5e-324);
            expect(utilx.Number.isNaN(utilx.Number.NaN)).to.be.ok();
            expect(utilx.Number.EPSILON).to.be(2.220446049250313e-16);
        });
    });
}());
