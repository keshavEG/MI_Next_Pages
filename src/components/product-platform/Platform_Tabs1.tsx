'use client'

import { useRef, useEffect, Fragment , useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import  UseEmblaCarousel   from 'embla-carousel-react'

export default function PlatformTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = UseEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  const tabs = [
    {
      title: 'SOURCING',
      content: 'A FULLY INTEGRATED SUITE OF FINANCIAL AND PAYMENTS PRODUCTS',
      img: '/tabs_pp_1.png',
      excerpt: "Dive into possible trade opportunities and gain access to import and export data of 195+ countries. Unlock detailed insights, and analyze market trends from the global trade data. ",
    },
    {
      title: 'ENGAGEMENT',
      content: 'ENGAGEMENT CONTENT GOES HERE',
      img: '/tabs_pp_1.png',
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: 'TALENT POOL MANAGEMENT',
      content: 'TALENT POOL MANAGEMENT CONTENT GOES HERE',
      img: '/tabs_pp_1.png',
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: 'RECRUITING DATABASE',
      content: 'RECRUITING DATABASE CONTENT GOES HERE',
      img: '/tabs_pp_1.png',
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: 'BRANDING',
      content: 'BRANDING CONTENT GOES HERE',
      img: '/tabs_pp_1.png',
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ]

  const tabsRef = useRef(null)

  const heightFix = () => {
    if (tabsRef.current && tabsRef.current.parentElement) 
      tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="py-10 bg-gray-50">
      <Tab.Group>
        {({ selectedIndex }) => (
          <div>
            <div className="hidden md:block w-full bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Tab.List className="flex justify-between items-center py-4 text-sm font-semibold text-white uppercase overflow-x-auto scrollbar-hide">
                  {tabs.map((tab, index) => (
                    <Tab key={index} as={Fragment}>
                      <button
                        className={`focus:outline-none transition-colors duration-150 ease-in-out whitespace-nowrap 
                          ${selectedIndex === index ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                      >
                        {tab.title}
                      </button>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <div className="block md:hidden w-full bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Carousel ref={emblaRef} className="py-4">
                <CarouselContent>
                  {tabs.map((tab, index) => (
                    <CarouselItem key={index}>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`focus:outline-none transition-colors duration-150 ease-in-out text-center w-full text-sm font-semibold uppercase
                              ${selected ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                            onClick={() => emblaApi.scrollTo(index)}
                          >
                            {tab.title}
                          </button>
                        )}
                      </Tab>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full">Prev</CarouselPrevious>
                <CarouselNext className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full">Next</CarouselNext>
              </Carousel>
            </div>
          </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
              <Tab.Panels>
                <div className="relative flex flex-col" ref={tabsRef}>
                  {tabs.map((tab, index) => (
                    <Tab.Panel
                      key={index}
                      as={Fragment}
                      static={true}
                    >
                      <Transition
                        show={selectedIndex === index}
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
                        enterFrom="opacity-0 -translate-y-8"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-12"
                        beforeEnter={() => heightFix()}
                      >
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                          <div className="w-full md:w-5/12">
                            <h2 className="text-2xl md:text-4xl font-bold text-black uppercase leading-tight mb-4 md:mb-6">
                              {tab.content}
                            </h2>
                            <p className="text-sm md:text-base text-neutral-500 mb-6 md:mb-8">
                              {tab.excerpt}
                            </p>
                            <button className="px-4 py-2 md:px-6 md:py-3 bg-orange-400 text-white text-xs md:text-sm font-semibold uppercase rounded-md hover:bg-orange-500 transition-colors">
                              Schedule A Demo
                            </button>
                          </div>
                          <div className="w-full md:w-7/12">
                            <Image
                              src={tab.img}
                              alt={tab.title}
                              width={300}  // Further reduced from 400
                              height={275} // Adjusted to maintain aspect ratio
                              className="w-full h-auto rounded-lg shadow-xl max-w-xs mx-auto" // Changed max-width to max-w-xs
                            />
                          </div>
                        </div>
                      </Transition>
                    </Tab.Panel>
                  ))}
                </div>
              </Tab.Panels>
            </div>
          </div>
        )}
      </Tab.Group>
    </div>
  )
}
