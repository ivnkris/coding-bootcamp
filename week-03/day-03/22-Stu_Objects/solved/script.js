//WRITE YOUR CODE BELOW
const customerOrder = {
  drinkName: "Latte",
  numberOfSugars: 2,
  isReady: true,
};

console.log(customerOrder.drinkName);
console.log(customerOrder.numberOfSugars);

// customerOrder.isReady = false;

if (customerOrder.isReady) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
