import { test, expect } from "@playwright/test";

test.beforeEach("Aller sur le site zotoshop", async ({ page }) => {
  await page.goto("/fr/products/zotopad-controller");

  // Vérification arrivée
  await expect
    .soft(page.locator("#product-info"))
    .toContainText("ZotoPad Controller");
});

test.describe("Tests produits", () => {
  test("Nombre de fiches produits - soft assertions", async ({ page }) => {
    // Compter le nombre de produits présents
    const nbProduits = await page.getByTestId("product-wrapper").count();
    expect(nbProduits).toBeGreaterThanOrEqual(1);

    // Lister les produits et vérifier qu'ils contiennent tous une fiche produit
    for (let i = 0; i < nbProduits; i++) {
      const product = await page.getByTestId("product-wrapper").nth(i);
      await expect.soft(product).toContainText("Zoto");
    }
  });

  test("Vérifier que les éléments clés sont présents", async ({ page }) => {
    //Titre
    await expect.soft(page.getByTestId("product-title").first()).toBeVisible();

    // Description
    await expect
      .soft(page.locator('[data-testid="product-description"]'))
      .toBeVisible();

    //Prix
    await expect
      .soft(page.locator('[data-testid="product-price"]'))
      .toBeVisible();

    //Image
    await expect
      .soft(page.locator('img[alt="Thumbnail"]').first())
      .toBeVisible();
  });

  test("Prix produit au bon format", async ({ page }) => {
    // Format strict
    const price = await page
      .locator('[data-testid="product-price"]')
      .textContent();
    expect(price).toMatch(/^€[\d,]+\.\d{2}$/);

    // Exemple fixe avec 69€
    const prixPrincipal = page.locator('[data-testid="product-price"]');
    await expect.soft(prixPrincipal).toHaveText("€69.00");

    // Vérifier juste le prix, sans l'€
    const prix2 = page.locator('[data-testid="price"]').first();
    await expect.soft(prix2).toContainText("699.00");
  });
});
