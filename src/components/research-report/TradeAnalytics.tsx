import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@mui/material';
import Image from 'next/image'

export const TradeAnalytics = () => {
    return (
        <div className='trade-div'>
            <div className='trade-heading-div'>
                <h2 style={{ color: '#a0a0a0', textTransform: 'uppercase', fontWeight: '700' }}>Samples For Accuracy Of Our <span style={{ color: 'black' }}>Trade Analytics</span> </h2>
                <p style={{ fontWeight: '500' }}>Check out the samples for Market Inside’s trade datasets, prepared with the retrieval of data from our sources and then processed by our in-house data analysts.</p>
            </div>
            <div className='trade-card-div'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='trade-card'>
                                <h3>Turkey trade data</h3>
                                <Image width={400} height={400} alt='' src="/tradedata.png" />
                                <Button className='valuable-btn' variant="contained" sx={{
                                    backgroundColor: '#f8992f',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#f7aa59',
                                    },
                                }}>Request A Demo</Button>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='trade-card'>
                                <h3>Bangladesh import data</h3>
                                <Image width={400} height={400} alt='' src="/tradedata.png" />
                                <Button className='valuable-btn' variant="contained" sx={{
                                    backgroundColor: '#f8992f',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#f7aa59',
                                    },
                                }}>Request A Demo</Button>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='trade-card'>
                                <h3>Vietnam trade data</h3>
                                <Image width={400} height={400} alt='' src="/tradedata.png" />
                                <Button className='valuable-btn' variant="contained" sx={{
                                    backgroundColor: '#f8992f',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#f7aa59',
                                    },
                                }}>Request A Demo</Button>
                            </div>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='trade-card'>
                                <h3>Turkey trade data</h3>
                                <Image width={400} height={400} alt='' src="/tradedata.png" />
                                <Button className='valuable-btn' variant="contained" sx={{
                                    backgroundColor: '#f8992f',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#f7aa59',
                                    },
                                }}>Request A Demo</Button>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='trade-card'>
                                <h3>Bangladesh import data</h3>
                                <Image width={400} height={400} alt='' src="/tradedata.png" />
                                <Button className='valuable-btn' variant="contained" sx={{
                                    backgroundColor: '#f8992f',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#f7aa59',
                                    },
                                }}>Request A Demo</Button>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='trade-card'>
                                <h3>Vietnam trade data</h3>
                                <Image width={400} height={400} alt='' src="/tradedata.png" />
                                <Button className='valuable-btn' variant="contained" sx={{
                                    backgroundColor: '#f8992f',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#f7aa59',
                                    },
                                }}>Request A Demo</Button>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            <div style={{ textAlign: 'center'}}><h1 style={{ fontSize: '60px'}}>...</h1></div>
            </div>
            <Button variant="contained" sx={{
                backgroundColor: '#666666',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#828282',
                },
            }}>view more countries data</Button>
        </div>
    )
}
