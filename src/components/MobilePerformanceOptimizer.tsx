'use client';

import { useEffect, useState } from 'react';
import { useDeviceCapabilities, monitorAnimationPerformance } from '@/lib/performance';

interface MobilePerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function MobilePerformanceOptimizer({ children }: MobilePerformanceOptimizerProps) {
  const capabilities = useDeviceCapabilities();
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Monitor performance and adjust accordingly
    let frameCount = 0;
    let lastTime = performance.now();
    let lowPerformanceCount = 0;

    const checkPerformance = (currentTime: number) => {
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // If FPS is consistently low, enable low performance mode
        if (fps < 30) {
          lowPerformanceCount++;
          if (lowPerformanceCount >= 3) {
            setIsLowPerformance(true);
            document.documentElement.classList.add('low-performance');
          }
        } else {
          lowPerformanceCount = Math.max(0, lowPerformanceCount - 1);
          if (lowPerformanceCount === 0 && isLowPerformance) {
            setIsLowPerformance(false);
            document.documentElement.classList.remove('low-performance');
          }
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(checkPerformance);
    };

    requestAnimationFrame(checkPerformance);

    return () => {
      // Cleanup
      document.documentElement.classList.remove('low-performance');
    };
  }, [isLowPerformance]);

  useEffect(() => {
    // Apply performance optimizations based on device capabilities
    const { isMobile, supportsReducedMotion, isLowEndDevice } = capabilities;

    if (isMobile || supportsReducedMotion || isLowEndDevice) {
      document.documentElement.classList.add('mobile-optimized');
    } else {
      document.documentElement.classList.remove('mobile-optimized');
    }

    // Add touch device optimizations
    if (capabilities.hasTouchScreen) {
      document.documentElement.classList.add('touch-device');
    } else {
      document.documentElement.classList.remove('touch-device');
    }

    return () => {
      document.documentElement.classList.remove('mobile-optimized', 'touch-device');
    };
  }, [capabilities]);

  // Apply CSS optimizations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .mobile-optimized * {
        animation-duration: 0.3s !important;
        transition-duration: 0.2s !important;
      }
      
      .mobile-optimized .blur-2xl {
        filter: blur(8px) !important;
      }
      
      .mobile-optimized .blur-3xl {
        filter: blur(12px) !important;
      }
      
      .mobile-optimized .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
      }
      
      .touch-device .hover\\:scale-105:hover {
        transform: none !important;
      }
      
      .touch-device .hover\\:shadow-lg:hover {
        box-shadow: inherit !important;
      }
      
      .low-performance * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
}

// Hook for components to check if they should use simplified animations
export function useSimplifiedAnimations() {
  const capabilities = useDeviceCapabilities();
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkLowPerformance = () => {
      const hasLowPerformanceClass = document.documentElement.classList.contains('low-performance');
      setIsLowPerformance(hasLowPerformanceClass);
    };

    // Check initially
    checkLowPerformance();

    // Set up observer to watch for class changes
    const observer = new MutationObserver(checkLowPerformance);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return {
    shouldSimplify: capabilities.isMobile || capabilities.supportsReducedMotion || capabilities.isLowEndDevice || isLowPerformance,
    capabilities
  };
}
