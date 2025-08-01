const fs = require("fs");
const puppeteer = require("puppeteer");

async function scrapeGoogleReviews() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    const URL =
      "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1397354,78.312591,17z";
    await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
    console.log("✅ Navigated to Google Maps");

    // Handle consent popup if any
    try {
      await page.waitForSelector("#introAgreeButton, .VfPpkd-LgbsSe", {
        timeout: 5000,
      });
      await page.click("#introAgreeButton, .VfPpkd-LgbsSe");
      console.log("✅ Clicked cookie consent");
    } catch {
      console.log("ℹ️ No consent popup found");
    }

    await page.waitForTimeout(2000);

    // Try main review button
    let clicked = false;
    try {
      await page.waitForSelector(
        'button[jsaction*="pane.reviewChart.moreReviews"]',
        { timeout: 10000 }
      );
      await page.click('button[jsaction*="pane.reviewChart.moreReviews"]');
      clicked = true;
      console.log("✅ Clicked main review button");
    } catch {
      console.warn("⚠️ Main review button not found. Trying fallback...");
      try {
        await page.waitForSelector(".HHrUdb", { timeout: 10000 });
        await page.click(".HHrUdb");
        clicked = true;
        console.log("✅ Fallback click success");
      } catch {
        await page.screenshot({
          path: "debug_failed_click.png",
          fullPage: true,
        });
        throw new Error("❌ Could not find any review button.");
      }
    }

    if (clicked) {
      await page.waitForTimeout(3000);
      await page.screenshot({ path: "debug_after_click.png", fullPage: true });
    }

    try {
      await page.waitForSelector(".jftiEf", { timeout: 15000 });
    } catch {
      await page.screenshot({
        path: "debug_reviews_not_found.png",
        fullPage: true,
      });
      throw new Error("❌ Reviews did not load.");
    }

    // Scroll reviews
    let previousHeight = 0;
    let sameScrollCount = 0;

    while (sameScrollCount < 5) {
      const currentHeight = await page.evaluate(() => {
        const el = document.querySelector(".m6QErb.DxyBCb.kA9KIf.dS8AEf");
        if (el) {
          el.scrollBy(0, 1000);
          return el.scrollTop;
        }
        return 0;
      });

      if (currentHeight === previousHeight) sameScrollCount++;
      else sameScrollCount = 0;

      previousHeight = currentHeight;
      await page.waitForTimeout(1000);
    }

    // Extract review data
    const reviews = await page.evaluate(() => {
      const reviewNodes = document.querySelectorAll(".jftiEf");

      return Array.from(reviewNodes).map((node) => {
        const name = node.querySelector(".d4r55")?.innerText || "Anonymous";
        const text = node.querySelector(".wiI7pd")?.innerText || "";
        const rating = node
          .querySelector("span.Kk7lMc")
          ?.getAttribute("aria-label")
          ?.match(/\d+(\.\d+)?/)[0];
        const profilePhoto =
          node.querySelector("img.T75of")?.src ||
          "/assets/img/testimonial/default.webp";

        return {
          name,
          text,
          rating: Number(rating || 5),
          image: profilePhoto,
        };
      });
    });

    fs.writeFileSync(
      "public/data/google-reviews.json",
      JSON.stringify(reviews, null, 2)
    );
    console.log(
      `✅ Saved ${reviews.length} reviews to public/data/google-reviews.json`
    );
  } catch (err) {
    console.error("❌ Error scraping reviews:", err.message);
  } finally {
    await browser.close();
  }
}

scrapeGoogleReviews();
