import { test, expect } from "@playwright/test";

const idValide = "standard_user@zotoshop.com";
const idBloque = "locked_out_user@zotoshop.com";
const password = "password123";

test.describe("Tests avec login valide", () => {
  test.beforeEach("Aller sur le site zotoshop", async ({ page }) => {
    await page.goto("/fr/account");

    // Vérification arrivée
    await expect(page.locator('[data-testid="login-page"]')).toContainText(
      "Bon retour",
    );
    await expect(page.locator('[data-testid="login-page"]')).toContainText(
      "Connectez-vous pour profiter",
    );
  });

  test("Déconnexion", async ({ page }) => {
    await page.getByTestId("email-input").fill(idValide);
    await page.getByTestId("password-input").fill(password);
    await page.getByTestId("sign-in-button").click();

    await expect(page.locator('[data-testid="welcome-message"]')).toContainText(
      "Bonjour Standard",
    );

    await expect(page.getByText("Connecté en tant que : ")).toContainText(
      idValide,
    );

    await page.getByTestId("account-nav").getByTestId("logout-button").click();

    // Retour sur la page de connexion
    await expect(page.locator('[data-testid="login-page"]')).toContainText(
      "Bon retour",
    );
    await expect(page.locator('[data-testid="login-page"]')).toContainText(
      "Connectez-vous pour profiter",
    );
  });
});
