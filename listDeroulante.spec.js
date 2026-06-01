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

test("Dropdown list", async ({ page }) => {
  const btnJob = await page.locator(".oxd-topbar-body-nav-tab", {
    hasText: "Job",
  });
  const btnOrganization = await page.locator(".oxd-topbar-body-nav-tab", {
    hasText: "Organization",
  });

  await expect(btnOrganization).toBeVisible();

  // Cliquer sur le bouton Job
  await btnJob.click();

  await page.waitForSelector('[role="menuitem"]', { state: "visible" });

  // Vérifier tous les éléments dans la liste déroulante
  const liste = await page.locator('[role="menuitem"]').allTextContents();

  await expect(liste).toEqual([
    "Job Titles",
    "Pay Grades",
    "Employment Status",
    "Job Categories",
    "Work Shifts",
  ]);

  // Vérifier les éléments dans la liste déroulante (méthode 2)
  const listeDeroulante_Job = await page.locator('[role="menuitem"]', {
    hasText: "Job Titles",
  });
  const listeDeroulante_PayGrades = await page.locator('[role="menuitem"]', {
    hasText: "Pay Grades",
  });
  const listeDeroulante_EmpltSts = await page.locator('[role="menuitem"]', {
    hasText: "Employment Status",
  });
  const listeDeroulante_JobCtg = await page.locator('[role="menuitem"]', {
    hasText: "Job Categories",
  });
  const listeDeroulante_Wk = await page.locator('[role="menuitem"]', {
    hasText: "Work Shifts",
  });

  await expect(listeDeroulante_Job).toBeVisible();
  await expect(listeDeroulante_PayGrades).toBeVisible();
  await expect(listeDeroulante_EmpltSts).toBeVisible();
  await expect(listeDeroulante_JobCtg).toBeVisible();
  await expect(listeDeroulante_Wk).toBeVisible();

  // Sélectionner une option dans la liste déroulante
  await page.locator('[role="menuitem"] >> text=Job Titles').click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList",
  );
});

test("Liste dynamique", async ({ page }) => {
  // Ouvrir la liste User Roles
  await page.locator(".oxd-select-text--after").nth(0).click();
  await expect(page.locator('[role="listbox"]')).toBeVisible();

  // Choisir les options
  await page.locator('[role="listbox"] >> text=Admin').click();
  await expect(page.locator(".oxd-select-text-input").nth(0)).toHaveText(
    "Admin",
  );

  await page.locator(".oxd-select-text--after").nth(0).click();
  await page.locator('[role="listbox"] >> text=ESS').click();
  await expect(page.locator(".oxd-select-text-input").nth(0)).toHaveText("ESS");
});
