/*global require, describe, it */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect,
        rxSplit = new RegExp('[\\r\\n]'),
        MyError = utilx.customError('MyError'),
        MySyntaxError = utilx.customError('MySyntaxError', SyntaxError);

    /*
    function Fn() {
        return;
    }
    */

    describe('customError', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.customError();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.customError(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.customError('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            /*
            expect(function () {
                utilx.customError('NullError', null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.customError('FnError', Fn);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            */

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(utilx.arrayFirst(utilx.stringSplit(e.toStringX(), rxSplit))).to.be('MyError: test');
            });

            expect(function () {
                throw new MySyntaxError('test');
            }).to.throwException(function (e) {
                expect(utilx.arrayFirst(utilx.stringSplit(e.toStringX(), rxSplit))).to.be('MySyntaxError: test');
            });

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(e).to.be.a(MyError);
            });

            expect(function () {
                throw new MySyntaxError('test');
            }).to.throwException(function (e) {
                expect(e).to.be.a(MySyntaxError);
            });

            expect(new MyError('test').message).to.be('test');
            expect(utilx.objectInstanceOf(new MyError('test'), Error)).to.be(true);
            expect(utilx.objectInstanceOf(new MyError('test'), MyError)).to.be(true);
            expect(utilx.objectInstanceOf(new MyError('test'), SyntaxError)).to.be(false);
            expect(utilx.objectInstanceOf(new MyError('test'), TypeError)).to.be(false);

            expect(new MySyntaxError('test').message).to.be('test');
            expect(utilx.objectInstanceOf(new MySyntaxError('test'), Error)).to.be(true);
            expect(utilx.objectInstanceOf(new MySyntaxError('test'), MySyntaxError)).to.be(true);
            expect(utilx.objectInstanceOf(new MySyntaxError('test'), TypeError)).to.be(false);
        });

        describe('should detect what the environment supports', function () {
            if (utilx.objectInstanceOf(new MySyntaxError('test'), SyntaxError)) {
                it('Environment supports other custom errors', function () {
                    expect(utilx.objectInstanceOf(new MySyntaxError('test'), SyntaxError), 'customError Environment supports other custom errors');
                });
            } else {
                it('Environment only supports custom Error', function () {
                    expect(utilx.objectInstanceOf(new MySyntaxError('test'), Error), 'customError Environment only supports custom Error');
                });
            }
        });
    });
}());
