import { g, path, svg, text } from '../src/svg.js';
import { v } from '../src/la.js';

function triangle(p1, angle, a, b, p) {
    const p2 = p1.add(v(b, 0).rotate(angle));
    const p3 = p1.add(v(0, a).rotate(angle));
    const labels = [
        ['a', p1.add(v(3 * p, a / 2).rotate(angle))],
        ['b', p1.add(v(b / 2, 15).rotate(angle))],
        ['c', p2.add(v(3 * p, a / 2).add(v(-b / 2, 3 * p)).rotate(angle))],
    ];
    return g({}, [
        path({ cls: 'triangle', d: `M ${p1} L ${p2} ${p3} z` }),
        ...labels.map(([t, p]) => text({ cls: 'label', x: p.x, y: p.y }, t)),
    ]);
}

function diagram(a, b, p) {
    const l = a + b;
    return svg({ width: l + 2 * p, height: l + 2 * p }, [
        [v(p, p), 0],
        [v(p, l + p), Math.PI / 2],
        [v(l + p, l + p), Math.PI],
        [v(l + p, p), 3 * Math.PI / 2]
    ].map(([p1, angle]) => triangle(p1, angle, a, b, p)));
}

document.body.appendChild(diagram(120, 180, 5).toElement());
