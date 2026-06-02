const { test, expect } = require("@playwright/test");

test.beforeEach("URL Orange démo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  // Aller dans la partie Admin
  await page.locator(':text-is("Admin")').click();
});

test("Interactions avec les éléments d\'un tableau", async ({ page }) => {
  // Sélectionner une ligne du tableau
  const ligne = page.locator('[role="row"]').last();
  await expect(ligne).toBeVisible();

  // Sélectionner une cellule du tableau
  const cellule = page.getByRole("cell", { name: " " }).first();
  await expect(cellule).toBeVisible();

  // Cliquer sur le bouton supprimer de la ligne
  const btnSupprimer = ligne.locator("button .bi-trash");
  await btnSupprimer.click();

  // Vérifier l'affichage de la pop-up
  await page.waitForSelector(".oxd-dialog-container-default--inner");
});
