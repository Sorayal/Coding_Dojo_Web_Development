/**
 * Replace the text content of an H1 element
 */
function replaceMainHeading() {
  const randomNumber = returnPseudoRandom();
  const heading = document.getElementsByTagName("h1");
  console.log("Value that was set before replace: " + heading[0].innerHTML);
  heading[0].innerHTML = `Test : ${randomNumber}`;
}

/**
 * Returns pseudo-random number between 1 and 10
 */
function returnPseudoRandom() {
  // Generating number between 1 and 10
  // Math.random() * (max - min + 1) + min
  return Math.random() * (10 - 1 + 1) + 1;
}

/**
 * Produces some output
 */
function replaceParaWithTemplateString() {
  let someRandomText = "Muhh!";
  const para = document.getElementById("output");
  para.innerHTML = `${someRandomText} More fixed text!`;
}

replaceMainHeading();
replaceParaWithTemplateString();
