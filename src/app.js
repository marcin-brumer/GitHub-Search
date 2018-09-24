import { ui } from "./ui";
import { gitHub } from "./github";

// Search inputs
const searchUser = document.getElementById("searchUser");
// Search button
const searchUsersBtn = document.getElementById("searchUsersBtn");

// Search users event listener
searchUsersBtn.addEventListener("click", e => {
  // Body ID
  let bodyID = document.querySelector("body").id;

  // Get input
  const inputText = searchUser.value;

  if (bodyID === "users") {
    if (inputText !== "") {
      // Make HTTP call
      gitHub.getUsers(inputText).then(data => {
        if (data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert("User not found");
        } else {
          // Show User
          ui.showUser(data);
        }
      });
    }
  }

  if (bodyID === "organizations") {
    if (inputText !== "") {
      // Make HTTP call
      gitHub.getOrganizations(inputText).then(data => {
        if (data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert("Organization not found");
        } else {
          // Show Organization
          ui.showOrganization(data);
        }
      });
    }
  }

  e.preventDefault();
});
