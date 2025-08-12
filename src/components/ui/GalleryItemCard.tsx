import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import ImageEditor from "@/components/admin/ImageEditor";
import { useEditableImage } from "@/hooks/useEditableImage";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface GalleryItemCardProps {
  item: GalleryItem;
}

const GalleryItemCard = React.memo(({ item }: GalleryItemCardProps) => {
  const { currentImage, handleImageChange } = useEditableImage({
    defaultImage: item.image,
    imageKey: `product-${item.id}-carousel`
  });

  return (
    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
      <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
        <div>
          <div className="flex aspect-[3/2] overflow-clip relative">
            <div className="flex-1">
              <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                {/* Mostrar ImageEditor apenas no ambiente de desenvolvimento/edição */}
                {import.meta.env.DEV && (
                  <ImageEditor 
                    currentImage={currentImage} 
                    onImageChange={handleImageChange}
                    productName={`${item.title} - Gallery`}
                  />
                )}
                <img
                  src={currentImage}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
            {item.title}
          </div>
          <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
            {item.summary}
          </div>
          <div className="flex justify-start mt-auto">
            <Button 
              className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
              asChild
            >
              <Link to={item.url}>
                <ArrowRight className="size-4" />
                Saiba mais
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
});

GalleryItemCard.displayName = "GalleryItemCard";

export default GalleryItemCard;