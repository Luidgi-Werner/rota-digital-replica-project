import { useState, useEffect } from 'react';

interface UseEditableImageProps {
  defaultImage: string;
  imageKey: string; // Unique identifier for this image
}

// Persistent storage for edited images
const getStoredImage = (key: string): string | null => {
  try {
    return localStorage.getItem(`edited-image-${key}`);
  } catch {
    return null;
  }
};

const setStoredImage = (key: string, value: string): void => {
  try {
    localStorage.setItem(`edited-image-${key}`, value);
  } catch {
    // Fallback to memory storage if localStorage fails
    sessionImageStorage[key] = value;
  }
};

// Fallback memory storage
const sessionImageStorage: { [key: string]: string } = {};

export const useEditableImage = ({ defaultImage, imageKey }: UseEditableImageProps) => {
  // Use stored image if available, otherwise use default
  const initialImage = getStoredImage(imageKey) || sessionImageStorage[imageKey] || defaultImage;
  const [currentImage, setCurrentImage] = useState(initialImage);

  // Initialize with stored or default image
  useEffect(() => {
    const storedImage = getStoredImage(imageKey) || sessionImageStorage[imageKey];
    if (storedImage && storedImage !== currentImage) {
      setCurrentImage(storedImage);
    }
  }, [imageKey, defaultImage]);

  const handleImageChange = (newImageUrl: string) => {
    setCurrentImage(newImageUrl);
    // Store persistently
    setStoredImage(imageKey, newImageUrl);
    sessionImageStorage[imageKey] = newImageUrl;
    
    // If this is a product image from carousel, also update the list view (but not detail view)
    if (imageKey.includes('product-') && imageKey.includes('-carousel')) {
      const productId = imageKey.replace('product-', '').replace('-carousel', '');
      const listKey = `product-${productId}-list`;
      // Update only the list key, keeping detail view independent
      setStoredImage(listKey, newImageUrl);
      sessionImageStorage[listKey] = newImageUrl;
    } else if (imageKey.includes('product-') && imageKey.includes('-list')) {
      const productId = imageKey.replace('product-', '').replace('-list', '');
      const carouselKey = `product-${productId}-carousel`;
      // Update only the carousel key, keeping detail view independent
      setStoredImage(carouselKey, newImageUrl);
      sessionImageStorage[carouselKey] = newImageUrl;
    }
  };

  return {
    currentImage,
    handleImageChange,
  };
};