/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toObjectFixIndexedAccess', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.toObjectFixIndexedAccess();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.toObjectFixIndexedAccess(privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.toObjectFixIndexedAccess(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(typeof utilx.toObjectFixIndexedAccess(1)).to.be('object');
            expect(typeof utilx.toObjectFixIndexedAccess(true)).to.be('object');
            expect(typeof utilx.toObjectFixIndexedAccess('')).to.be('object');
            expect(typeof utilx.toObjectFixIndexedAccess([])).to.be('object');
            expect(typeof utilx.toObjectFixIndexedAccess({})).to.be('object');
            expect(typeof utilx.toObjectFixIndexedAccess(Object('a'))).to.be('object');
            expect(typeof utilx.toObjectFixIndexedAccess(utilx.noop)).to.be('function');
            expect(typeof utilx.toObjectFixIndexedAccess(new Date())).to.be('object');
            expect(utilx.toObjectFixIndexedAccess(new RegExp('c')).toString()).to.be('/c/');
        });

        it('should be a boxed object', function () {
            var str = utilx.toObjectFixIndexedAccess('foo');

            expect(typeof str).to.be('object');
            expect(utilx.toObjectString(str)).to.be('[object String]');
            expect(str.toString()).to.be('foo');
            expect(str[0]).to.be('f');
            expect(str[1]).to.be('o');
            expect(str[2]).to.be('o');
        });
    });
}());
