"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function InsightsSlider({ data }) {
  return (
    <div className="w-full py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">{data.heading}</h2>
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
        <CarouselContent>
          {data.carouselItems.map((item, index) => (
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
