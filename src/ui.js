class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showAlert(message) {
    // Clear remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = "alert alert-dismissible alert-danger";
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const parent = document.querySelector(".searchContainer");
    // Get searchbox
    const searchBox = document.querySelector(".search");
    // Insert alert
    parent.insertBefore(div, searchBox);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

export const ui = new UI();
