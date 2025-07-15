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
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/903104ea-f548-4211-b20a-dd4f31ead431.png"
                          alt="Mesa Ginecológica RT2000"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Ginecológica RT2000
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa ginecológica com design moderno e funcionalidade superior para consultórios e clínicas.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-ginecologica-rt-2000'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/0a53f766-a52a-4352-8e90-e48ebed6d54d.png"
                          alt="Mesa Ginecológica RT2500"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Ginecológica RT2500
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa ginecológica com tecnologia avançada e conforto excepcional para procedimentos médicos.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-ginecologica-rt-2500'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/730ec665-6cab-4d6c-8ec1-0a35f0bbbcab.png"
                          alt="Mesa Ginecológica RT4000 Histeroscopia"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Ginecológica RT4000 Histeroscopia
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa especializada para procedimentos de histeroscopia com recursos avançados.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-ginecologica-rt-4000-histeroscopia'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/397ff049-0d7a-44a2-b6b1-39de2cd1fdaa.png"
                          alt="Mesa Clínica RT3000"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Clínica RT3000
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa clínica elétrica com função Trendelenburg para versatilidade em procedimentos.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-clinica-eletrica-trendlemburg-rt-3000'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/194abd76-e92b-4b29-8a56-6d6dbcbc311f.png"
                          alt="Mesa Clínica RT5000"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Clínica RT5000
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa clínica robusta e versátil para diversos tipos de procedimentos médicos.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-clinica-rt-5000'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/098f7cbc-6f3e-4478-a4b4-18cd8176da14.png"
                          alt="Mesa Clínica RT5000 Estetic"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Clínica RT5000 Estetic
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa clínica especialmente desenvolvida para procedimentos estéticos e dermatológicos.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-clinica-rt-5000-estetic'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/40920a3b-86b8-47bd-91a9-b2156975f1e2.png"
                          alt="Mesa Clínica RT5000 E-IC"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Clínica RT5000 E-IC
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa clínica com controle eletrônico integrado para máxima precisão e conforto.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-clinica-rt-5000-e-ic'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex aspect-[3/2] overflow-clip">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src="/lovable-uploads/efc36694-baf9-4529-bcec-f1b460390026.png"
                          alt="Mesa Clínica RT2500 ES"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2 line-clamp-3 break-words text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                    Mesa Clínica RT2500 ES
                  </div>
                  <div className="mb-6 line-clamp-2 text-sm text-gray-600 leading-relaxed flex-grow">
                    Mesa clínica compacta e eficiente, ideal para consultórios com espaços otimizados.
                  </div>
                  <div className="flex justify-start mt-auto">
                    <Button 
                      className="bg-[#003250] text-white hover:bg-[#003250]/90 rounded-md px-6 py-2 text-sm flex items-center gap-2"
                      onClick={() => window.location.href = '/produto/mesa-clinica-rt-2500-es'}
                    >
                      <ArrowRight className="size-4" />
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };