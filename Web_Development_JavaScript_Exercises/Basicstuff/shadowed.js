let result;
function setResult() {
  result = 20;
  return result;
}

// runs the function so result is initialized with 20 (without calling there would be undefined)
setResult();
console.log(result);

let result2;
function setResult2() {
  // the inner variable result2 shadows the global variable result2.
  // the consequence is, that global result2 stays undefined, while the 20 goes only into the local variable
  // with the function setResult2()
  let result2 = 20;
  return result2;
}
setResult2();
console.log(result2);
