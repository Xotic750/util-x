/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('argToObject', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.argToObject();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.argToObject(privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.argToObject(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(typeof utilx.argToObject(1)).to.be('object');
            expect(typeof utilx.argToObject(true)).to.be('object');
            expect(typeof utilx.argToObject('')).to.be('object');
            expect(typeof utilx.argToObject([])).to.be('object');
            expect(typeof utilx.argToObject({})).to.be('object');
            expect(typeof utilx.argToObject(Object('a'))).to.be('object');
            expect(typeof utilx.argToObject(utilx.noop)).to.be('function');
            expect(typeof utilx.argToObject(new Date())).to.be('object');
            expect(utilx.argToObject(new RegExp('c')).toString()).to.be('/c/');
        });
    });
}());
