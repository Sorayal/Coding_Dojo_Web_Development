"use strict";

/**
 * Shows a simple dialog window
 */
function showDialog() {
  let name = prompt("Enter your name");
  if (name == "") {
    name = "Dear visitor";
  }
  alert("Thank you! " + name + "\nHave a good day!");
}

/**
 * Shows the confirm dialog window
 */
function showConfirmDialog() {
  confirm("Confirmation Dialog!");
}

/**
 * Writes a message to the console
 */
function writeOnConsole() {
  console.log("console object received message!");
}

/**
 * Write all message-types to console like debug and info
 */
function writeAllConsoleMessages() {
  console.log("console object received log message!");
  console.debug("console object received debug message!");
  console.error("console object received error message!");
  console.info("console object received info message!");
  console.warn("console object received warn message!");
}

showDialog();
showConfirmDialog();
writeOnConsole();
writeAllConsoleMessages();

// Doc usage
// https://jsdoc.app/
