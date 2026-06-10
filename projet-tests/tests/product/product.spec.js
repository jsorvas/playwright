import { test, expect } from "@playwright/test";

test.beforeEach("Aller sur le site zotoshop", async ({ page }) => {
  await page.goto("/fr/products/zotopad-controller");

  // Vérification arrivée
  await expect(page.locator("#product-info")).toContainText(
    "ZotoPad Controller",
  );
});

test.describe("Tests produits", () => {
  test("Nombre de fiches produits", async ({ page }) => {
    // Compter le nombre de produits présents
    const nbProduits = await page.getByTestId("product-wrapper").count();
    expect(nbProduits).toBeGreaterThanOrEqual(1);
  });

  test("Vérifier que les éléments clés sont présents", async ({ page }) => {
    //Titre
    await expect(page.getByTestId("product-title").first()).toBeVisible();

    // Description
    await expect(
      page.locator('[data-testid="product-description"]'),
    ).toBeVisible();

    //Prix
    await expect(page.locator('[data-testid="product-price"]')).toBeVisible();
  });

  test("Sélectionner une couleur, puis ajouter au panier", async ({ page }) => {
    // Choisir la couleur
    await page.locator('[data-testid="option-button"]').nth(1).click();

    // Ajouter au panier
    await page.locator('[data-testid="add-product-button"]').click();
    await page.waitForTimeout(9000);

    //Vérifier l'ajout dans le panier
    await expect(page.locator('[data-testid="nav-cart-link"]')).toHaveText(
      "Panier (1)",
    );
    await expect(
      page.locator('[data-testid="go-to-cart-button"]'),
    ).toBeVisible();
  });
});
