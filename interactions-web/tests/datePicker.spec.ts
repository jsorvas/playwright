import { test, expect } from "@playwright/test";

test.beforeEach("URL Orange démo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[type="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  // Aller dans la partie Leave
  await page.locator(':text-is("Leave")').click();
});

test("Gestion des dates pickers", async ({ page }) => {
  // Définition d'une fonction qui va convertir la date du jour en chaîne de caractères string
  const dateAuj: string = new Date().toISOString();
  const formatDate: string = dateAuj.slice(0, 10);

  // Sélectionner une date, partie From Date
  await page.locator(".bi-calendar").first().click();

  // Ouverture du calendrier
  await expect(page.locator(".oxd-calendar-wrapper")).toBeVisible();

  // Navigation sur les mois
  await page
    .locator(".oxd-calendar-wrapper")
    .locator(".bi-chevron-left")
    .click();
  await page
    .locator(".oxd-calendar-wrapper")
    .locator(".bi-chevron-right")
    .click();

  // Choisir le 15ème jour
  await page.locator(".oxd-calendar-date >> text=15").click();

  // Remplir avec la date du jour le champ To Date
  await page.locator(".oxd-input").last().fill(formatDate);
});
