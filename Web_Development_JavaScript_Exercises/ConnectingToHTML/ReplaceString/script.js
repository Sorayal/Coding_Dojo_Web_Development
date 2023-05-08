/**
 * Replace the text content of an H1 element
 */
function replaceMainHeading() {
  const heading = document.getElementsByTagName("h1");
  console.log("Value that was set before replace: " + heading[0].innerHTML);
  heading[0].innerHTML = "Test";
}

/**
 * Test if function get called
 */
function testConsole() {
  console.log("Test Konsole Output");
}

replaceMainHeading();
testConsole();
