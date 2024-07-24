"use client"

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";


function Slider() {
  const carouselItems = [
    { icon: "/shipicon.png", title: "2B +", subtitle: "Shipments Count" },
    { icon: "/globeicon.png", title: "3M Total", subtitle: "Exporter Importer" },
    { icon: "/mapicon.png", title: "+195", subtitle: "Countries Trade Data" },
    { icon: "/trade_data.png", title: "Global", subtitle: "Trade Data" },
    { icon: "/historical_data.png", title: "5Y+", subtitle: "Historical Data" },
    { icon: "/trade_document_icon.png", title: "100M+", subtitle: "Trade Documents" },
    { icon: "/update_icon.png", title: "Real-time", subtitle: "Updates" },
    { icon: "/ai_icon.jpg", title: "AI-Powered", subtitle: "Analytics" },
  ];

  return (
    <div className="relative w-full py-8">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-[1000px] mx-auto"
    >
      <CarouselContent className="ml-6">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="pl-6 md:basis-1/4 basis-3/4">
            <div className="search-card-div">
              <Card className="w-[200px] border border-gray-200 rounded-xl shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 h-[160px]">
                  <Image
                    loading="lazy"
                    src={item.icon}
                    width={64}
                    height={64}
                    alt=""
                    className="mb-4"
                  />
                  <div className="text-center text-sm font-semibold">
                    {item.title}
                    {item.subtitle.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-0 md:-left-12 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute -right-0 md:-right-12 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  </div>
  );
}

export default Slider;