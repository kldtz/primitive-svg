class SVGElement {
  constructor(tag, attrs, content) {
    this.tag = tag;
    this.attrs = Object.fromEntries(
      Object.entries(attrs)
        .filter(([_k, v]) => v !== undefined)
        .map(([k, v]) => [k.replace("$", ":"), v])
    );
    this.content = content;
  }

  /**
   * Converts SVG definition to HTMLElement.
   * @returns {HTMLElement}
   */
  toElement() {
    const element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      this.tag
    );
    for (let [key, value] of Object.entries(this.attrs)) {
      if (key === "callback") {
        value(element);
      } else if (value) {
        element.setAttribute(key, value);
      }
    }
    if (this.content instanceof Array) {
      for (let child of this.content) {
        element.appendChild(child.toElement());
      }
    } else if (
      typeof this.content === "string" ||
      this.content instanceof String
    ) {
      element.textContent = this.content;
    }
    return element;
  }

  /**
   * Converts SVG definition to HTML string.
   * @returns {string}
   */
  toString() {
    const attrs = Object.entries(this.attrs)
      .sort()
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");
    const content =
      this.content instanceof Array
        ? this.content.map((c) => c.toString()).join("")
        : this.content !== undefined
        ? this.content
        : "";
    return `<${this.tag} ${attrs}>${content}</${this.tag}>`;
  }
}

export function a(
  {
    id,
    cls,
    download,
    href,
    hreflang,
    referrerpolicy,
    rel,
    target,
    type,
    style,
    callback,
  },
  content
) {
  return new SVGElement(
    "a",
    {
      class: cls,
      id,
      download,
      href,
      hreflang,
      referrerpolicy,
      rel,
      target,
      type,
      style,
      callback,
    },
    content
  );
}

export function circle({ id, cls, cx, cy, r, pathLength, style, callback, }, content) {
  return new SVGElement(
    "circle",
    { class: cls, id, cx, cy, r, pathLength, style, callback, },
    content
  );
}

export function defs({ id, cls, style, callback, }, content) {
  return new SVGElement("defs", { class: cls, id, style, callback, }, content);
}

export function ellipse(
  { id, cls, cx, cy, rx, ry, pathLength, style, callback, },
  content
) {
  return new SVGElement(
    "ellipse",
    { class: cls, id, cx, cy, rx, ry, pathLength, style, callback, },
    content
  );
}

export function g({ id, cls, style, callback, }, content) {
  return new SVGElement("g", { class: cls, id, style, callback, }, content);
}

export function line({ id, cls, x1, x2, y1, y2, pathLength, style, callback, }, content) {
  return new SVGElement(
    "line",
    { class: cls, id, x1, x2, y1, y2, pathLength, style, callback, },
    content
  );
}

export function marker(
  {
    id,
    cls,
    markerHeight,
    markerUnits,
    markerWidth,
    orient,
    preserveAspectRatio,
    refX,
    refY,
    viewBox,
    style,
    callback,
  },
  content
) {
  return new SVGElement(
    "marker",
    {
      class: cls,
      id,
      markerHeight,
      markerUnits,
      markerWidth,
      orient,
      preserveAspectRatio,
      refX,
      refY,
      viewBox,
      style,
      callback,
    },
    content
  );
}

export function path({ id, cls, d, pathLength, style, callback, }, content) {
  return new SVGElement(
    "path",
    { class: cls, id, d, pathLength, style, callback, },
    content
  );
}

export function polygon({ id, cls, points, pathLength, style, callback, }, content) {
  return new SVGElement(
    "polygon",
    { class: cls, id, points, pathLength, style, callback, },
    content
  );
}

export function polyline({ id, cls, points, pathLength, style, callback, }, content) {
  return new SVGElement(
    "polyline",
    { class: cls, id, points, pathLength, style, callback, },
    content
  );
}

export function rect(
  { id, cls, x, y, width, height, rx, ry, pathLength, style, callback, },
  content
) {
  return new SVGElement(
    "rect",
    { class: cls, id, x, y, width, height, rx, ry, pathLength, style, callback, },
    content
  );
}

export function svg(
  {
    id,
    cls,
    height,
    preserveAspectRatio,
    viewBox,
    width,
    x,
    y,
    style,
    callback,
    xmlns = "http://www.w3.org/2000/svg",
    "xmlns:link": xmlns$link = "http://www.w3.org/1999/xlink",
  },
  content
) {
  return new SVGElement(
    "svg",
    {
      class: cls,
      id,
      height,
      preserveAspectRatio,
      viewBox,
      width,
      x,
      y,
      style,
      callback,
      xmlns,
      xmlns$link,
    },
    content
  );
}

export function text(
  { id, cls, x, y, dx, dy, rotate, lengthAdjust, textLength, style, callback, },
  content
) {
  return new SVGElement(
    "text",
    { class: cls, id, x, y, dx, dy, rotate, lengthAdjust, textLength, style, callback, },
    content
  );
}

export function textPath(
  {
    id,
    cls,
    href,
    lengthAdjust,
    method,
    spacing,
    startOffset,
    textLength,
    style,
    callback,
  },
  content
) {
  return new SVGElement(
    "textPath",
    {
      class: cls,
      id,
      href,
      lengthAdjust,
      method,
      spacing,
      startOffset,
      textLength,
      style,
      callback,
    },
    content
  );
}

export function title({ id, cls, style, callback, }, content) {
  return new SVGElement("title", { class: cls, id, style, callback, }, content);
}

export function tspan(
  { id, cls, x, y, dx, dy, rotate, lengthAdjust, textLength, style, callback, },
  content
) {
  return new SVGElement(
    "tspan",
    { class: cls, id, x, y, dx, dy, rotate, lengthAdjust, textLength, style, callback, },
    content
  );
}

export function use({ id, cls, href, x, y, width, height, style, callback, }, content) {
  return use(
    "use",
    { class: cls, id, href, x, y, width, height, style, callback, },
    content
  );
}
