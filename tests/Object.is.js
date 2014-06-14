/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.is', function () {
        var date = new Date(),
            rx = new RegExp('x'),
            err = new Error('y');

        it('should not throw an error in each case', function () {
            expect(utilx.Object.is(undefined, undefined)).to.be.ok();
            expect(utilx.Object.is(null, null)).to.be.ok();
            expect(utilx.Object.is(1, 1)).to.be.ok();
            expect(utilx.Object.is(true, true)).to.be.ok();
            expect(utilx.Object.is('x', 'x')).to.be.ok();
            expect(utilx.Object.is([1, 2, 3], [1, 2, 3])).to.not.be.ok();
            expect(utilx.Object.is(required.returnArgs(), required.returnArgs())).to.not.be.ok();
            expect(utilx.Object.is({}, {}), false, 'Object.is');
            expect(utilx.Object.is(required.noop, required.noop)).to.be.ok();
            expect(utilx.Object.is(new RegExp('c'), new RegExp('c'))).to.not.be.ok();
            expect(utilx.Object.is(new Date(2013, 11, 23), new Date(2013, 11, 23))).to.not.be.ok();
            expect(utilx.Object.is(new Error('x'), new Error('x'))).to.not.be.ok();
            expect(utilx.Object.is(date, date)).to.be.ok();
            expect(utilx.Object.is(rx, rx)).to.be.ok();
            expect(utilx.Object.is(err, err)).to.be.ok();
            expect(utilx.Object.is(NaN, NaN)).to.be.ok();
            expect(utilx.Object.is(0, -0)).to.not.be.ok();
            expect(utilx.Object.is(0, 0)).to.be.ok();
            expect(utilx.Object.is(0, +0)).to.be.ok();
        });
    });
}());
