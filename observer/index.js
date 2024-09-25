import observable from "./observable.js";

function logger(data) {
  console.log(data);
}

function notifyUser(data) {
  console.log(data);
}

observable.subscribe(logger);
observable.subscribe(notifyUser);

function addUser() {
  observable.notify("User added successfully");
}

function deleteUser() {
  observable.notify("User deleted successfully");
}

const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");

addButton.addEventListener("click", addUser);
deleteButton.addEventListener("click", deleteUser);
