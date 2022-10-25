export class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `${this.x} ${this.y}`
    }

    add(b) {
        return new Vec(this.x + b.x, this.y + b.y);
    }

    dot(b) {
        return this.x * b.x + this.y * b.y;
    }

    scale(k) {
        return new Vec(this.x * k, this.y * k);
    }

    rotate(angle) {
        return new Vec(this.x * Math.cos(angle) + this.y * Math.sin(angle),
            - this.x * Math.sin(angle) + this.y * Math.cos(angle));
    }
}

export function v(x, y) {
    return new Vec(x, y);
}