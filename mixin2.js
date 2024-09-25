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
  __proto__: animalFunctionality,
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wag Tail"),
  play: () => console.log("Playing"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(Dog.prototype, dogFunctionality);

const pet = new Dog("Daisy");
pet.bark();
pet.wagTail();
pet.play();
pet.walk();
pet.sleep();
