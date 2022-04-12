'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is
You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!
1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).
2. Complete the function called `calculateTotalPrice`.
   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".
3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object
  beer: 1.50,
  biscuits: 1.75,
  cheese: 2.50,
  chips: 1.50,
  cola: 1.90
};
function calculateTotalPrice(part) {
  // TODO replace this comment with your code
  let sum = 0;
  for(const price in cartForParty ){
      sum += cartForParty[price]
  }
  return `Total: € ${sum}`;
}
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(actual === expected);
}
function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const expected = `Total: € 9.15`;
  const actual = calculateTotalPrice();
  console.assert(actual === expected);
  console.log(expected);
  console.log(actual);
}
function test() {
  test1();
  test2();
}
test();