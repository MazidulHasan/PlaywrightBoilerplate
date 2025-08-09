exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username, password) {
    // Skip if already logged in
    if (await this.page.getByRole('button', { name: 'Logout' }).isVisible()) {
      console.log('Already logged in, skipping login.');
      return;
    }
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.getByRole('heading', { name: 'Dashboard' }).waitFor();
  }
};
