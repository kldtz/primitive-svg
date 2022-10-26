# Primitive SVG

A primitive Javascript library for Scalable Vector Graphics in the sense that (a) it's a low-effort wrapper around SVG and (b) it gives you access to SVG 'primitives' without any abstraction.
This is for people who like to write SVGs manually, but need to do some calculations beyond `calc` in CSS or can't remember the attributes.

* Wrapper around SVG with autocompletion for attributes in modern IDE (e.g. VSCode)
* Vanilla JS, no dependencies, no transpiler. Just link the JS module.

If your project is already using a transpiler like Babel, you don't need this library, just use JSX.

## Usage

This does what you think it does.

```js
import { circle, svg, text } from './svg.js';

const diagram = svg({id: 'diagram', width: 200, height: 200}, [
    circle({cx: 100, cy: 100, r: 90, style: "fill: ivory; stroke: black;"}),
    text({x: 100, y: 100, style: "text-anchor: middle;"}, "Hello, world!"),
]);

// String representation of SVG
console.log(diagram.toString());
// SVG element that you can append to your document
document.body.appendChild(diagram.toElement());
```

The constant `diagram` constains an object which you can convert to a DOM element or a string.

## Complete Example

I guess it's best to learn from an example. 
We're going to create the following diagram, which illustrates the Pythagorean theorem.

<p align="middle">
<img src="https://user-images.githubusercontent.com/24353834/197812033-d2d2d2f2-7ff3-4654-b51f-caa484580790.svg">
</p>

Start by including the scripts as modules: `svg.js` has all the SVG-related stuff (you guessed it), `la.js` gives you some basic 2D linear algebra, `diagram.js` will contain the code for the diagram.

```html
<script src="svg.js" type="module"></script>
<script src="la.js" type="module"></script>
<script src="diagram.js" type="module"></script>
```

Import the SVG elements you need from `svg.js` and (optionally) the factory method `v` from `la.js`, which creates a vector object with some useful methods.
There are different ways to draw the diagram. 
We'll use *a* and *b* as parameters and draw four triangles, each rotated by 90°.
    
```javascript
import { g, path, svg, text } from './svg.js';
import { v } from './la.js';

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
```

Purely presentational attributes are defined separately via CSS.

```css
.triangle {
    fill: goldenrod;
    stroke: black;
    stroke-width: 2px;
}

.label {
    text-anchor: middle;
    dominant-baseline: middle;
    font-size: 16px;
}

svg {
    background-color: white;
}
```


## Contributing

This library is not complete. 
If some SVG elements you need are missing or some vector operations, please submit a pull request.
