/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isnt', function () {
        var date = new Date(),
            rx = new RegExp('x'),
            err = new Error('y');

        it('should not throw an error in each case', function () {
            expect(utilx.Object.isnt(undefined, undefined)).to.not.be.ok();
            expect(utilx.Object.isnt(null, null)).to.not.be.ok();
            expect(utilx.Object.isnt(1, 1)).to.not.be.ok();
            expect(utilx.Object.isnt(true, true)).to.not.be.ok();
            expect(utilx.Object.isnt('x', 'x')).to.not.be.ok();
            expect(utilx.Object.isnt([1, 2, 3], [1, 2, 3])).to.be.ok();
            expect(utilx.Object.isnt(utilx.Function.returnArgs(), utilx.Function.returnArgs())).to.be.ok();
            expect(utilx.Object.isnt({}, {}), false, 'Object.isnt');
            expect(utilx.Object.isnt(utilx.Function.noop, utilx.Function.noop)).to.not.be.ok();
            expect(utilx.Object.isnt(new RegExp('c'), new RegExp('c'))).to.be.ok();
            expect(utilx.Object.isnt(new Date(2013, 11, 23), new Date(2013, 11, 23))).to.be.ok();
            expect(utilx.Object.isnt(new Error('x'), new Error('x'))).to.be.ok();
            expect(utilx.Object.isnt(date, date)).to.not.be.ok();
            expect(utilx.Object.isnt(rx, rx)).to.not.be.ok();
            expect(utilx.Object.isnt(err, err)).to.not.be.ok();
            expect(utilx.Object.isnt(NaN, NaN)).to.not.be.ok();
            expect(utilx.Object.isnt(0, -0)).to.be.ok();
            expect(utilx.Object.isnt(0, 0)).to.not.be.ok();
            expect(utilx.Object.isnt(0, +0)).to.not.be.ok();
        });
    });
}());
