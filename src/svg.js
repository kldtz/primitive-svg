class SVGElement {
  constructor(tag, cls, attrs, content) {
    this.tag = tag;
    attrs["class"] = cls;
    this.attrs = Object.fromEntries(
      Object.entries(attrs)
        .filter(([_k, v]) => v !== undefined)
        .map(([k, v]) => [k.replace("$", ":"), v])
    );
    this.content = content;
  }

  toElement() {
    const element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      this.tag
    );
    for (let [key, value] of Object.entries(this.attrs)) {
      if (value) {
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
  },
  content
) {
  return new SVGElement(
    "a",
    cls,
    { id, download, href, hreflang, referrerpolicy, rel, target, type, style },
    content
  );
}

export function circle({ id, cls, cx, cy, r, pathLength, style }, content) {
  return new SVGElement(
    "circle",
    cls,
    { id, cx, cy, r, pathLength, style },
    content
  );
}

export function defs({ id, cls, style }, content) {
  return new SVGElement("defs", cls, { id, style }, content);
}

export function ellipse(
  { id, cls, cx, cy, rx, ry, pathLength, style },
  content
) {
  return new SVGElement(
    "ellipse",
    cls,
    { id, cx, cy, rx, ry, pathLength, style },
    content
  );
}

export function g({ id, cls, style }, content) {
  return new SVGElement("g", cls, { id, style }, content);
}

export function line({ id, cls, x1, x2, y1, y2, pathLength, style }, content) {
  return new SVGElement(
    "line",
    cls,
    { id, x1, x2, y1, y2, pathLength, style },
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
  },
  content
) {
  return new SVGElement(
    "marker",
    cls,
    {
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
    },
    content
  );
}

export function path({ id, cls, d, pathLength, style }, content) {
  return new SVGElement("path", cls, { id, d, pathLength, style }, content);
}

export function polygon({ id, cls, points, pathLength, style }, content) {
  return new SVGElement(
    "polygon",
    cls,
    { id, points, pathLength, style },
    content
  );
}

export function polyline({ id, cls, points, pathLength, style }, content) {
  return new SVGElement(
    "polyline",
    cls,
    { id, points, pathLength, style },
    content
  );
}

export function rect(
  { id, cls, x, y, width, height, rx, ry, pathLength, style },
  content
) {
  return new SVGElement(
    "rect",
    cls,
    { id, x, y, width, height, rx, ry, pathLength, style },
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
    xmlns = "http://www.w3.org/2000/svg",
    "xmlns:link": xmlns$link = "http://www.w3.org/1999/xlink",
  },
  content
) {
  return new SVGElement(
    "svg",
    cls,
    {
      id,
      height,
      preserveAspectRatio,
      viewBox,
      width,
      x,
      y,
      style,
      xmlns,
      xmlns$link,
    },
    content
  );
}

export function text(
  { id, cls, x, y, dx, dy, rotate, lengthAdjust, textLength, style },
  content
) {
  return new SVGElement(
    "text",
    cls,
    { id, x, y, dx, dy, rotate, lengthAdjust, textLength, style },
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
  },
  content
) {
  return new SVGElement(
    "textPath",
    cls,
    { id, href, lengthAdjust, method, spacing, startOffset, textLength, style },
    content
  );
}

export function tspan(
  { id, cls, x, y, dx, dy, rotate, lengthAdjust, textLength, style },
  content
) {
  return new SVGElement(
    "tspan",
    cls,
    { id, x, y, dx, dy, rotate, lengthAdjust, textLength, style },
    content
  );
}

export function use({ id, cls, href, x, y, width, height, style }, content) {
  return use("use", cls, { id, href, x, y, width, height, style }, content);
}
