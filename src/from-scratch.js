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
  #friends = [];
  #favFoods;
  constructor(name, age, favFoods = []) {
    this.name = name;
    this.age = age;
    this.#favFoods = favFoods;
  }

  greet() {
    console.log(`Hello! My name is ${this.name} and I am ${this.age}`);
  }

  addFavFood(food) {
    this.#favFoods.push(food);
    return [...this.#favFoods];
  }

  favFoods() {
    if (this.#favFoods.length === 0)
      console.log("I don't really like any foods...");
    if (this.#favFoods.length === 1)
      console.log(`${this.#favFoods[0]} is my FAVE!`);
    if (this.#favFoods.length > 1) {
      let foodList = "";

      for (let i = 0; i < this.#favFoods.length; i++) {
        if (i === 0) {
          foodList += this.#favFoods[i];
          continue;
        }

        if (this.#favFoods.length === 2) {
          foodList += ` or ${this.#favFoods[i]}`;
          continue;
        }

        if (i === this.#favFoods.length - 1) {
          foodList += `, or ${this.#favFoods[i]}`;
          continue;
        }

        foodList += `, ${this.#favFoods[i]}`;
      }

      console.log(`I love to eat ${foodList}. They are my FAVES!!!`);
    }

    return [...this.#favFoods];
  }

  makeFriend(person) {
    if (person instanceof Person) {
      this.#friends.push(person);
      return [...this.#friends];
    }
    return null;
  }

  friends() {
    if (this.#friends.length === 0) console.log("Oh wow. No friends...");
    if (this.#friends.length === 1)
      console.log(`${this.#friends[0].name} is your friend!`);
    if (this.#friends.length > 1) {
      let friendList = "";

      // build out the friendList string for any number of friends
      for (let i = 0; i < this.#friends.length; i++) {
        // start out with just the name
        if (i === 0) {
          friendList += this.#friends[i].name;
          continue;
        }

        // catch if the friend list is only 2 so no commas are added
        if (this.#friends.length === 2) {
          friendList += ` and ${this.#friends[i].name}`;
          continue;
        }

        // ending if there are more than 2 friends so comma is inserted
        if (i === this.#friends.length - 1) {
          friendList += `, and ${this.#friends[i].name}`;
          continue;
        }

        // every friend between first and last so comma is inserted
        friendList += `, ${this.#friends[i].name}`;
      }

      console.log(`${friendList} are your besties!!`);
    }

    return [...this.#friends];
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
