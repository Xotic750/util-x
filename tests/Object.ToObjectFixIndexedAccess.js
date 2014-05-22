/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.ToObjectFixIndexedAccess', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.Object.ToObjectFixIndexedAccess();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.ToObjectFixIndexedAccess(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.ToObjectFixIndexedAccess(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(typeof utilx.Object.ToObjectFixIndexedAccess(1)).to.be('object');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess(true)).to.be('object');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess('')).to.be('object');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess([])).to.be('object');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess({})).to.be('object');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess(Object('a'))).to.be('object');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess(utilx.Function.noop)).to.be('function');
            expect(typeof utilx.Object.ToObjectFixIndexedAccess(new Date())).to.be('object');
            expect(utilx.Object.ToObjectFixIndexedAccess(new RegExp('c')).toString()).to.be('/c/');
        });

        it('should be a boxed object', function () {
            var str = utilx.Object.ToObjectFixIndexedAccess('foo');

            expect(typeof str).to.be('object');
            expect(utilx.Object.ToClassString(str)).to.be('[object String]');
            expect(str.toString()).to.be('foo');
            expect(str[0]).to.be('f');
            expect(str[1]).to.be('o');
            expect(str[2]).to.be('o');
        });

        it('should be same object', function () {
            var testObject = [];

            expect(utilx.Object.ToObjectFixIndexedAccess(testObject)).to.be(testObject);
            testObject = {};
            expect(utilx.Object.ToObjectFixIndexedAccess(testObject)).to.be(testObject);
            testObject = utilx.Function.noop;
            expect(utilx.Object.ToObjectFixIndexedAccess(testObject)).to.be(testObject);
            testObject = Object('test');
            expect(utilx.Object.ToObjectFixIndexedAccess(testObject)).to.be(testObject);
            testObject = Object(true);
            expect(utilx.Object.ToObjectFixIndexedAccess(testObject)).to.be(testObject);
            testObject = Object(10);
            expect(utilx.Object.ToObjectFixIndexedAccess(testObject)).to.be(testObject);
        });
    });
}());
