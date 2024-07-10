class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(length, width) {
    super(length, width, length, width);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getDiagonal() {
    return this.side1 * Math.sqrt(2);
  }
}

/* Be creative with this one! */
class Person {
  constructor(name, age) {}
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
