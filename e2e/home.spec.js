import { test, expect } from "@playwright/test";

test("home page has main heading", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
