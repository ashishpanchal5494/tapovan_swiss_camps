# Google Reviews Integration Setup

This guide will help you set up live Google Reviews scraping for your testimonial page.

## 🚀 Quick Start

### 1. Install Dependencies

Make sure you have Puppeteer installed:

```bash
npm install puppeteer
```

### 2. Run the Scraper

To scrape Google Reviews from your business listing:

```bash
# Using npm script (recommended)
npm run scrape-reviews

# Or run directly
npm run scrape-reviews:direct
```

### 3. View Results

The scraper will create a file at `public/data/google-reviews.json` with all the scraped reviews.

## 📍 Your Google Maps URL

The scraper is currently configured to scrape reviews from:

```
https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1397354,78.312591,17z
```

## 🔧 How It Works

### 1. Scraping Process

- Opens Google Maps in a headless browser
- Navigates to your business listing
- Clicks on reviews section
- Scrolls through all available reviews
- Extracts: name, text, rating, profile photo, date, location

### 2. Data Structure

Each review includes:

```json
{
  "id": "google-review-1",
  "name": "Customer Name",
  "text": "Review text...",
  "rating": 5,
  "image": "profile_photo_url",
  "date": "Review date",
  "location": "Customer location",
  "platform": "Google Reviews",
  "verified": true,
  "source": "google-maps"
}
```

### 3. API Integration

- Reviews are served via `/api/reviews` endpoint
- Data is cached for 1 hour to improve performance
- Automatic fallback to static testimonials if scraping fails

## 🎛️ Features

### Live Data Display

- ✅ Real-time Google Reviews
- ✅ Automatic caching (1 hour)
- ✅ Fallback to static testimonials
- ✅ Toggle between Google Reviews and static testimonials
- ✅ Manual refresh button
- ✅ Loading states and error handling

### Visual Enhancements

- ✅ Google badge for live reviews
- ✅ Verified checkmarks
- ✅ Platform indicators
- ✅ Responsive design
- ✅ Smooth animations

## 🔄 Updating Reviews

### Automatic Updates

Reviews are cached for 1 hour. After that, the next page load will fetch fresh data.

### Manual Updates

1. Click the "Refresh" button on the testimonial page
2. Or run the scraper manually: `npm run scrape-reviews`

### Scheduled Updates

You can set up a cron job to run the scraper automatically:

```bash
# Run every 6 hours
0 */6 * * * cd /path/to/your/project && npm run scrape-reviews
```

## 🛠️ Customization

### Change Google Maps URL

Edit `utils/scrapeGoogleReviews.js` and update the URL:

```javascript
const URL = "YOUR_GOOGLE_MAPS_URL_HERE";
```

### Modify Scraping Selectors

If Google changes their HTML structure, update the selectors in the scraper:

```javascript
const name = node.querySelector(".d4r55")?.innerText || "Anonymous";
const text = node.querySelector(".wiI7pd")?.innerText || "";
// ... other selectors
```

### Adjust Cache Duration

Edit `app/api/reviews/route.ts`:

```javascript
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
```

## 🐛 Troubleshooting

### Common Issues

1. **No reviews found**

   - Check if the Google Maps URL is correct
   - Verify your business has reviews
   - Google may have changed their HTML structure

2. **Scraper fails**

   - Run with debug screenshots: Check `debug_*.png` files
   - Update Puppeteer if needed: `npm update puppeteer`
   - Check if Google is blocking the scraper

3. **API errors**
   - Ensure `public/data/` directory exists
   - Check file permissions
   - Verify the JSON file is valid

### Debug Mode

The scraper creates debug screenshots when it fails:

- `debug_failed_click.png` - When review button isn't found
- `debug_after_click.png` - After clicking review button
- `debug_reviews_not_found.png` - When reviews don't load

## 📊 Performance

### Optimization Features

- ✅ Memoized components
- ✅ Lazy loading images
- ✅ Cached API responses
- ✅ Efficient re-renders
- ✅ Responsive images

### Monitoring

- Check browser console for errors
- Monitor API response times
- Track cache hit rates

## 🔒 Security & Legal

### Important Notes

- ✅ Respect Google's robots.txt
- ✅ Don't scrape too frequently
- ✅ Use scraped data responsibly
- ✅ Consider Google's Terms of Service

### Rate Limiting

The scraper includes delays to avoid being blocked:

- 2-3 second delays between actions
- Respectful scrolling behavior
- No aggressive scraping patterns

## 📈 SEO Benefits

### Structured Data

- ✅ Google Reviews Schema markup
- ✅ Aggregate rating display
- ✅ Individual review markup
- ✅ Rich snippets in search results

### Content Freshness

- ✅ Live review updates
- ✅ Recent review dates
- ✅ Verified review indicators
- ✅ Platform diversity

## 🎯 Next Steps

1. **Test the scraper**: Run `npm run scrape-reviews`
2. **Check the results**: View `public/data/google-reviews.json`
3. **Visit testimonial page**: See live reviews in action
4. **Set up automation**: Schedule regular scraping
5. **Monitor performance**: Track review updates and user engagement

## 📞 Support

If you encounter any issues:

1. Check the debug screenshots
2. Review the console logs
3. Verify your Google Maps URL
4. Update selectors if Google changes their structure

Happy scraping! 🎉
