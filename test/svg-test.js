import { strict as assert } from 'assert';
import { circle, svg, text } from '../src/svg.js';

test('svg', () => {
    const diagram = svg({ id: 'diagram', width: 200, height: 200 }, [
        circle({ cx: 100, cy: 100, r: 90, style: "fill: ivory; stroke: black;" }),
        text({ x: 100, y: 100, style: "text-anchor: middle;" }, "Hello, world!"),
    ]);
    assert.equal(diagram.toString(), [
        '<svg height="200" id="diagram" width="200">',
        '<circle cx="100" cy="100" r="90" style="fill: ivory; stroke: black;">',
        '</circle>',
        '<text style="text-anchor: middle;" x="100" y="100">',
        'Hello, world!',
        '</text>',
        '</svg>'
    ].join(""));
});