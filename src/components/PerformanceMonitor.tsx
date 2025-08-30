'use client';

import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
}

interface MetricData {
  name: string;
  value: number;
  id?: string;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor page load performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navigationEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navigationEntry.loadEventEnd - navigationEntry.loadEventStart);
          console.log('DOM Content Loaded:', navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource load:', resourceEntry.name, resourceEntry.duration);
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Monitor layout shifts
    const layoutShiftObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (layoutShiftEntry.value > 0.1) {
          console.warn('Layout shift detected:', layoutShiftEntry.value);
        }
      }
    });

    layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
      layoutShiftObserver.disconnect();
    };
  }, []);

  return null;
}

// Helper function to send performance data to analytics
export function sendPerformanceData(metric: MetricData) {
  // Send to Google Analytics or other analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
}

// Helper function to optimize images
export function optimizeImage(src: string, width: number, quality: number = 75): string {
  // Add image optimization parameters
  const url = new URL(src, window.location.origin);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('fm', 'webp');
  return url.toString();
}

// Helper function to preload critical resources
export function preloadResource(href: string, as: string, type?: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.setAttribute('as', as);
  if (type) {
    link.setAttribute('type', type);
  }
  document.head.appendChild(link);
}

// Helper function to defer non-critical CSS
export function deferCSS(href: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
}
