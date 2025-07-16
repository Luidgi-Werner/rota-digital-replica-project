import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmM2Y0ZjYiLz4KPHN2ZyB4PSIzNSIgeT0iMzUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMS41Ij4KPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz4KPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjIiLz4KPHBhdGggZD0ibTIxIDEyLTMuNS0zLjVjLS43LS43LTEuOC0uNy0yLjUgMGwtMTAuNSAxMC41Ii8+CjwvZz4KPC9zdmc+",
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  }, []);

  // Lazy loading setup
  const imageRef = useCallback((node: HTMLImageElement | null) => {
    if (node && !priority && !isInView) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '50px'
      });
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [handleIntersection, priority, isInView]);

  // Create WebP source if supported
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const shouldUseWebP = src !== webpSrc && typeof window !== 'undefined' && 
    'loading' in HTMLImageElement.prototype;

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          className
        )}
        style={{ width, height }}
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className={cn(
            "absolute inset-0 w-full h-full object-cover blur-sm scale-105 transition-opacity duration-300",
            isLoaded ? "opacity-0" : "opacity-100",
            className
          )}
          style={{ width, height }}
        />
      )}

      {/* Main Image */}
      {(priority || isInView) && (
        <picture>
          {/* WebP source for supported browsers */}
          {shouldUseWebP && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          
          {/* Fallback image */}
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            className={cn(
              "transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              className
            )}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;