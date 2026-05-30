const { test, expect } = require("@playwright/test");

test.beforeEach("URL Orange démo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  // Aller dans la partie My info
  await page.locator(':text-is("My Info")').click();
});

test("Checkbox", async ({ page }) => {
  await page
    .locator(".orangehrm-tabs-wrapper", { hasText: "Immigration" })
    .click();

  const checkPassport = page.locator(".oxd-checkbox-input").nth(1);
  const checkImmigration = page.locator(".oxd-checkbox-input").last();

  // Vérifier que les cases ne sont pas cochées
  await expect(checkPassport).not.toBeChecked();
  await expect(checkImmigration).not.toBeChecked();

  // Clic sur la case Passeport
  await checkPassport.click();

  // Vérifier que la case Passport soit cochée
  await expect(checkPassport).toBeChecked();

  // Condition
  if (checkPassport.isChecked()) {
    checkPassport.click();
    expect(checkPassport).not.toBeChecked();
  }
});
