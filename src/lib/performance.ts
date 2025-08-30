// Performance optimization utilities for mobile devices

export interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  supportsReducedMotion: boolean;
  isLowEndDevice: boolean;
  hasTouchScreen: boolean;
}

// Detect device capabilities
export function getDeviceCapabilities(): DeviceCapabilities {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      supportsReducedMotion: false,
      isLowEndDevice: false,
      hasTouchScreen: false,
    };
  }

  const width = window.innerWidth;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Check for touch screen
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Detect low-end devices based on hardware concurrency and memory
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const isLowEndDevice = hardwareConcurrency <= 4 || hasTouchScreen;
  
  // Determine device type
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;

  return {
    isMobile,
    isTablet,
    isDesktop,
    supportsReducedMotion: prefersReducedMotion,
    isLowEndDevice,
    hasTouchScreen,
  };
}

// Hook to get device capabilities
export function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>(() => getDeviceCapabilities());

  useEffect(() => {
    const updateCapabilities = () => {
      setCapabilities(getDeviceCapabilities());
    };

    // Listen for changes
    window.addEventListener('resize', updateCapabilities);
    
    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateCapabilities);

    return () => {
      window.removeEventListener('resize', updateCapabilities);
      mediaQuery.removeEventListener('change', updateCapabilities);
    };
  }, []);

  return capabilities;
}

// Animation optimization helpers
export function getOptimizedAnimationSettings(capabilities: DeviceCapabilities) {
  const { isMobile, supportsReducedMotion, isLowEndDevice } = capabilities;

  return {
    // Disable animations on mobile or when reduced motion is preferred
    shouldAnimate: !supportsReducedMotion && !isMobile && !isLowEndDevice,
    
    // Simplified animation durations
    duration: {
      fast: supportsReducedMotion ? 0.1 : 0.2,
      normal: supportsReducedMotion ? 0.2 : 0.4,
      slow: supportsReducedMotion ? 0.3 : 0.8,
    },
    
    // Reduced animation intensity
    scale: {
      hover: supportsReducedMotion ? 1 : 1.02,
      tap: supportsReducedMotion ? 1 : 0.98,
    },
    
    // Simplified transitions
    ease: "easeOut" as const,
  };
}

// CSS optimization helpers
export function getOptimizedCSSClasses(capabilities: DeviceCapabilities) {
  const { isMobile, isLowEndDevice } = capabilities;

  return {
    // Reduce blur effects on low-end devices
    blur: isLowEndDevice ? 'blur-sm' : 'blur-md',
    blurLarge: isLowEndDevice ? 'blur-md' : 'blur-xl',
    
    // Reduce shadow complexity
    shadow: isLowEndDevice ? 'shadow-md' : 'shadow-lg',
    shadowLarge: isLowEndDevice ? 'shadow-lg' : 'shadow-2xl',
    
    // Optimize backdrop blur
    backdropBlur: isLowEndDevice ? 'backdrop-blur-sm' : 'backdrop-blur-md',
  };
}

// Performance monitoring
export function monitorAnimationPerformance() {
  if (typeof window === 'undefined') return;

  let frameCount = 0;
  let lastTime = performance.now();

  const checkPerformance = (currentTime: number) => {
    frameCount++;
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      
      // If FPS is consistently low, mark as low performance
      if (fps < 30) {
        // Disable complex animations
        document.documentElement.classList.add('low-performance');
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(checkPerformance);
  };

  requestAnimationFrame(checkPerformance);
}

// Debounce function for performance
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Intersection Observer for lazy loading animations
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  if (typeof window === 'undefined') return null;

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Import useState and useEffect for the hook
import { useState, useEffect } from 'react';
