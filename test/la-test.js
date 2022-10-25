import { strict as assert } from 'assert';
import { v } from '../src/la.js';

test('vector addition', () => {
    assert.deepEqual(v(1, 3).add(v(4, 2)), v(5, 5));
});

test('scalar multiplication', () => {
    assert.deepEqual(v(1, 3).scale(3), v(3, 9));
});

test('dot product', () => {
    assert.equal(v(1, 3).dot(v(1, 3)), 10);
});

test('rotation', () => {
    const start = v(0, 5);
    const end = start.rotate(Math.PI / 2);
    const delta = 0.00001
    assert(Math.abs(end.x - 5) < delta);
    assert(Math.abs(end.y) < delta);
});

test('toString', () => {
    assert.equal(v(1, 3).toString(), '1 3');
});