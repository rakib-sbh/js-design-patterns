const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "Rakib",
  lastName: "Talukder",
  email: "rakib.t.rupom@gmail.com",
});

console.log(user1.fullName());

const createObjectFromArray = ([key, value]) => ({ [key]: value });

const person = createObjectFromArray(["name", "rupom"]);

console.log(person);
