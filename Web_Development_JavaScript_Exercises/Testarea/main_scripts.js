"use strict";

const out = document.getElementById("output_result");

out.textContent = "More Output!";
//

const standardName = "Player 1: Username";
// const playername = document.getElementById("playername");

const para = document.querySelector("p");
para.textContent = standardName;

para.addEventListener("click", updateName);

// updates the name with the input via the prompt function
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
