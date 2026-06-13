const { test, expect } = require("@playwright/test");

test("Timeout global pour ce test", async ({ page, context }) => {
  test.setTimeout(15000);

  // Aller sur l'URl
  await page.goto(process.env.ORANGEDEMO_URL);

  // Remplir les ID pour se connecter
  await page.locator('[name="username"]').fill(process.env.STANDARD_USERNAME);
  await page.locator('[type="password"]').fill(process.env.STANDARD_PASSWORD);
  await page.locator('[type="submit"]').click();

  // Vérifier arrivée sur la page de connexion
  await expect(page).toHaveURL(/dashboard/);
});
