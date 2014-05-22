/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.ToObject', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.Object.ToObject();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.ToObject(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.ToObject(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(typeof utilx.Object.ToObject(1)).to.be('object');
            expect(typeof utilx.Object.ToObject(true)).to.be('object');
            expect(typeof utilx.Object.ToObject('')).to.be('object');
            expect(typeof utilx.Object.ToObject([])).to.be('object');
            expect(typeof utilx.Object.ToObject({})).to.be('object');
            expect(typeof utilx.Object.ToObject(Object('a'))).to.be('object');
            expect(typeof utilx.Object.ToObject(utilx.Function.noop)).to.be('function');
            expect(typeof utilx.Object.ToObject(new Date())).to.be('object');
            expect(utilx.Object.ToObject(new RegExp('c')).toString()).to.be('/c/');
        });
    });
}());
