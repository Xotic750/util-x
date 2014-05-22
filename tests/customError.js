/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('customError', function () {
        var MyError,
            MySyntaxError;

        it('setting up should not throw an error', function () {
            expect(function () {
                MyError = utilx.customError('MyError');
            }).to.not.throwException();

            expect(MyError.prototype.constructor).to.be(MyError);

            expect(function () {
                MySyntaxError = utilx.customError('MySyntaxError', SyntaxError);
            }).to.not.throwException();

            expect(MySyntaxError.prototype.constructor).to.be(MySyntaxError);
        });

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

            expect(function () {
                utilx.customError('NullError', null);
            }).to.not.throwException();

            expect(function () {
                utilx.customError('FnError', utilx.Function.noop);
            }).to.not.throwException();

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(utilx.RegExp.test(new RegExp('^MyError: test'), e.toString())).to.be.ok();
            });

            expect(function () {
                throw new MySyntaxError('test');
            }).to.throwException(function (e) {
                expect(utilx.RegExp.test(new RegExp('^MySyntaxError: test'), e.toString())).to.be.ok();
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
            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(e).to.be.a(Error);
            });

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(e).to.be.a(MyError);
            });

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(e).to.not.be.a(SyntaxError);
            });

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(e).to.not.be.a(TypeError);
            });

            expect(utilx.Object.instanceOf(new MyError('test'), Error)).to.be(true);
            expect(utilx.Object.instanceOf(new MyError('test'), MyError)).to.be(true);
            expect(utilx.Object.instanceOf(new MyError('test'), SyntaxError)).to.be(false);
            expect(utilx.Object.instanceOf(new MyError('test'), TypeError)).to.be(false);

            expect(new MySyntaxError('test').message).to.be('test');
            expect(utilx.Object.instanceOf(new MySyntaxError('test'), Error)).to.be(true);
            expect(utilx.Object.instanceOf(new MySyntaxError('test'), MySyntaxError)).to.be(true);
            expect(utilx.Object.instanceOf(new MySyntaxError('test'), TypeError)).to.be(false);

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                expect(utilx.RegExp.test(new RegExp('^MyError: test'), e.toString())).to.be.ok();
                if (utilx.String.isString(e.stack)) {
                    /*global console */
                    console.log('# An example stack trace');
                    console.log('# ' + e.stack.split('\n').join('\n# '));
                }

            });
        });

        describe('Detected ', function () {
            var MySyntaxErrorX = utilx.customError('MySyntaxError', SyntaxError),
                msex = new MySyntaxErrorX('test');

            try {
                if (!utilx.Object.instanceOf(msex, SyntaxError)) {
                    throw msex;
                }

                it('environment supports all Error types', function () {
                    expect(true).to.be(true);
                });
            } catch (e) {
                it('environment supports Error type', function () {
                    expect(utilx.Object.instanceOf(e, Error)).to.be(true);
                });
            }
        });
    });
}());
