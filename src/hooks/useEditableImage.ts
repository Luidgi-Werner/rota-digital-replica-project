import { useState, useEffect } from 'react';

interface UseEditableImageProps {
  defaultImage: string;
  imageKey: string; // Unique identifier for this image
}

export const useEditableImage = ({ defaultImage, imageKey }: UseEditableImageProps) => {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  // Initialize with default image
  useEffect(() => {
    setCurrentImage(defaultImage);
  }, [defaultImage]);

  const handleImageChange = (newImageUrl: string) => {
    setCurrentImage(newImageUrl);
    // In a real implementation, you might want to persist this change
    // For now, it will only persist during the session
  };

  return {
    currentImage,
    handleImageChange,
  };
};