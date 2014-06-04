/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;

    describe('Array.of', function () {
        var test = create(1, null, undefined);

        it('test array should be length of 3 or have environment problem with array', function () {
            expect(test.length).to.be(3);
        });

        it('test arguments should be length of 3 or have environment problem with arguments', function () {
            expect(utilx.Function.returnArgs(1, null, undefined).length).to.be(3);
        });

        it('test array from of should be length of 3 or possible slice problem', function () {
            expect(utilx.Array.of(1, null, undefined).length).to.be(3);
        });

        it('test native slice on arguments', function () {
            var arr = utilx.Array.slice(utilx.Function.returnArgs(1, null, undefined));

            expect(arr.length).to.be(3);
            expect(arr).to.eql(test);
        });

        it('test utilx slice on arguments', function () {
            var arr = utilx.Array.slice(utilx.Function.returnArgs(1, null, undefined));

            expect(arr.length).to.be(3);
            expect(arr).to.eql(test);
        });

        it('should create correct array of arguments equal to test array', function () {
            expect(utilx.Array.of(1, null, undefined)).to.eql(test);
        });
    });
}());
