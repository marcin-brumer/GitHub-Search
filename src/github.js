class GitHub {
  constructor() {
    this.client_id = "2150c068898018456ddc";
    this.client_secret = "c3ec6246c01bcef5cdcba3b98c755747ee7edabb";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUsers(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }

  async getOrganizations(organization) {
    const profileResponse = await fetch(
      `https://api.github.com/orgs/${organization}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/orgs/${organization}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}

export const gitHub = new GitHub();
