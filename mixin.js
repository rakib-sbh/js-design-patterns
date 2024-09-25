class Dog {
  constructor(name) {
    this.name = name;
  }
}

const animalFunctionality = {
  walk: () => console.log("Walking"),
  sleep: () => console.log("Sleeping"),
};

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(dogFunctionality, animalFunctionality);
console.log(dogFunctionality);

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");
pet1.bark();
pet1.wagTail();
pet1.play();
pet1.sleep();
pet1.walk();
