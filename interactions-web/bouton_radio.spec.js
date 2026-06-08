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

test("Vérifier les états par défaut", async ({ page }) => {
  const boutonMale = page.locator(".oxd-radio-input").first();
  const boutonFemale = page.locator(".oxd-radio-input").last();

  await expect(boutonMale).toBeChecked();
  await expect(boutonFemale).not.toBeChecked();
});

test("Interagir avec les boutons radio", async ({ page }) => {
  const boutonMale = page.locator(".oxd-radio-input").first();
  const boutonFemale = page.locator(".oxd-radio-input").last();

  await boutonFemale.click();
  await expect(boutonMale).not.toBeChecked();
  await expect(boutonFemale).toBeChecked();
});
