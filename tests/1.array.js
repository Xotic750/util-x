/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;


    describe('Test native array environment for most serious bugs', function () {
        var A = Array,
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

            max.length = Math.pow(2, 32) - 1;

            expect(testSubject1.length).to.be(10);
            expect(testSubject2.length).to.be(0);
            expect(testSubject3.length).to.be(3);
            expect(max.length).to.be(Math.pow(2, 32) - 1);
        });

        it('should throw RangeError if length is set to -1', function () {
            expect(function () {
                var max = [];

                max.length = -1;
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('should throw RangeError if length is set to 2^32', function () {
            expect(function () {
                var max = [];

                max.length = Math.pow(2, 32);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('should not throw RangeError if property < 0 is set', function () {
            expect(function () {
                var max = [];

                max[-1] = 'ok';
            }).to.not.throwException();
        });

        it('should not throw RangeError if property > 2^32 is set', function () {
            expect(function () {
                var max = [];

                max[Math.pow(2, 32)] = 'ok';
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
            testSubject3 = [2, 3, undefined, true, 'hej', null, false, 0, 8, 9];
            expect(testSubject3).to.eql(create(2, 3, undefined, true, 'hej', null, false, 0, 8, 9));

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

        it('using delete on an element should not throw an error', function () {
            expect(function () {
                testSubject1 = [2, 3, undefined, true, 'hej', null, false, 0, , 9];
                testSubject2 = [];
                testSubject3 = [ , , , ];
                delete testSubject1[1];
                delete testSubject1[8];
            }).to.not.throwException();
        });

        it('Array objects behave well in this environment', function () {
            if (testSubject1.length !== 10 ||
                    testSubject2.length !== 0 ||
                    testSubject3.length !== 3 ||
                    testSubject1[0] !== 2 ||
                    testSubject1[1] !== undefined ||
                    testSubject1[2] !== undefined ||
                    testSubject1[3] !== true ||
                    testSubject1[4] !== 'hej' ||
                    testSubject1[5] !== null ||
                    testSubject1[6] !== false ||
                    testSubject1[7] !== 0 ||
                    testSubject1[8] !== undefined ||
                    testSubject1[9] !== 9 ||

                    utilx.Object.hasOwn(testSubject1, 0) !== true ||
                    utilx.Object.hasOwn(testSubject1, 1) !== false ||
                    utilx.Object.hasOwn(testSubject1, 2) !== true ||
                    utilx.Object.hasOwn(testSubject1, 3) !== true ||
                    utilx.Object.hasOwn(testSubject1, 4) !== true ||
                    utilx.Object.hasOwn(testSubject1, 5) !== true ||
                    utilx.Object.hasOwn(testSubject1, 6) !== true ||
                    utilx.Object.hasOwn(testSubject1, 7) !== true ||
                    utilx.Object.hasOwn(testSubject1, 8) !== false ||
                    utilx.Object.hasOwn(testSubject1, 9) !== true ||

                    utilx.Object.hasOwn(testSubject1, 0) !== true ||
                    utilx.Object.hasOwn(testSubject1, 1) !== false ||
                    utilx.Object.hasOwn(testSubject1, 2) !== true ||
                    utilx.Object.hasOwn(testSubject1, 3) !== true ||
                    utilx.Object.hasOwn(testSubject1, 4) !== true ||
                    utilx.Object.hasOwn(testSubject1, 5) !== true ||
                    utilx.Object.hasOwn(testSubject1, 6) !== true ||
                    utilx.Object.hasOwn(testSubject1, 7) !== true ||
                    utilx.Object.hasOwn(testSubject1, 8) !== false ||
                    utilx.Object.hasOwn(testSubject1, 9) !== true) {

                console.log('#####################################################');
                console.log('# A object has serious bugs in this environment #');
                console.log('#####################################################');
                expect().fail();
            }
        });
    });
}());
