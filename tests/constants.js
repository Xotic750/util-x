/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('constants', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.POSITIVE_ZERO).to.be(0);
            expect(utilx.NEGATIVE_ZERO).to.be(0);
            expect(1 / utilx.POSITIVE_ZERO).to.be(Infinity);
            expect(1 / utilx.NEGATIVE_ZERO).to.be(-Infinity);
            expect(utilx.WORD8).to.be(128);
            expect(utilx.UWORD8).to.be(256);
            expect(utilx.WORD16).to.be(32768);
            expect(utilx.UWORD16).to.be(65536);
            expect(utilx.WORD32).to.be(2147483648);
            expect(utilx.UWORD32).to.be(4294967296);
            expect(utilx.MAX_UINT32).to.be(4294967295);
            expect(utilx.MAX_INT32).to.be(2147483647);
            expect(utilx.MIN_INT32).to.be(-2147483648);
            expect(utilx.MAX_UINT16).to.be(65535);
            expect(utilx.MAX_INT16).to.be(32767);
            expect(utilx.MIN_INT16).to.be(-32768);
            expect(utilx.MAX_UINT8).to.be(255);
            expect(utilx.MAX_INT8).to.be(127);
            expect(utilx.MIN_INT8).to.be(-128);
            expect(utilx.MAX_INTEGER).to.be(9007199254740991);
            expect(utilx.MIN_INTEGER).to.be(-9007199254740991);
            expect(utilx.UNSAFE_INTEGER).to.be(9007199254740992);
            expect(utilx.POSITIVE_INFINITY).to.be(Infinity);
            expect(utilx.NEGATIVE_INFINITY).to.be(-Infinity);
            expect(utilx.MAX_VALUE).to.be(1.7976931348623157e+308);
            expect(utilx.MIN_VALUE).to.be(5e-324);
            expect(utilx.numberIsNaN(utilx.NAN)).to.be.ok();
            expect(utilx.EPSILON).to.be(2.220446049250313e-16);
        });
    });
}());
