import { test, expect } from "@playwright/test";

test.describe("ログイン画面", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./login");
  });

  test("ログインフォームが存在すること", async ({ page }) => {
    await expect(page.locator("data-testid=email")).toHaveCount(1);
    await expect(page.locator("data-testid=password")).toHaveCount(1);

    const loginButton = page.locator("data-testid=login-button");
    await expect(loginButton).toHaveCount(1);
    await expect(loginButton).toHaveText("ログイン");
  });

  test("未入力の場合ログインボタンが非活性であること", async ({
    page,
  }) => {
    const email = page.locator("data-testid=email");
    const password = page.locator("data-testid=password");

    await email.fill("");
    await password.fill("");

    const loginButton = page.locator("data-testid=login-button");

    await expect(loginButton).toBeDisabled();
  });

  test("正しい値を入力した場合ログインボタンをクリックできること", async ({
    page,
  }) => {
    const email = page.locator("data-testid=email");
    const password = page.locator("data-testid=password");

    await email.fill("sample@example.com");
    await password.fill("Pass1234");

    const loginButton = page.locator("data-testid=login-button");

    await loginButton.click();
    // ホーム画面へ遷移できること
    await expect(page).toHaveURL("./");
  });

});
