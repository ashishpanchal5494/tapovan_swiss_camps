#!/usr/bin/env node

const { exec } = require("child_process");
const path = require("path");

console.log("🚀 Starting Google Reviews Scraper...");
console.log("📍 Scraping reviews for Tapovan Swiss Camps...");

// Run the scraper
const scraperPath = path.join(
  __dirname,
  "..",
  "utils",
  "scrapeGoogleReviews.js"
);
exec(`node "${scraperPath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error("❌ Error running scraper:", error);
    return;
  }

  if (stderr) {
    console.error("⚠️ Scraper warnings:", stderr);
  }

  console.log("📊 Scraper output:", stdout);
  console.log("✅ Scraping completed!");
  console.log("📁 Check public/data/google-reviews.json for results");
});
