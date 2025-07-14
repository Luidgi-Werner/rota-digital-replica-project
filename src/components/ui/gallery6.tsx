"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  subheading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Gallery",
  subheading,
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="text-center md:text-left">
            {subheading && (
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                {subheading}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500">
              {heading}
            </h2>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-center md:justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto bg-white shadow-md hover:shadow-lg rounded-full"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto bg-white shadow-md hover:shadow-lg rounded-full"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
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
                        onClick={() => window.location.href = item.url}
                      >
                        <ArrowRight className="size-4" />
                        Saiba mais
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };