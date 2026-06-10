import { test, expect } from "@playwright/test";

const idValide = "standard_user@zotoshop.com";
const password = "password123";

test.beforeEach("Aller sur le site zotoshop", async ({ page }) => {
  await page.goto("/fr/store");

  // Vérification arrivée
  await expect(page.locator('[data-testid="store-page-title"]')).toContainText(
    "Tous les produits",
  );
});

test.describe("Catalogue zotoshop", () => {
  test("Afficher les produits", async ({ page }) => {
    await expect(
      page.locator('[data-testid="product-wrapper"]').first(),
    ).toBeVisible();

    await expect(
      page.locator('[data-testid="product-wrapper"]').last(),
    ).toBeVisible();

    //Vérifier qu'il y a plus qu'1 produit
    const nbProduits = await page
      .locator('[data-testid="product-wrapper"]')
      .count();
    expect(nbProduits).toBeGreaterThan(1);
  });

  test("Trier par prix croissant", async ({ page }) => {
    await page.locator('[for="price_asc"]').click();
    await page.waitForTimeout(500);

    //Vérifier le premier élément trié
    await expect(
      page.locator('[data-testid="product-wrapper"]').first(),
    ).toContainText("€15.00");

    //Récupérer les prix des deux premiers éléments
    const prix1 = await page
      .locator('[data-testid="price"]')
      .first()
      .textContent();
    const prix2 = await page
      .locator('[data-testid="price"]')
      .nth(1)
      .textContent();

    //Extraire les valeurs numériques des prix
    const prix1Value = parseFloat(prix1.replace("€", "").replace(",", "."));
    const prix2Value = parseFloat(prix2.replace("€", "").replace(",", "."));

    expect(prix2Value).toBeGreaterThan(prix1Value);
  });

  test("Trier par prix croissant (2)", async ({ page }) => {
    await page
      .locator('[data-testid="radio-label"]')
      .filter({ hasText: "Prix : croissant" })
      .click();
    await page.waitForTimeout(500);

    //Vérifier le premier élément trié
    await expect(
      page.locator('[data-testid="product-wrapper"]').first(),
    ).toContainText("€15.00");

    //Récupérer les prix des deux premiers éléments
    const prix1 = await page
      .locator('[data-testid="price"]')
      .first()
      .textContent();
    const prix2 = await page
      .locator('[data-testid="price"]')
      .nth(1)
      .textContent();

    //Extraire les valeurs numériques des prix
    const prix1Value = parseFloat(prix1.replace("€", "").replace(",", "."));
    const prix2Value = parseFloat(prix2.replace("€", "").replace(",", "."));

    expect(prix2Value).toBeGreaterThan(prix1Value);
  });

  test("Trier par prix décroissant", async ({ page }) => {
    await page.locator('[for="price_desc"]').click();
    await page.waitForTimeout(500);

    //Vérifier le premier élément trié
    await expect(page.locator('[data-testid="price"]').first()).toContainText(
      "€1,899.00",
    );

    //Récupérer les prix des deux premiers éléments
    const prix1 = await page
      .locator('[data-testid="price"]')
      .first()
      .textContent();
    const prix2 = await page
      .locator('[data-testid="price"]')
      .nth(1)
      .textContent();

    //Extraire les valeurs numériques des prix
    const prix1Value = parseFloat(prix1.replace("€", "").replace(",", ""));
    const prix2Value = parseFloat(prix2.replace("€", "").replace(",", "."));

    expect(prix1Value).toBeGreaterThan(prix2Value);
  });
});
