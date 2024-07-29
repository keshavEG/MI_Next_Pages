"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Explore_More() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true, 
      timeZone: 'America/New_York'
    }) + ' ET';
  };

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sidebarItems = [
    { name: 'Lead Generation', link: '/lead-generation' },
    { name: 'Sales Prospecting', link: '/sales-prospecting' },
    { name: 'Demand Generation', link: '/demand-generation' },
    { name: 'Data Management', link: '/data-management' },
    { name: 'Go-To-Market', link: '/go-to-market' },
    { name: 'Sales Automation', link: '/sales-automation' },
    { name: 'Recruitment Process', link: '/recruitment-process' },
  ];

  const webinarData = [
    {
      title: '15 Minutes to Sales Mastery: What You Should Have Said',
      date: currentTime,
    },
    {
      title: "Steal ZoomInfo's Cold Email Formula",
      date: currentTime,
    }
  ];

  return (
    <div className="flex pl-6 pr-6 gap-5 max-md:flex-col max-md:gap-0">
      <motion.div
        className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full"
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
      >
        <div className="flex flex-col px-5 mt-9 text-sm font-semibold leading-4 text-neutral-500 max-md:mt-10">
          <div className="text-3xl leading-10 text-black">Explore More</div>
          {sidebarItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={item.link} passHref>
                <div className="justify-center px-4 py-2.5 mt-2 uppercase cursor-pointer hover:text-orange-400">
                  {item.name}
                </div>
              </Link>
              <div className="shrink-0 mt-1.5 h-px border border-solid bg-neutral-400 border-neutral-400" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
        <div className="grow max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {['Latest Collections', 'Demand Generation'].map((section, index) => (
              <motion.div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="flex flex-col grow p-7 w-full font-bold text-black bg-zinc-50 leading-[120%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                  <div className="text-4xl leading-10 uppercase">
                    {index === 0 ? (
                      <>
                        <span className="text-gray-300">Latest</span> Collections
                      </>
                    ) : (
                      <>
                        <span className="text-gray-300">Demand</span> Generation
                      </>
                    )}
                  </div>
                  <div className="mt-7 text-xl font-semibold text-orange-400 uppercase">
                    Sales Prospecting
                  </div>
                  {webinarData.map((webinar, wIndex) => (
                    <div key={wIndex}>
                      <div className="flex gap-2.5 self-start mt-7 text-base text-center whitespace-nowrap">
                        <Image
                          loading="lazy"
                          src="/webinar_icon.png"
                          width={20}
                          height={20}
                          alt="Webinar Icon"
                          className="shrink-0 w-5 aspect-square fill-zinc-400"
                        />
                        <div>WEBINAR</div>
                      </div>
                      <div className="mt-7 text-3xl leading-10 uppercase text-neutral-400">
                        {webinar.title}
                      </div>
                      <div className="flex gap-1.5 py-2.5 mt-7 text-sm font-semibold leading-4 text-amber-600 uppercase">
                        <div>{formatDate(webinar.date)}</div>
                        <div>{formatTime(webinar.date)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
