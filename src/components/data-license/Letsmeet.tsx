import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomersWorldwide from '../home/customers-worldwide'
import Image from 'next/image'
import ScheduleDemo from '../contactus/Iframe_Container'
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

const DemoTab = ({ iframe }) => (
    <div className="w-full h-[calc(75vh-80px)] min-h-[400px]">
        <iframe src={iframe} title="Demo Scheduler" className="w-full h-full border-0"></iframe>
    </div>
);

const Letsmeet = () => {

    const [activeTab, setActiveTab] = useState('all');

    const tabData = {
        all: {
            title: "ALL TYPES / ENGLISH",
            iframe: "https://meetings.hubspot.com/info9419/market-inside-platform-demo?embed=true"
        },
        spanish: {
            title: "FOR ENGLISH / SPANISH SPEAKERS",
            iframe: "https://meetings.hubspot.com/surendra2?embed=true"
        },
        russian: {
            title: "FOR ENGLISH / RUSSIAN SPEAKERS",
            iframe: "https://meetings.hubspot.com/renu1?embed=true"
        }
    };

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
        
        <div className='letmeet-div'>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className='desktop-view-datalicense letmeet-left-div'>
                            <div>
                                <h3 style={{ color: '#a0a0a0' }}>Trusted By Clients All Over The World For <span style={{ color: 'black' }}>Global Supply Chain Solutions</span> </h3>
                            </div>
                            <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10">
                                <Image
                                    loading="lazy"
                                    src="/wipag.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/alphagary.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/solvay.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                            </div>
                            <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <Image
                                    loading="lazy"
                                    src="/envalior.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/tecnar.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/tecnar.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                                />
                            </div>
                            <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <Image
                                    loading="lazy"
                                    src="/ampacet.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/mgg.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 self-start max-w-full aspect-[1.47] w-[133px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/sipol.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                            </div>
                            <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <Image
                                    loading="lazy"
                                    src="/vamp.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/ineos.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[133px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/ineos.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[133px]"
                                />
                            </div>
                        </div>

                        <div className="mobile-view-datalicense flex flex-col">
                        <div>
                                <h3 style={{ color: '#a0a0a0', marginBottom: '40px' }}>Trusted By Clients All Over The World For <span style={{ color: 'black' }}>Global Supply Chain Solutions</span> </h3>
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

                    </Col>
                    <Col md={5}>
                        <div className='letmeet-right-div'>
                            {/* <div>
                                <h3 style={{ color: '#a0a0a0' }}>Explore Our Wide <span style={{ color: 'black' }}>Global Trade Database</span> </h3>

                            </div> */}

                            <div className="flex flex-wrap justify-center gap-2 md:gap-5 w-full max-w-[746px]">
                                {Object.entries(tabData).map(([key, { title }]) => (
                                    <button
                                        key={key}
                                        className={`py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-semibold leading-4 uppercase transition-colors ${activeTab === key
                                            ? 'bg-amber-600 text-white'
                                            : 'bg-zinc-50 text-black hover:bg-zinc-100'
                                            }`}
                                        onClick={() => setActiveTab(key)}
                                    >
                                        {title}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-1 md:mt-14 w-full max-w-[853px] bg-white rounded-lg shadow-md overflow-hidden">
                                <DemoTab {...tabData[activeTab]} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Letsmeet