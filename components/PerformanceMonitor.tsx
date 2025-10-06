"use client";

import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        let metricLabel = entry.name;
        let metricValue = 0;

        if (entry.entryType === "largest-contentful-paint") {
          // LCP: use renderTime/loadTime/startTime (ms)
          const lcp = entry as LargestContentfulPaint;
          metricLabel = "LCP";
          metricValue = (lcp.renderTime || lcp.loadTime || lcp.startTime) ?? 0;
        } else if (entry.entryType === "first-input") {
          // FID: processingStart - startTime (ms)
          const fid = entry as PerformanceEventTiming;
          metricLabel = "FID";
          metricValue = (fid.processingStart || 0) - (fid.startTime || 0);
        } else if (entry.entryType === "layout-shift") {
          // CLS: value (unitless). Send scaled value for integer analytics
          const cls = entry as unknown as {
            value: number;
            hadRecentInput?: boolean;
          };
          metricLabel = "CLS";
          // Ignore shifts triggered by recent input per spec guidance
          metricValue = cls.hadRecentInput ? 0 : cls.value;
        }

        // Log performance metrics
        console.log(`${metricLabel}: ${metricValue}`);

        // Send to analytics (replace with your analytics service)
        if (typeof window !== "undefined") {
          type Gtag = (
            command: "event",
            eventName: string,
            params: Record<string, unknown>
          ) => void;
          const w = window as unknown as { gtag?: Gtag };
          if (w.gtag) {
            const sendValue =
              metricLabel === "CLS"
                ? Math.round(metricValue * 1000) // scale CLS
                : Math.round(metricValue);
            w.gtag("event", metricLabel, {
              value: sendValue,
              event_category: "Web Vitals",
              event_label: metricLabel,
              non_interaction: true,
            });
          }
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    // Monitor page load performance
    window.addEventListener("load", () => {
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;

      const metrics = {
        "DNS Lookup": navigation.domainLookupEnd - navigation.domainLookupStart,
        "TCP Connection": navigation.connectEnd - navigation.connectStart,
        "TLS Negotiation":
          navigation.secureConnectionStart > 0
            ? navigation.connectEnd - navigation.secureConnectionStart
            : 0,
        TTFB: navigation.responseStart - navigation.requestStart,
        "DOM Content Loaded":
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        "Page Load": navigation.loadEventEnd - navigation.loadEventStart,
      };

      console.log("Performance Metrics:", metrics);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
