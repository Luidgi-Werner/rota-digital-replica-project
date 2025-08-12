import { useState, useEffect } from 'react';

interface UseEditableImageProps {
  defaultImage: string;
  imageKey: string; // Unique identifier for this image
}

// Global storage for edited images during session
const sessionImageStorage: { [key: string]: string } = {};

export const useEditableImage = ({ defaultImage, imageKey }: UseEditableImageProps) => {
  // Use stored image if available, otherwise use default
  const initialImage = sessionImageStorage[imageKey] || defaultImage;
  const [currentImage, setCurrentImage] = useState(initialImage);

  // Initialize with stored or default image
  useEffect(() => {
    const storedImage = sessionImageStorage[imageKey];
    if (storedImage && storedImage !== currentImage) {
      setCurrentImage(storedImage);
    }
  }, [imageKey, defaultImage]);

  const handleImageChange = (newImageUrl: string) => {
    setCurrentImage(newImageUrl);
    // Store in session storage
    sessionImageStorage[imageKey] = newImageUrl;
    
    // If this is a product image from carousel, also update the list view (but not detail view)
    if (imageKey.includes('product-') && imageKey.includes('-carousel')) {
      const productId = imageKey.replace('product-', '').replace('-carousel', '');
      // Update only the list key, keeping detail view independent
      sessionImageStorage[`product-${productId}-list`] = newImageUrl;
    } else if (imageKey.includes('product-') && imageKey.includes('-list')) {
      const productId = imageKey.replace('product-', '').replace('-list', '');
      // Update only the carousel key, keeping detail view independent
      sessionImageStorage[`product-${productId}-carousel`] = newImageUrl;
    }
  };

  return {
    currentImage,
    handleImageChange,
  };
};