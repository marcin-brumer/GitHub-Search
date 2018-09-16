import { ui } from "./ui";
import { gitHub } from "./github";

// Search input
const searchUser = document.getElementById("searchUser");

const searchBtn = document.getElementById("searchBtn");

// Search input event listener
searchBtn.addEventListener("click", e => {
  // Get input
  const inputText = searchUser.value;

  if (inputText !== "") {
    // Display profile
  }

  e.preventDefault();
});
