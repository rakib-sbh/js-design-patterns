const button = document.getElementById("button");

button.addEventListener("click", async () => {
  const module = await import("./math.js");
  console.log("Add", module.add(3, 10));
  console.log("Multiply", module.multiply(5, 10));
  module.default();

  button.innerText = "Please check console";
});

// with callback
button.addEventListener("click", () => {
  import("./math.js").then((module) => {
    console.log("Add", module.add(3, 19));
    console.log("Multiply", module.multiply(5, 12));
    module.default();

    button.innerText = "Again check the console";
  });
});
