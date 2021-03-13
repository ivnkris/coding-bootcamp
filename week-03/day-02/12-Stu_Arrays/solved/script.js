// WRITE YOUR CODE HERE
let studentNames = ["John", "Jack", "Mark"];
const newName = "Jay";

console.log("Welcome to the class " + studentNames[0]);
console.log("Welcome to the class " + studentNames[1]);
console.log("Welcome to the class " + studentNames[2]);

studentNames.shift();

studentNames.unshift(newName);

if (studentNames[0] === newName) {
  console.log(studentNames[0] + " is in class");
}
