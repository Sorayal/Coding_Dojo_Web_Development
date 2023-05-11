function calculateBin() {
  const calcResult = buildOperation("bin");
  document.getElementById("result").value = calcResult;
}

// TODO: Needs to be completed with Algorythm
function calculateDec() {
  const calcResult = buildOperation("dec");
  document.getElementById("result").value = calcResult;
}

function buildOperation(operation) {
  const x = parseInt(document.getElementById("field1").value);

  if (operation == "bin") {
  } else if (operation == "dec") {
  } else {
    result = "invalid operation";
  }

  return result;
}
