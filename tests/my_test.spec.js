const { test, expect } = require("@playwright/test");
// const { hello, helloworld } = require("./demo/hello");

// console.log(hello());
// console.log(helloworld());

test("My first test", async ({ page }) => {
  await page.goto("http://google.com");
  await expect(page).toHaveTitle("Google");
});
