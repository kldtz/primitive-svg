class Vec {
  /**
   * 2D vector.
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * String representation of the form "x y".
   * @returns {string}
   */
  toString() {
    return `${this.x} ${this.y}`;
  }

  /**
   * Vector addition.
   * @param {Vec} b 
   * @returns {Vec}
   */
  add(b) {
    return new Vec(this.x + b.x, this.y + b.y);
  }

  /**
   * Dot product.
   * @param {number} b 
   * @returns {number}
   */
  dot(b) {
    return this.x * b.x + this.y * b.y;
  }

  /**
   * L2-norm.
   * @returns {number}
   */
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  /**
   * Scalar multiplication.
   * @param {number} k 
   * @returns {Vec}
   */
  scale(k) {
    return new Vec(this.x * k, this.y * k);
  }

  /**
   * Counterclockwise rotation (for positive angles).
   * @param {number} angle 
   * @returns {Vec}
   */
  rotate(angle) {
    return new Vec(
      this.x * Math.cos(angle) + this.y * Math.sin(angle),
      -this.x * Math.sin(angle) + this.y * Math.cos(angle)
    );
  }
}

/**
 * One-letter factory method for Vec.
 * @param {number} x 
 * @param {number} y 
 * @returns {Vec}
 */
export function v(x, y) {
  return new Vec(x, y);
}
