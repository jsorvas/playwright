import { test, expect } from "@playwright/test";

const idValide = "standard_user@zotoshop.com";
const idBloque = "locked_out_user@zotoshop.com";
const password = "password123";

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

test.describe("Tests avec login valide", () => {
  test("Login valide", async ({ page }) => {
    await page.getByTestId("email-input").fill(idValide);
    await page.getByTestId("password-input").fill(password);
    await page.getByTestId("sign-in-button").click();

    await expect(page.locator('[data-testid="welcome-message"]')).toContainText(
      "Bonjour Standard",
    );
  });
});

test.describe("Tests erreurs", () => {
  test("Vérification message d'erreur mail ou mot de passe", async ({
    page,
  }) => {
    await page.getByTestId("email-input").fill("test@kl.mm");
    await page.getByTestId("password-input").fill("test");
    await page.getByTestId("sign-in-button").click();
    await expect(page.getByTestId("login-error-message")).toContainText(
      "Email ou mot de passe incorrect.",
    );
  });

  test("Vérification du compte bloqué", async ({ page }) => {
    await page.getByTestId("email-input").fill(idBloque);
    await page.getByTestId("password-input").fill(password);
    await page.getByTestId("sign-in-button").click();
    await expect(
      page.getByText("Ce compte est bloqué. Contactez le support."),
    ).toBeVisible();
  });
});
