/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        expect = required.expect,
        utilx = required.utilx,
        create = required.Array.create,
        log = required.log;



    describe('Native array', function () {
        var A = Array,
            overflow = Math.pow(2, 32),
            maxLength = overflow - 1,
            maxLast = maxLength - 1,
            testSubject1,
            testSubject2,
            testSubject3,
            testValue;

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
                testSubject3 = [ , , ];
            }).to.not.throwException();
        });

        it('should have length of type number', function () {
            expect(typeof testSubject1.length).to.be('number');
            expect(typeof testSubject2.length).to.be('number');
            expect(typeof testSubject3.length).to.be('number');
        });

        it('should have a correct length between 0 and ' + maxLength, function () {
            var max = [];

            expect(function () {
                try {
                    max[maxLast] = 'ok';
                } catch (e) {
                    console.log('setting value of index at ' + maxLast);
                    throw e;
                }
            }).to.not.throwException();

            expect(log.toBe(max.length, maxLength)).to.be(maxLength);

            max = [];
            expect(function () {
                try {
                    max.length = maxLength;
                } catch (e) {
                    console.log('setting length to ' + maxLength);
                    throw e;
                }
            }).to.not.throwException();

            expect(log.toBe(max.length, maxLength)).to.be(maxLength);

            testValue = 10;
            expect(log.toBe(testSubject1.length, testValue)).to.be(testValue);

            testValue = 0;
            expect(log.toBe(testSubject2.length, testValue)).to.be(testValue);

            testValue = 2;
            expect(log.toBe(testSubject3.length, testValue)).to.be(testValue);

        });

        it('should throw RangeError if length is set to < 0', function () {
            expect(function () {
                var max = [];

                max.length = -1;
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('should throw RangeError if length is set to >= ' + overflow, function () {
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

        it('should not throw RangeError if property >= ' + maxLength + ' is set', function () {
            expect(function () {
                var max = [];

                max[maxLength] = 'ok';
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
            testSubject2 = [];
            expect(log.toEql(testSubject1, testSubject2)).to.eql(testSubject2);

            testSubject1 = [ , , , , ];
            testSubject2 = create('[ , , , , , ]');
            expect(log.toEql(testSubject1, testSubject2)).to.eql(testSubject2);

            testSubject1 = [2, 3, undefined, true, 'hej', null, false, 0, , 9];
            testSubject2 = create('[2, 3, undefined, true, "hej", null, false, 0, , 9]');
            expect(log.toEql(testSubject1, testSubject2)).to.eql(testSubject2);
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

        it('elements should show correctly with hasOwnProperty', function () {
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
            expect(testSubject1.hasOwnProperty(0)).to.be.ok();
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
            expect(testSubject1.hasOwnProperty(0)).to.be.ok();
            expect(testSubject1).to.eql(create(null));
        });

        it('assigning null element should increase the length', function () {
            testSubject1 = [];
            testSubject1[0] = null;
            expect(testSubject1.length).to.be(1);
        });

        it('push undefined element should create the element', function () {
            testSubject1 = [];
            Array.prototype.push.call(testSubject1, undefined);
            expect(testSubject1.hasOwnProperty(0)).to.be.ok();
            expect(testSubject1).to.eql(create(undefined));
        });

        it('push undefined element should increase the length', function () {
            testSubject1 = [];
            Array.prototype.push.call(testSubject1, undefined);
            expect(testSubject1.length).to.be(1);
        });

        it('push element should return the length', function () {
            testSubject1 = [];
            expect(Array.prototype.push.call(testSubject1, 2)).to.be(1);
        });

        it('push should work with object with length', function () {
            testSubject1 = {
                length: 0
            };

            testSubject2 = {
                0: 2,
                length: 1
            };

            Array.prototype.push.call(testSubject1, 2);
            expect(testSubject1).to.eql(testSubject2);
        });

        it('push should work with object without length', function () {
            testSubject1 = {};
            testSubject2 = {
                0: 2,
                length: 1
            };

            Array.prototype.push.call(testSubject1, 2);
            expect(log.toEql(testSubject1, testSubject2)).to.eql(testSubject2);
        });

        it('push should work with arguments', function () {
            testSubject1 = utilx.Function.returnArgs();

            testSubject2 = [2];
            Array.prototype.push.call(testSubject1, 2);
            expect(testSubject1.hasOwnProperty(0)).to.be.ok();
            expect(Array.prototype.slice.call(testSubject1)).to.eql(testSubject2);
        });

        it('unshift undefined element should create the element', function () {
            testSubject1 = [];
            Array.prototype.unshift.call(testSubject1, undefined);
            expect(testSubject1.hasOwnProperty(0)).to.be.ok();
            expect(testSubject1).to.eql(create(undefined));
        });

        it('unshift undefined element should increase the length', function () {
            testSubject1 = [];
            Array.prototype.unshift.call(testSubject1, undefined);
            expect(testSubject1.length).to.be(1);
        });

        it('unshift element should return the length', function () {
            testSubject1 = [];
            expect(log.toBe(Array.prototype.unshift.call(testSubject1, 2), 1)).to.be(1);
        });

        it('unshift should work with arguments', function () {
            testSubject1 = utilx.Function.returnArgs();

            testSubject2 = [2];
            Array.prototype.unshift.call(testSubject1, 2);
            expect(testSubject1.hasOwnProperty(0)).to.be.ok();
            expect(Array.prototype.slice.call(testSubject1)).to.eql(testSubject2);
        });

        it('unshift should work with object with length', function () {
            testSubject1 = {
                length: 0
            };

            testSubject2 = {
                0: 2,
                length: 1
            };

            Array.prototype.push.call(testSubject1, 2);
            expect(testSubject1).to.eql(testSubject2);
        });

        it('unshift should work with object without length', function () {
            testSubject1 = {};
            testSubject2 = {};
            Array.prototype.push.call(testSubject1, 2);
            expect(testSubject2).to.eql(testSubject2);
        });

        it('slice should work on array', function () {
            testSubject1 = create('[2, 3, undefined, true, "hej", null, false, 0, , 9]');
            testSubject2 = Array.prototype.slice.call(testSubject1);
            expect(log.toEql(testSubject1, testSubject2)).to.eql(testSubject2);
        });

        it('slice should work on object with length', function () {
            testSubject1 = {
                0: 2,
                1: 3,
                2: undefined,
                3: true,
                4: 'hej',
                5: null,
                6: false,
                7: 0,
                9: 9,
                length: 10
            };

            testSubject2 = create('[2, 3, undefined, true, "hej", null, false, 0, , 9]');
            testSubject3 = Array.prototype.slice.call(testSubject1);
            expect(log.toEql(testSubject3, testSubject2)).to.eql(testSubject2);
        });

        it('slice should work on object without length', function () {
            testSubject1 = {
                0: 2,
                1: 3,
                2: undefined,
                3: true,
                4: 'hej',
                5: null,
                6: false,
                7: 0,
                9: 9
            };

            testSubject2 = [];
            testSubject3 = Array.prototype.slice.call(testSubject1);
            expect(log.toEql(testSubject3, testSubject2)).to.eql(testSubject2);
        });

        it('slice should work on arguments', function () {
            testSubject1 = utilx.Function.returnArgs(2, 3, undefined, true, 'hej', null, false, 0, 8, 9);
            testSubject2 = create(2, 3, undefined, true, 'hej', null, false, 0, 8, 9);
            testSubject3 = Array.prototype.slice.call(testSubject1);
            expect(testSubject3).to.eql(testSubject2);
        });
    });
}());
