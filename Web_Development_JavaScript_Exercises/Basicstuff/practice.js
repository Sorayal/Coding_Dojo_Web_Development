// Practice Section:
function subtract(a, b) {
  return a - b;
}

function stringify(number) {
  return `Result: ${number}`;
}

function double(a) {
  return a * 2;
}

function transform(number, func) {
  return func(number);
}

// Calls indirectly the function double.
console.log(transform(10, double));

// will fail because the second parameter for transform function isn´t defined as function!
// console.log(transform(10, double(10)));
