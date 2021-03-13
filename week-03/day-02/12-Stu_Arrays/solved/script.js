// WRITE YOUR CODE HERE
let studentNames = ["John", "Jack", "Mark"];
console.log(studentNames.length);

console.log("Welcome to the class", studentNames[0]);
console.log("Welcome to the class", studentNames[1]);
console.log("Welcome to the class", studentNames[2]);

const oldName = studentNames[0];
studentNames.shift();

const newName = "Jay";
studentNames.unshift(newName);

if (oldName !== newName) {
  console.log(newName, "is in class");
}
