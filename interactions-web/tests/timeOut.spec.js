const { test, expect } = require("@playwright/test");

test("Timeout global pour ce test", async ({ page, context }) => {
  test.setTimeout(15000);

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();
});

test("Timeout pour une action", async ({ page, context }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click({ timeout: 5000 });
});

test("Timeout pour une attente explicite", async ({ page, context }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  // Aller dans la partie PIM
  await page.locator(':text-is("PIM")').click();

  await page.getByPlaceholder("Type for hints...").first().fill("Auto");

  await page.getByRole("button", { name: "Search" }).click();

  await page.waitForSelector(".oxd-table", { timeout: 10000 });
  await page.waitForSelector(':text-is("Auto")', { timeout: 10000 });
});

test("Timeout globaux", async ({ page }) => {
  // timeout, actionTimeout => use ; configurés dans le fichier playwright.config.js
});
