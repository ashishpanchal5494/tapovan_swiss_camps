"use client";

import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics
        console.log(`${entry.name}: ${entry.value}`);

        // Send to analytics (replace with your analytics service)
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", entry.name, {
            value: Math.round(entry.value),
            event_category: "Web Vitals",
            event_label: entry.name,
          });
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
