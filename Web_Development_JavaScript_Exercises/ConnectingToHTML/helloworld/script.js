"use strict";

function showMessage() {
  alert("Hello world");
}
// using event listener
document.addEventListener("DOMContentLoaded", showMessage);

// commented out because using event listener above. Otherwise it would be called twice.
//showMessage();
