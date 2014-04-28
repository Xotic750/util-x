/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectAssign', function () {
        it('returns the modified target object', function () {
            var target = {},
                returned = utilx.objectAssign(target, {
                    a: 1
                });

            expect(returned).to.equal(target);
        });

        it('should merge two objects', function () {
            var target = {
                a: 1
            },
                returned = utilx.objectAssign(target, {
                    b: 2
                });

            expect(returned).to.eql({
                a: 1,
                b: 2
            });
        });

        it('should not merge three objects', function () {
            var target = {
                    a: 1
                },
                source1 = {
                    b: 2
                },
                source2 = {
                    c: 3
                },
                returned = utilx.objectAssign(target, source1, source2);

            expect(returned).to.eql({
                a: 1,
                b: 2
            });
        });

        it('only iterates over own keys', function () {
            var Foo = function () {
                    return;
                },
                target = {
                    a: 1
                },
                foo,
                returned;

            Foo.prototype.bar = true;
            foo = new Foo();
            foo.baz = true;
            returned = utilx.objectAssign(target, foo);
            expect(returned).to.equal(target);
            expect(target).to.eql({
                baz: true,
                a: 1
            });
        });

        it('throws when target is not an object', function () {
            expect(function () {
                utilx.objectAssign(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('throws when source is not an object', function () {
            var target = {};

            expect(function () {
                utilx.objectAssign(target, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectAssign(target, utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectAssign(target, true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
