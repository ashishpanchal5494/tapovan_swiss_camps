import { useState, useEffect, useCallback } from 'react';

export interface GoogleReview {
  id: string;
  name: string;
  text: string;
  rating: number;
  image: string;
  date: string;
  location: string;
  platform: string;
  verified: boolean;
  source: string;
}

export interface ReviewsResponse {
  success: boolean;
  data: GoogleReview[];
  cached: boolean;
  lastUpdated: string;
  count: number;
  message?: string;
}

export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isCached, setIsCached] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/reviews');
      const data: ReviewsResponse = await response.json();
      
      if (data.success) {
        setReviews(data.data);
        setLastUpdated(data.lastUpdated);
        setIsCached(data.cached);
      } else {
        setError(data.message || 'Failed to fetch reviews');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshReviews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Clear cache first
      await fetch('/api/reviews', { method: 'POST' });
      
      // Fetch fresh data
      await fetchReviews();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh reviews');
    }
  }, [fetchReviews]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    reviews,
    loading,
    error,
    lastUpdated,
    isCached,
    refreshReviews,
    fetchReviews
  };
};
