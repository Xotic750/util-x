/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('basics', function (t) {
        t.strictEqual(utilx.noop(), privateUndefined, 'noop');
        t.strictEqual(utilx.privateUndefined, privateUndefined, 'undefined');
        t.strictEqual(utilx.toNumber('-1'), -1, 'toNumber');
        t.strictEqual(utilx.toNumber('0'), 0, 'toNumber');
        t.strictEqual(utilx.toNumber('1'), 1, 'toNumber');
        t.ok(isNaN(utilx.toNumber('NaN')), 'toNumber');
        t.strictEqual(utilx.toNumber('Infinity'), Infinity, 'toNumber');
        t.strictEqual(utilx.toNumber('-Infinity'), -Infinity, 'toNumber');
        t.ok(utilx.equal(-1, '-1'), 'equal');
        t.ok(utilx.equal(0, '0'), 'equal');
        t.ok(utilx.equal(1, '1'), 'equal');
        t.ok(utilx.equal(Infinity, 'Infinity'), 'equal');
        t.ok(utilx.equal(-Infinity, '-Infinity'), 'equal');
        t.ok(utilx.equal(isNaN(NaN), isNaN('NaN')), 'equal');
        t.ok(utilx.equal(-1, -1), 'equal');
        t.ok(utilx.equal(0, 0), 'equal');
        t.ok(utilx.equal(1, 1), 'equal');
        t.ok(utilx.equal(Infinity, Infinity), 'equal');
        t.ok(utilx.equal(-Infinity, -Infinity), 'equal');
        t.ok(utilx.equal(isNaN(NaN), isNaN(NaN)), 'equal');
        t.ok(utilx.notEqual(1, '2'), 'not equal');
        t.ok(utilx.notEqual(1, 2), 'not equal');
        t.ok(utilx.strictEqual(1, 1), 'strict equal');
        t.ok(utilx.notStrictEqual(1, '1'), 'not strict equal');
        t.ok(utilx.notStrictEqual(1, 2), 'not strict equal');
        t.ok(utilx.lt(1, 2), 'lt');
        t.ok(utilx.lte(1, 1), 'lte');
        t.ok(utilx.lte(1, 2), 'lte');
        t.ok(utilx.gt(1, 0), 'gt');
        t.ok(utilx.gte(1, 1), 'gte');
        t.strictEqual(utilx.mod(10, 3), 10 % 3, 'mod');
        t.strictEqual(utilx.mod(-10, 3), -10 % 3, 'mod');
        t.strictEqual(utilx.clamp(-10, -5, 5), -5, 'clamp');
        t.strictEqual(utilx.clamp(10, -5, 5), 5, 'clamp');
        t.strictEqual(utilx.clamp(-5, -5, 5), -5, 'clamp');
        t.strictEqual(utilx.clamp(5, -5, 5), 5, 'clamp');
        t.strictEqual(utilx.inRange(-10, -5, 5), false, 'clamp');
        t.strictEqual(utilx.inRange(10, -5, 5), false, 'clamp');
        t.strictEqual(utilx.inRange(-5, -5, 5), true, 'clamp');
        t.strictEqual(utilx.inRange(5, -5, 5), true, 'clamp');
        t.ok(utilx.isUndefined(), 'isUndefined');
        t.ok(utilx.isNull(null), 'isNull');
        t.ok(utilx.isUndefinedOrNull(), 'isUndefinedOrNull');
        t.ok(utilx.isUndefinedOrNull(null), 'isUndefinedOrNull');
        t.ok(utilx.isTrue(true), 'isTrue');
        t.ok(utilx.isFalse(false), 'isFalse');
        t.ok(utilx.isBoolean(true), 'isBoolean');
        t.ok(utilx.isBoolean(false), 'isBoolean');
        t.ok(utilx.isNumber(10), 'isNumber');
        t.ok(utilx.isZero(0), 'isZero');
        t.ok(utilx.isString(''), 'isString');
        t.ok(utilx.isEmptyString(''), 'isEmptyString');
        t.ok(utilx.isPrimitive(), 'isPrimitive');
        t.ok(utilx.isPrimitive(null), 'isPrimitive');
        t.ok(utilx.isPrimitive(''), 'isPrimitive');
        t.ok(utilx.isPrimitive(1), 'isPrimitive');
        t.ok(utilx.isPrimitive(false), 'isPrimitive');

        t.end();
    });
}());
