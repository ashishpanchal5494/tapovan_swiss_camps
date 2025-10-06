import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;
let cachedReviews: unknown[] | null = null;
let lastFetchTime = 0;

export async function GET() {
  try {
    const reviewsPath = path.join(process.cwd(), 'public', 'data', 'google-reviews.json');
    
    // Check if we have cached data and it's still fresh
    const now = Date.now();
    if (cachedReviews && (now - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        data: cachedReviews,
        cached: true,
        lastUpdated: new Date(lastFetchTime).toISOString()
      });
    }

    // Try to read from file
    if (fs.existsSync(reviewsPath)) {
      const fileContent = fs.readFileSync(reviewsPath, 'utf8');
      const reviews = JSON.parse(fileContent) as unknown[];
      
      // Cache the data
      cachedReviews = reviews;
      lastFetchTime = now;
      
      return NextResponse.json({
        success: true,
        data: reviews,
        cached: false,
        lastUpdated: new Date().toISOString(),
        count: reviews.length
      });
    }

    // If no file exists, return empty array
    return NextResponse.json({
      success: true,
      data: [],
      cached: false,
      lastUpdated: new Date().toISOString(),
      count: 0,
      message: 'No reviews data found. Please run the scraper first.'
    });

  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch reviews',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Endpoint to trigger scraping (for manual updates)
export async function POST() {
  try {
    // This would trigger the scraping process
    // For now, we'll just clear the cache to force a refresh
    cachedReviews = null;
    lastFetchTime = 0;
    
    return NextResponse.json({
      success: true,
      message: 'Cache cleared. Next request will fetch fresh data.'
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to clear cache'
    }, { status: 500 });
  }
}
