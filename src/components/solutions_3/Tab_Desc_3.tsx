"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TabContent = ({ image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="mt-8 md:mr-8"
  >
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <Image 
        src={image} 
        alt="Tab Image" 
        width={500} 
        height={300} 
        layout="responsive"
        className="w-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  </motion.div>
);

export default function Tabs_Desc_3({ data }) {
  const [activeTab, setActiveTab] = useState(Object.keys(data.tabs)[0]);

  return (
    <div className="flex flex-col px-4 md:px-5 py-8 md:py-12 max-w-7xl mx-auto bg-white rounded-lg">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12"
      >
        {data.heading}
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 md:mt-8 flex flex-row md:flex-col justify-center md:justify-start flex-wrap md:flex-nowrap gap-4 md:gap-0">
          {Object.entries(data.tabs).map(([key, { title, icon }]) => (
            <motion.button 
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-[calc(50%-0.5rem)] md:w-full max-w-[150px] flex items-center justify-center py-3 md:py-5 px-4 md:px-6 mb-0 md:mb-[40px] md:ml-[80px] text-sm font-medium rounded-md shadow-sm transition-all duration-300 ${
                activeTab === key
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {title}
            </motion.button>
          ))}
        </div>
        <div className="w-full md:w-2/3 md:pr-8 md:mr-[100px]">
          <AnimatePresence mode="wait">
            {Object.entries(data.tabs).map(([key, { title, content, image }]) => (
              activeTab === key && (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{title}</h2>
                  <p className="text-base md:text-lg leading-7 text-gray-600 mb-4">{content}</p>
                  <TabContent image={image} />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}