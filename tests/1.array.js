/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        expect = required.expect,
        create = required.Array.create;

    describe('Native array', function () {
        var A = Array,
            overflow = Math.pow(2, 32),
            maxLength = overflow - 1,
            maxLast = maxLength - 1,
            testSubject1,
            testSubject2,
            testSubject3;

        it('should not throw error when creating array using new Array(...*)', function () {
            expect(function () {
                testSubject1 = new A();
                testSubject2 = new A(5);
                testSubject3 = new A(2, 3, undefined, true, 'hej', null, false, 0, 8, 9);
            }).to.not.throwException();
        });

        it('should not throw error when creating array using the literal form [...*]', function () {
            expect(function () {
                testSubject1 = [2, 3, undefined, true, 'hej', null, false, 0, , 9];
                testSubject2 = [];
                testSubject3 = [ , , , ];
            }).to.not.throwException();
        });

        it('should have length of type number', function () {
            expect(typeof testSubject1.length).to.be('number');
            expect(typeof testSubject2.length).to.be('number');
            expect(typeof testSubject3.length).to.be('number');
        });

        it('should have a correct length between 0 and 2^32', function () {
            var max = [];

            expect(function () {
                max[maxLast] = 'ok';
            }).to.not.throwException();

            expect(max.length).to.be(maxLength);

            max = [];
            expect(function () {
                max.length = maxLength;
            }).to.not.throwException();

            expect(max.length).to.be(maxLength);

            expect(testSubject1.length).to.be(10);
            expect(testSubject2.length).to.be(0);
            expect(testSubject3.length).to.be(3);

        });

        it('should throw RangeError if length is set to < 0', function () {
            expect(function () {
                var max = [];

                max.length = -1;
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('should throw RangeError if length is set to >= 2^32', function () {
            expect(function () {
                var max = [];

                max.length = overflow;
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('should not throw RangeError if property index < 0 is set', function () {
            expect(function () {
                var max = [];

                max[-1] = 'ok';
            }).to.not.throwException();
        });

        it('should not throw RangeError if property >= 2^32 is set', function () {
            expect(function () {
                var max = [];

                max[overflow] = 'ok';
            }).to.not.throwException();
        });

        it('new Array(...*) should have correct elements', function () {
            testSubject1 = new A();
            expect(testSubject1).to.eql([]);
            testSubject2 = new A(5);
            expect(testSubject2).to.eql(create('[ , , , , , ]'));
            testSubject3 = new A(2, 3, undefined, true, 'hej', null, false, 0, 8, 9);
            expect(testSubject3).to.eql(create(2, 3, undefined, true, 'hej', null, false, 0, 8, 9));
        });

        it('[...*] should have correct elements', function () {
            testSubject1 = [];
            expect(testSubject1).to.eql([]);
            testSubject2 = [ , , , , , ];
            expect(testSubject2).to.eql(create('[ , , , , , ]'));
            testSubject3 = [2, 3, undefined, true, 'hej', null, false, 0, , 9];
            expect(testSubject3).to.eql(create('[2, 3, undefined, true, "hej", null, false, 0, , 9]'));
        });

        it('using delete on an element should not throw an error', function () {
            expect(function () {
                delete testSubject3[1];
                delete testSubject3[8];
            }).to.not.throwException();
        });

        it('elements should give correct values when index accessed', function () {
            expect(testSubject3[0]).to.be(2);
            expect(testSubject3[1]).to.be(undefined);
            expect(testSubject3[2]).to.be(undefined);
            expect(testSubject3[3]).to.be(true);
            expect(testSubject3[4]).to.be('hej');
            expect(testSubject3[5]).to.be(null);
            expect(testSubject3[6]).to.be(false);
            expect(testSubject3[7]).to.be(0);
            expect(testSubject3[8]).to.be(undefined);
            expect(testSubject3[9]).to.be(9);
        });

        it('elements should show correctly with in', function () {
            expect(0 in testSubject3).to.be.ok();
            expect(1 in testSubject3).to.not.be.ok();
            expect(2 in testSubject3).to.be.ok();
            expect(3 in testSubject3).to.be.ok();
            expect(4 in testSubject3).to.be.ok();
            expect(5 in testSubject3).to.be.ok();
            expect(6 in testSubject3).to.be.ok();
            expect(7 in testSubject3).to.be.ok();
            expect(8 in testSubject3).to.not.be.ok();
            expect(9 in testSubject3).to.be.ok();
        });

        it('elements should show correctly with hasownProperty', function () {
            expect(testSubject3.hasOwnProperty(0)).to.be.ok();
            expect(testSubject3.hasOwnProperty(1)).to.not.be.ok();
            expect(testSubject3.hasOwnProperty(2)).to.be.ok();
            expect(testSubject3.hasOwnProperty(3)).to.be.ok();
            expect(testSubject3.hasOwnProperty(4)).to.be.ok();
            expect(testSubject3.hasOwnProperty(5)).to.be.ok();
            expect(testSubject3.hasOwnProperty(6)).to.be.ok();
            expect(testSubject3.hasOwnProperty(7)).to.be.ok();
            expect(testSubject3.hasOwnProperty(8)).to.not.be.ok();
            expect(testSubject3.hasOwnProperty(9)).to.be.ok();
        });

        it('assigning undefined element should create the element', function () {
            testSubject1 = [];
            testSubject1[0] = undefined;
            expect(testSubject1).to.eql(create(undefined));
        });

        it('assigning undefined element should increase the length', function () {
            testSubject1 = [];
            testSubject1[0] = undefined;
            expect(testSubject1.length).to.be(1);
        });

        it('assigning null element should create the element', function () {
            testSubject1 = [];
            testSubject1[0] = null;
            expect(testSubject1).to.eql(create(null));
        });

        it('assigning null element should increase the length', function () {
            testSubject1 = [];
            testSubject1[0] = null;
            expect(testSubject1.length).to.be(1);
        });

        it('pushing undefined element should create the element', function () {
            testSubject1 = [];
            testSubject1.push(undefined);
            expect(testSubject1).to.eql(create(undefined));
        });

        it('pushing undefined element should increase the length', function () {
            testSubject1 = [];
            testSubject1.push(undefined);
            expect(testSubject1.length).to.be(1);
        });
    });
}());
