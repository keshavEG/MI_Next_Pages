"use client"
import Image from 'next/image';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";

function CustomersWorldwide() {
    const customers = [
        { src: '/wipag.png', aspect: 'aspect-[1.45]', width: 134 },
        { src: '/alphagary.png', aspect: 'aspect-[1.43]', width: 133 },
        { src: '/solvay.png', aspect: 'aspect-[1.45]', width: 134 },
        { src: '/envalior.png', aspect: 'aspect-[1.45]', width: 134 },
        { src: '/tecnar.png', aspect: 'aspect-[1.43]', width: 133 },
        { src: '/ampacet.png', aspect: 'aspect-[1.45]', width: 134 },
        { src: '/mgg.png', aspect: 'aspect-[1.47]', width: 133 },
        { src: '/sipol.png', aspect: 'aspect-[1.45]', width: 134 },
        { src: '/vamp.png', aspect: 'aspect-[1.45]', width: 134 },
        { src: '/ineos.png', aspect: 'aspect-[1.45]', width: 133 },
    ];

    return (
        <div className='customers-div'>
            <div className="desktop-view-slider-home flex flex-col">
                <div className='text-builder'>
                    <h2 className="builder-color">Building delightful experiences for our{" "}</h2>
                    <h2 className="customers-worldwide text-black">customers worldwide</h2>
                </div>
                {Array(2).fill().map((_, index) => (
                    <div key={index} className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        {customers.slice(index * 5, (index + 1) * 5).map((customer, idx) => (
                            <Image
                                key={idx}
                                loading="lazy"
                                src={customer.src}
                                width={100}
                                height={100}
                                alt=""
                                className={`shrink-0 max-w-full ${customer.aspect} w-[${customer.width}px]`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="mobile-view-slider-home flex flex-col">
                <div className='text-builder'>
                    <h2 className="builder-color">Building delightful experiences for our{" "}</h2>
                    <h2 className="customers-worldwide text-black">customers worldwide</h2>
                </div>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                    className="w-full max-w-[1000px] mx-auto"
                >
                    <CarouselContent className="ml-6">
                        {customers.map((customer, idx) => (
                            <CarouselItem key={idx} className="pl-6 basis-3/4">
                                <div className="search-card-div">
                                    <Image
                                        loading="lazy"
                                        src={customer.src}
                                        width={500}
                                        height={500}
                                        alt=""
                                        className={`shrink-0 max-w-full ${customer.aspect} w-[${customer.width}px]`}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}

export default CustomersWorldwide;
