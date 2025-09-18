// Performance monitoring script - optimized for minimal impact
(function() {
  'use strict';
  
  // Only run in production to avoid development overhead
  if (process.env.NODE_ENV === 'development') return;
  
  try {
    if ('performance' in window && 'getEntriesByType' in performance) {
      // Use requestIdleCallback for non-critical performance monitoring
      const scheduleMonitoring = () => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(monitorPerformance, { timeout: 5000 });
        } else {
          setTimeout(monitorPerformance, 1000);
        }
      };

      const monitorPerformance = () => {
        try {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
            
            // Only log if performance is poor (for debugging)
            if (loadTime > 3000 || domContentLoaded > 2000) {
              console.warn('Performance warning:', {
                loadTime: Math.round(loadTime),
                domContentLoaded: Math.round(domContentLoaded)
              });
            }
          }
        } catch (error) {
          // Silently fail to avoid console spam
        }
      };

      // Schedule monitoring after page load
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleMonitoring);
      } else {
        scheduleMonitoring();
      }
    }
  } catch (error) {
    // Silently fail to avoid console spam
  }
})();
