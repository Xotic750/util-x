/*global require, describe, it, console */

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

            expect(function () {
                MySyntaxError = utilx.customError('MySyntaxError', SyntaxError);
            }).to.not.throwException();
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
                utilx.customError('FnError', utilx.noop);
            }).to.not.throwException();

            expect(function () {
                throw new MyError('test');
            }).to.throwException(function (e) {
                console.log('"' + e.toStringX() + '"');
                expect(e.toStringX()).to.be('MyError: test');
            });

            expect(function () {
                throw new MySyntaxError('test');
            }).to.throwException(function (e) {
                console.log('"' + e.toStringX() + '"');
                expect(e.toStringX()).to.be('MySyntaxError: test');
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

        describe('Detected ', function () {
            var MySyntaxErrorX = utilx.customError('MySyntaxError', SyntaxError),
                msex = new MySyntaxErrorX('test');

            try {
                if (!utilx.objectInstanceOf(msex, SyntaxError)) {
                    throw msex;
                }

                it('environment supports all Error types', function () {
                    expect(true).to.be(true);
                });
            } catch (e) {
                it('environment supports Error type', function () {
                    expect(utilx.objectInstanceOf(e, Error)).to.be(true);
                });
            }
        });
    });
}());
