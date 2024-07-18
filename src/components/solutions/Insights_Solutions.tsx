"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import ReadMoreDialog from "./Read_More_Cards";

export default function InsightsSlider({ data }) {
  return (
    <div className="w-full py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{data.heading}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-[1200px] mx-auto"
      >
        <CarouselContent className="-ml-4">
          {data.carouselItems.map((item, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-[420px] bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg flex flex-col">
                <div className="h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-orange-500 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow overflow-hidden line-clamp-4">{item.content}</p>
                  <ReadMoreDialog title={item.title} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white text-orange-500 hover:bg-orange-100" />
        <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white text-orange-500 hover:bg-orange-100" />
      </Carousel>
    </div>
  );
}