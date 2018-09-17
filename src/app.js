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
    // Make HTTP call
    gitHub.getUsers(inputText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found");
      } else {
        // Show profile and repos
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }

  e.preventDefault();
});
