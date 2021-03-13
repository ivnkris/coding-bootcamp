//console logs the global window object
console.log(this);

//if the value of this is not set by the function call it will default to the global window object
function helloThis() {
  console.log("Inside this function, this is " + this);
}

//within an object it will refer to the object's property linked to the this keyword
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

//within a nested object it will refer to the nested object's property linked to the this keyword
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
