"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Resource_Center() {
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const webinarData = {
    title: 'How to Build and Scale an Effective ABM Demand-Gen Strategy',
    date: currentTime,
  };

  return (
    <div className="flex flex-col items-center px-5">
      <div className="mt-32 text-6xl font-bold text-black uppercase leading-[66px] max-md:mt-10 max-md:max-w-full max-md:text-4xl text-center">
        Resource Center
      </div>
      <div className="mt-3 text-base leading-7 text-neutral-500 max-md:max-w-full text-center">
        Browse ZoomInfo’s library of free educational resources for B2B professionals
      </div>
      <button className="justify-center px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
        Free Trial
      </button>
      <div className="self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-10 max-md:flex-col max-md:gap-5">
          <motion.div
            className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              loading="lazy"
              src="/Video_preview.png"
              width={800}
              height={536}
              alt="Resource Image"
              className="grow w-full aspect-[1.49] max-md:mt-6 max-md:max-w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            className="flex flex-col w-6/12 max-md:w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 self-start text-center text-black whitespace-nowrap leading-[120%] mb-4">
                <motion.div initial="hidden" animate="visible" variants={imageVariants}>
                  <Image
                    loading="lazy"
                    src="/webinar_icon.png"
                    width={20}
                    height={20}
                    alt="Webinar Icon"
                    className="shrink-0 w-5 aspect-square fill-zinc-400"
                  />
                </motion.div>
                <div className="text-lg font-semibold">WEBINAR</div>
              </div>
              <div className="text-4xl font-bold leading-10 text-black uppercase max-md:max-w-full mb-4">
                {webinarData.title}
              </div>
              <div className="leading-7 text-neutral-500 max-md:max-w-full mb-4">
                Join us live to get the building blocks that will help you incorporate account-based experiences in an informed way.
              </div>
              <div className="shrink-0 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full mb-4" />
              <div className="flex items-center gap-1.5 self-start py-2.5 text-sm font-semibold leading-4 text-amber-600 uppercase mb-4">
                <div>{formatDate(webinarData.date)}</div>
                <div>{formatTime(webinarData.date)}</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#4a4a4a' }}
                whileTap={{ scale: 0.95 }}
                className="justify-center self-start px-6 py-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5"
              >
                Read more...
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
