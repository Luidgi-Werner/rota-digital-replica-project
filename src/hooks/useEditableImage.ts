import { useState, useEffect, useCallback } from 'react';

interface UseEditableImageProps {
  defaultImage: string;
  imageKey: string; // Unique identifier for this image
}

// Development-only storage for image editing
const getStoredImage = (key: string): string | null => {
  if (typeof window === 'undefined' || !import.meta.env.DEV) return null;
  try {
    return localStorage.getItem(`edited-image-${key}`);
  } catch {
    return null;
  }
};

const setStoredImage = (key: string, value: string): void => {
  if (typeof window === 'undefined' || !import.meta.env.DEV) return;
  try {
    localStorage.setItem(`edited-image-${key}`, value);
  } catch {
    // Silently fail in production or if localStorage is unavailable
  }
};

export const useEditableImage = ({ defaultImage, imageKey }: UseEditableImageProps) => {
  // In production, always use the default image
  const getInitialImage = () => {
    if (!import.meta.env.DEV) return defaultImage;
    const stored = getStoredImage(imageKey);
    return stored || defaultImage;
  };

  const [currentImage, setCurrentImage] = useState(() => getInitialImage());

  // Update image when key or default changes
  useEffect(() => {
    if (!import.meta.env.DEV) {
      setCurrentImage(defaultImage);
      return;
    }

    const storedImage = getStoredImage(imageKey);
    if (storedImage && storedImage !== currentImage) {
      setCurrentImage(storedImage);
    } else if (!storedImage && defaultImage !== currentImage) {
      setCurrentImage(defaultImage);
    }
  }, [imageKey, defaultImage, currentImage]);

  // Image change handler - only works in development
  const handleImageChange = useCallback((newImageUrl: string) => {
    setCurrentImage(newImageUrl);
    
    if (import.meta.env.DEV) {
      setStoredImage(imageKey, newImageUrl);
    }
  }, [imageKey]);

  return {
    currentImage,
    handleImageChange,
  };
};