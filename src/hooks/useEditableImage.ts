import { useState, useEffect, useCallback, useMemo } from 'react';

interface UseEditableImageProps {
  defaultImage: string;
  imageKey: string; // Unique identifier for this image
}

// Persistent storage for edited images
const getStoredImage = (key: string): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(`edited-image-${key}`);
  } catch {
    return null;
  }
};

const setStoredImage = (key: string, value: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`edited-image-${key}`, value);
  } catch {
    // Fallback to memory storage if localStorage fails
    sessionImageStorage[key] = value;
  }
};

// Fallback memory storage with cleanup
const sessionImageStorage: { [key: string]: string } = {};

// Cleanup function to prevent memory leaks
const cleanupImageStorage = () => {
  if (typeof window !== 'undefined') {
    const keys = Object.keys(sessionImageStorage);
    if (keys.length > 100) { // Keep only last 50 entries
      keys.slice(0, -50).forEach(key => delete sessionImageStorage[key]);
    }
  }
};

// Debounce utility
let debounceTimer: NodeJS.Timeout;

export const useEditableImage = ({ defaultImage, imageKey }: UseEditableImageProps) => {
  // Simple initial image calculation - no memoization here to avoid React issues
  const getInitialImage = () => {
    const stored = getStoredImage(imageKey);
    if (stored) return stored;
    if (sessionImageStorage[imageKey]) return sessionImageStorage[imageKey];
    return defaultImage;
  };

  const [currentImage, setCurrentImage] = useState(getInitialImage);

  // Update image when key or default changes
  useEffect(() => {
    const storedImage = getStoredImage(imageKey);
    if (storedImage && storedImage !== currentImage) {
      setCurrentImage(storedImage);
    } else if (!storedImage && defaultImage !== currentImage) {
      setCurrentImage(defaultImage);
    }
  }, [imageKey, defaultImage]);

  // Optimized image change handler with debouncing
  const handleImageChange = useCallback((newImageUrl: string) => {
    setCurrentImage(newImageUrl);
    
    // Debounce storage operations
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      // Store persistently
      setStoredImage(imageKey, newImageUrl);
      sessionImageStorage[imageKey] = newImageUrl;
      
      // Sync between carousel and list views (but not detail view)
      if (imageKey.includes('product-') && imageKey.includes('-carousel')) {
        const productId = imageKey.replace('product-', '').replace('-carousel', '');
        const listKey = `product-${productId}-list`;
        // Prevent loops by checking if target already has this value
        if (getStoredImage(listKey) !== newImageUrl) {
          setStoredImage(listKey, newImageUrl);
          sessionImageStorage[listKey] = newImageUrl;
        }
      } else if (imageKey.includes('product-') && imageKey.includes('-list')) {
        const productId = imageKey.replace('product-', '').replace('-list', '');
        const carouselKey = `product-${productId}-carousel`;
        // Prevent loops by checking if target already has this value
        if (getStoredImage(carouselKey) !== newImageUrl) {
          setStoredImage(carouselKey, newImageUrl);
          sessionImageStorage[carouselKey] = newImageUrl;
        }
      }
      
      // Cleanup to prevent memory leaks
      cleanupImageStorage();
    }, 300);
  }, [imageKey]);

  // Simple return object - no memoization to avoid React issues
  return {
    currentImage,
    handleImageChange,
  };
};