import { strict as assert } from 'assert';
import { circle, svg, text } from '../src/svg.js';

test('readme example svg', () => {
    const diagram = svg({ id: 'diagram', width: 200, height: 200 }, [
        circle({ id: 'id', cx: 100, cy: 100, r: 90, style: "fill: ivory; stroke: black;" }),
        text({ cls: 'text', x: 100, y: 100, style: "text-anchor: middle;" },
            "Hello, world!"),
    ]);
    assert.equal(diagram.toString(), [
        '<svg height="200" id="diagram" width="200" ',
        'xmlns="http://www.w3.org/2000/svg" xmlns:link="http://www.w3.org/1999/xlink">',
        '<circle cx="100" cy="100" id="id" r="90" style="fill: ivory; stroke: black;">',
        '</circle>',
        '<text class="text" style="text-anchor: middle;" x="100" y="100">',
        'Hello, world!',
        '</text>',
        '</svg>'
    ].join(""));
});