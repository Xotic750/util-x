/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;

    describe('Object.assign', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Object.assign();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Object.assign(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Object.assign(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if source argument is undefined', function () {
            expect(function () {
                utilx.Object.assign({}, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if source argument is null', function () {
            expect(function () {
                utilx.Object.assign({}, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('returns the modified target object', function () {
            var target = {},
                returned = utilx.Object.assign(target, {
                    a: 1
                });

            expect(returned).to.equal(target);
        });

        it('should return target if no sources', function () {
            var target = {};

            expect(utilx.Object.assign(target)).to.be(target);
        });

        it('should merge two objects', function () {
            var target = {
                a: 1
            },
                returned = utilx.Object.assign(target, {
                    b: 2
                });

            expect(returned).to.eql({
                a: 1,
                b: 2
            });
        });

        it('should merge three objects', function () {
            var target = {
                    a: 1
                },
                source1 = {
                    b: 2
                },
                source2 = {
                    c: 3
                },
                returned = utilx.Object.assign(target, source1, source2);

            expect(returned).to.eql({
                a: 1,
                b: 2,
                c: 3
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
            returned = utilx.Object.assign(target, foo);
            expect(returned).to.equal(target);
            expect(target).to.eql({
                baz: true,
                a: 1
            });
        });

        it('works with arrays', function () {
            var x = create(1, null, undefined, {}, 4, 5, 6),
                y = create(1, null, undefined, {}, 4, 5, 6);

            delete x[0];
            expect(utilx.Object.assign([1, 2, 3], [ , , , 4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
            expect(utilx.Object.assign([1, 2, 3], x)).to.eql(y);

            expect(utilx.Object.assign([1, 2, 3], {
                3: 4,
                4: 5,
                5: 6,
                length: 6
            })).to.eql([1, 2, 3, 4, 5, 6]);

            expect(utilx.Object.assign([1, 2, 3, 6, 7, 8, 9], {
                3: 4,
                4: 5,
                5: 6,
                length: 6
            })).to.eql([1, 2, 3, 4, 5, 6]);

            expect(utilx.Object.assign([1, 2, 3, 6, 7, 8, 9], {
                3: 4,
                4: 5,
                5: 6
            })).to.eql([1, 2, 3, 4, 5, 6, 9]);
        });

        it('should not throw when target is not an object', function () {
            expect(function () {
                utilx.Object.assign(true, {});
            }).to.not.throwException();

            expect(function () {
                utilx.Object.assign(1, {});
            }).to.not.throwException();

            expect(function () {
                utilx.Object.assign('a', {});
            }).to.not.throwException();
        });

        it('should not throw when source is not an object', function () {
            var target = {};

            expect(function () {
                utilx.Object.assign(target, true);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.assign(target, 1);
            }).to.not.throwException();
            expect(function () {
                utilx.Object.assign(target, 'a');
            }).to.not.throwException();
        });
    });
}());
