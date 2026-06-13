const { test, expect } = require("@playwright/test");

test("Auto waiting Playwright", async ({ page, context }) => {
  const client = await context.newCDPSession(page);

  await client.send("Network.enable");
  await client.send("Network.emulateNetworkConditions", {
    connectionType: "cellular3g",
    offline: false,
    latency: 100,
    downloadThroughput: (700 * 1024) / 8,
    uploadThroughput: (250 * 1024) / 8,
  });

  const champUsername = page.locator('[name="username"]');
  const champPassword = page.locator('[type="password"]');
  const boutonLogin = page.locator('[type="submit"]');

  const username = "Admin";
  const password = "admin123";

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await champUsername.fill(username);
  await expect(champUsername).toHaveValue(username);
  await champPassword.fill(password);
  await expect(champPassword).toHaveValue(password);

  await expect(boutonLogin).toBeVisible();
  await boutonLogin.click();
});
