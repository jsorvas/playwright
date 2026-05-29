const { test } = require("@playwright/test");

test.beforeEach("URL Orange démo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("Fonction fill", async ({ page }) => {
  // Insérer du nouveau texte en effaçant le contenu
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();
});

test("Fonction type", async ({ page }) => {
  // Simule la saisie au clavier
  await page.locator('[name="username"]').type("Admin");
  await page.locator('[type="password"]').click();
  await page.keyboard.type("admin123", { delay: 100 });
  await page.locator('[type="submit"]').click();
});
