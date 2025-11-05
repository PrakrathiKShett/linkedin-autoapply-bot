// autoapply.js
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  console.log("🚀 Starting LinkedIn Auto Apply Script...");

  // Launch Chrome
  const browser = await puppeteer.launch({
    headless: false,           // show the window
    defaultViewport: null,     // full size
    args: ["--start-maximized"]
  });

  const page = await browser.newPage();

  // Open LinkedIn Jobs
  console.log("🌐 Opening LinkedIn Jobs page...");
  await page.goto("https://www.linkedin.com/jobs/search/?f_AL=true", {
    waitUntil: "networkidle2"
  });

  console.log("✅ Browser is now ready.");
  console.log("👉 Log in to LinkedIn manually, search jobs, do anything you want.");
  console.log("⚠️ Browser will stay open forever until YOU close it manually.");

  // Keep Chrome open forever — it will not close automatically
  await new Promise(() => {});  // never resolves
})();
