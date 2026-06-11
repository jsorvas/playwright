const { test, expect } = require("@playwright/test");

test.beforeEach("URL Orange démo", async ({ page }) => {
  const champUsername = page.locator('[name="username"]');
  const champPassword = page.locator('[type="password"]');
  const boutonLogin = page.locator('[type="submit"]');

  const username = "Admin";
  const password = "admin123";

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await champUsername.fill(username);
  await expect(champUsername).toHaveValue(username);
  await champPassword.fill(password);
  await expect(champPassword).toHaveValue(password);

  await expect(boutonLogin).toBeVisible();
  await boutonLogin.click();
});

test("Assertions Playwright", async ({ page }) => {
  // Assertions générales
  const title = "OrangeHRM";

  await expect(page).toHaveURL(/demo.orange/);
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
  await expect(page).toHaveTitle(title);

  // Locator assertion
  const texteDashboard = page.locator("h6");
  await expect(texteDashboard).toHaveText("Dashboard");

  // Aller dans la partie PIM
  await page.locator(':text-is("PIM")').click();

  // Vérifier que la case n'est pas cochée
  const checkBoxID = page.locator(".oxd-checkbox-input-icon").first();
  await expect(checkBoxID).not.toBeChecked();
});
