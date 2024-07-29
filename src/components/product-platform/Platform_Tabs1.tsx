'use client'

import { useRef, useEffect, Fragment, useState, useCallback } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import UseEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function PlatformTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = UseEmblaCarousel({ loop: true }, [Autoplay()])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])


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
  }, [selectedIndex])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="py-10 bg-gray-50">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="w-full bg-black sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:block">
              <Tab.List className="flex justify-between items-center py-4 text-sm font-semibold text-white uppercase overflow-x-auto scrollbar-hide">
                {tabs.map((tab, index) => (
                  <Tab key={index} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`focus:outline-none transition-colors duration-150 ease-in-out whitespace-nowrap px-2
                          ${selected ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                      >
                        {tab.title}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <div className="md:hidden relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex py-4">
                  {tabs.map((tab, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-4">
                      <button
                        className={`focus:outline-none transition-colors duration-150 ease-in-out text-center w-full text-sm font-semibold uppercase
                          ${selectedIndex === index ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                        onClick={() => {
                          emblaApi.scrollTo(index)
                          setSelectedIndex(index)
                        }}
                      >
                        {tab.title}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
                onClick={scrollNext}
                disabled={!canScrollNext}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16">
          <Tab.Panels>
            <div className="relative" ref={tabsRef}>
              {tabs.map((tab, index) => (
                <Tab.Panel
                  key={index}
                  className={`transition-all duration-300 ease-in-out ${
                    selectedIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0 right-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-8 md:mb-16">
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
                    <div className="w-full md:w-7/12 mt-6 md:mt-0">
                      <Image
                        src={tab.img}
                        alt={tab.title}
                        width={400}
                        height={367}
                        className="w-full h-auto rounded-lg shadow-xl max-w-md mx-auto"
                      />
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}