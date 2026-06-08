const { test } = require("@playwright/test");

test("structure test playwright avec Browser context", async function ({
  browser,
}) {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("structure test playwright 2 avec Browser context", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("structure test playwright 3 avec page", async ({ browser, page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});
