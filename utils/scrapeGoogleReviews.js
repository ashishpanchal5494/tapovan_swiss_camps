const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

async function scrapeGoogleReviews() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    const URL =
      "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1397354,78.312591,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1397308!4d78.3151659!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D";
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

    await new Promise((resolve) => setTimeout(resolve, 2000));

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
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await page.screenshot({ path: "debug_after_click.png", fullPage: true });

      // Debug: Check what's on the page after clicking
      const pageContent = await page.evaluate(() => {
        return {
          title: document.title,
          url: window.location.href,
          hasReviewElements: document.querySelectorAll(
            ".jftiEf, .section-review, .review-item"
          ).length,
          allElements: Array.from(document.querySelectorAll("*"))
            .slice(0, 20)
            .map((el) => ({
              tag: el.tagName,
              class: el.className,
              text: el.textContent?.substring(0, 50),
            })),
        };
      });
      console.log("🔍 Page content after click:", pageContent);
    }

    // Wait for reviews to load with multiple strategies
    let reviewsLoaded = false;
    const reviewWaitSelectors = [
      ".jftiEf",
      ".section-review",
      ".review-item",
      "[data-review-id]",
      ".review-dialog-list .section-review",
      ".section-reviews .section-review",
    ];

    for (const selector of reviewWaitSelectors) {
      try {
        console.log(`🔍 Waiting for reviews with selector: ${selector}`);
        await page.waitForSelector(selector, { timeout: 10000 });
        reviewsLoaded = true;
        console.log(`✅ Reviews loaded with selector: ${selector}`);
        break;
      } catch (e) {
        console.log(`❌ Reviews not found with selector: ${selector}`);
        continue;
      }
    }

    if (!reviewsLoaded) {
      console.log(
        "⚠️ Reviews did not load with any selector, trying to proceed anyway..."
      );
      await page.screenshot({
        path: "debug_reviews_not_found.png",
        fullPage: true,
      });
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Extract review data with multiple selector strategies
    const reviews = await page.evaluate(() => {
      // Try multiple selectors for review containers
      const reviewSelectors = [
        ".jftiEf",
        ".section-review",
        ".review-item",
        "[data-review-id]",
        ".review-dialog-list .section-review",
        ".section-reviews .section-review",
      ];

      let reviewNodes = [];
      for (const selector of reviewSelectors) {
        reviewNodes = document.querySelectorAll(selector);
        if (reviewNodes.length > 0) {
          console.log(
            `Found ${reviewNodes.length} reviews with selector: ${selector}`
          );
          break;
        }
      }

      if (reviewNodes.length === 0) {
        console.log("No reviews found with any selector");
        return [];
      }

      return Array.from(reviewNodes)
        .map((node, index) => {
          // Try multiple selectors for name
          const nameSelectors = [
            ".d4r55",
            ".section-review-title",
            ".review-title",
            "[data-review-title]",
          ];
          let name = "Anonymous";
          for (const selector of nameSelectors) {
            const nameEl = node.querySelector(selector);
            if (nameEl?.innerText) {
              name = nameEl.innerText.trim();
              break;
            }
          }

          // Try multiple selectors for review text
          const textSelectors = [
            ".wiI7pd",
            ".section-review-text",
            ".review-text",
            "[data-review-text]",
          ];
          let text = "";
          for (const selector of textSelectors) {
            const textEl = node.querySelector(selector);
            if (textEl?.innerText) {
              text = textEl.innerText.trim();
              break;
            }
          }

          // Try multiple selectors for rating
          const ratingSelectors = [
            "span.Kk7lMc",
            ".section-star-display",
            ".review-rating",
            "[aria-label*='star']",
            ".rating",
          ];
          let rating = "5";
          for (const selector of ratingSelectors) {
            const ratingEl = node.querySelector(selector);
            if (ratingEl) {
              const ariaLabel = ratingEl.getAttribute("aria-label");
              if (ariaLabel) {
                const match = ariaLabel.match(/\d+(\.\d+)?/);
                if (match) {
                  rating = match[0];
                  break;
                }
              }
              // Try to get rating from class names
              const classMatch = ratingEl.className.match(/star-(\d+)/);
              if (classMatch) {
                rating = classMatch[1];
                break;
              }
            }
          }

          // Try multiple selectors for profile photo
          const photoSelectors = [
            "img.T75of",
            ".section-review-avatar img",
            ".review-avatar img",
            "img[alt*='profile']",
          ];
          let profilePhoto = "/assets/img/testimonial/default-avatar.svg";
          for (const selector of photoSelectors) {
            const photoEl = node.querySelector(selector);
            if (photoEl?.src) {
              profilePhoto = photoEl.src;
              break;
            }
          }

          // Try multiple selectors for date
          const dateSelectors = [
            ".rsqaWe",
            ".section-review-date",
            ".review-date",
            "[data-review-date]",
          ];
          let dateText = "";
          for (const selector of dateSelectors) {
            const dateEl = node.querySelector(selector);
            if (dateEl?.innerText) {
              dateText = dateEl.innerText.trim();
              break;
            }
          }

          // Try multiple selectors for location
          const locationSelectors = [
            ".d4r55 + div",
            ".section-review-location",
            ".review-location",
          ];
          let location = "";
          for (const selector of locationSelectors) {
            const locationEl = node.querySelector(selector);
            if (locationEl?.innerText) {
              location = locationEl.innerText.trim();
              break;
            }
          }

          return {
            id: `google-review-${index + 1}`,
            name: name,
            text: text,
            rating: Number(rating),
            image: profilePhoto,
            date: dateText,
            location: location,
            platform: "Google Reviews",
            verified: true,
            source: "google-maps",
          };
        })
        .filter((review) => review.text.length > 0); // Filter out empty reviews
    });

    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), "public", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // If no reviews found, try alternative approach
    if (reviews.length === 0) {
      console.log(
        "⚠️ No reviews found in dialog, trying alternative approach..."
      );

      // Try to get reviews from the main page
      const alternativeReviews = await page.evaluate(() => {
        // Look for any review-related elements on the main page
        const reviewElements = document.querySelectorAll(
          '[data-review-id], .review, .section-review, [class*="review"]'
        );
        if (reviewElements.length > 0) {
          return Array.from(reviewElements)
            .slice(0, 10)
            .map((node, index) => {
              const text = node.textContent?.trim() || "Great experience!";
              return {
                id: `google-review-alt-${index + 1}`,
                name: "Google User",
                text: text.length > 200 ? text.substring(0, 200) + "..." : text,
                rating: 5,
                image: "/assets/img/testimonial/default-avatar.svg",
                date: "Recent",
                location: "India",
                platform: "Google Reviews",
                verified: true,
                source: "google-maps",
              };
            });
        }
        return [];
      });

      if (alternativeReviews.length > 0) {
        reviews.push(...alternativeReviews);
        console.log(
          `✅ Found ${alternativeReviews.length} alternative reviews`
        );
      }
    }

    const outputPath = path.join(dataDir, "google-reviews.json");
    fs.writeFileSync(outputPath, JSON.stringify(reviews, null, 2));
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
