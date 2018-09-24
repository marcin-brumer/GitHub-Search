class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display User
  showUser(data) {
    this.showProfile(data.profile);
    this.showRepos(data.repos);
  }

  // Display User
  showOrganization(data) {
    this.showProfile(data.profile);
    this.showRepos(data.repos);
  }

  // Display profile
  showProfile(user) {
    // Clear remaining alerts
    this.clearAlert();
    // Insert data to profile container
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-4" src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div> 
          <div class="col-md-9">
            <div class="d-flex justify-content-center align-items-center flex-wrap mb-4">
              <span class="badge badge-pill badge-warning p-2 mr-2 mb-2">Public repos: ${
                user.public_repos
              }</span>
              <span class="badge badge-pill badge-light p-2 mr-2 mb-2">Public Gists: ${
                user.public_gists
              }</span>
              <span class="badge badge-pill badge-success p-2 mr-2 mb-2">Followers: ${
                user.followers
              }</span>
              <span class="badge badge-pill badge-info p-2 mr-2 mb-2">Following: ${
                user.following
              }</span>
            </div>
            <ul class="list-group border-light">
              <li class="list-group-item d-flex justify-content-between align-items-center border-light">
                Name: ${user.name}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-light">
                Email: ${user.email}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-light">
                Website/Blog: ${user.blog}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-light">
                Location: ${user.location}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-light">
                Member Since: ${user.created_at}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="repos"></div>
      <div id="people"></div>
    `;
  }

  // Display repos
  showRepos(repos) {
    let output = `<h3 class="page-heading mb-3">Latest Repos:</h3>`;

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6 my-1">
              <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-6 my-1">
              <span class="badge badge-pill badge-warning p-2 mr-2">Stars: ${
                repo.stargazers_count
              }</span>
              <span class="badge badge-pill badge-success p-2 mr-2">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-pill badge-info p-2 mr-2">Forks: ${
                repo.forks_count
              }</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
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
