// Write Your Code Below
function compareEquality(value1, value2) {
  if (value1 === value2) {
    console.log("They are equal in type and value");
  } else if (value1 == value2) {
    console.log("They are equal in value");
  } else {
    console.log("The values are not equal");
  }
}

compareEquality(1, 1);
compareEquality("1", 1);
compareEquality("bird", 1);
