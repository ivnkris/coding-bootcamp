// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

// Write Your JavaScript Code Here
function comparison(expr1, expr2) {
  if (expr1 && expr2) {
    console.log("True✅ True✅");
  } else {
    if (expr1 && !expr2) {
      console.log("True✅ False❌");
    } else {
      if (!expr1 && expr2) {
        console.log("False ❌ True ✅");
      } else {
        console.log("False ❌ False ❌");
      }
    }
  }
}

comparison(true, true);
comparison(true, false);
comparison(false, true);
comparison(false, false);
