function calculateSum() {
  const calcResult = buildOperation("+");
  document.getElementById("result").value = calcResult;
}

function calculateSubstract() {
  const calcResult = buildOperation("-");
  document.getElementById("result").value = calcResult;
}

function calculateProduct() {
  const calcResult = buildOperation("*");
  document.getElementById("result").value = calcResult;
}

function calculateDivision() {
  const calcResult = buildOperation("/");
  document.getElementById("result").value = calcResult;
}

function buildOperation(operation) {
  const x = parseInt(document.getElementById("field1").value);
  const y = parseInt(document.getElementById("field2").value);
  const op = operation;
  if (!checkIfValid(x, y, op)) {
    return "invalid";
  }
  let result = 0;
  switch (op) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      if (y != 0) {
        result = x / y;
        break;
      }
    default:
      result = "invalid";
  }
  return result;
}

function checkIfValid(x, y, operation) {
  console.log(y);
  const checkResult = isNaN(x) && isNaN(y);
  console.log(checkResult);
  return checkResult;
}
