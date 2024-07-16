"use client"

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function InsightsSlider() {
  const carouselItems = [
    {
      image: "/electronics_importer.png",
      title: "Electronics",
      content: "The highest importing comodities for the year 2020, in the pre-pandemic environment, were electronic products. The products such as laptops, cellular networks, mobile phones, webcams, headgears found an increasing demand in the countries.",
    },
    {
      image: "/industrial_machinery_importer.png",
      title: "Industrial Machinery",
      content: "Industrial machinery is the highly demanded component of industrial production for manufacturing different final products. China is the largest producer and exporter of industrial machinery and other countries import most of their machinery from China only.",
    },
    {
      image: "/fuel_oil_importer.png",
      title: "Fuels And Oils",
      content: "Petroleum and natural gas are the core industries that give 'fuel' or energy to different industries. Russia and Middle-East countries are the largest producers of oil in the world and export the highest to geographical locations such as China, the EU, and the USA.",
    },
    {
      image: "/electronics_importer.png",
      title: "Electronics",
      content: "The highest importing comodities for the year 2020, in the pre-pandemic environment, were electronic products. The products such as laptops, cellular networks, mobile phones, webcams, headgears found an increasing demand in the countries.",
    },
    {
      image: "/industrial_machinery_importer.png",
      title: "Industrial Machinery",
      content: "Industrial machinery is the highly demanded component of industrial production for manufacturing different final products. China is the largest producer and exporter of industrial machinery and other countries import most of their machinery from China only.",
    },
    {
      image: "/fuel_oil_importer.png",
      title: "Fuels And Oils",
      content: "Petroleum and natural gas are the core industries that give 'fuel' or energy to different industries. Russia and Middle-East countries are the largest producers of oil in the world and export the highest to geographical locations such as China, the EU, and the USA.",
    }

  ];

  return (
    <div className="w-full py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">INDUSTRY-DRIVEN INSIGHTS FOR UP-TO-DATE INFORMATION</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-[1200px] mx-auto"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/3 lg:basis-1/3">
              <div className="p-4">
                <div className="bg-zinc-50 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">{item.title}</h3>
                    <p className="text-neutral-500 text-sm">{item.content}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default InsightsSlider;