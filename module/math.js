const add = (x, y) => {
  return x + y;
};

const multiply = (x, y) => {
  return x * y;
};

const subtract = (x, y) => {
  return x - y;
};

const divide = (x, y) => {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
};

const welcome = () => {
  console.log("Welcome to Math Library function");
};

export { add, multiply, divide, welcome as default };
