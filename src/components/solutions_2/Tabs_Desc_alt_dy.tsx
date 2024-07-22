"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TabContent = ({ title, content, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="mt-8 flex flex-col md:flex-row gap-8"
  >
    <div className="md:w-1/2 flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-base leading-7 text-gray-600 mb-4">{content}</p>
    </div>
    <div className="md:w-1/2">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <Image 
          src={image} 
          alt={title} 
          width={500} 
          height={300} 
          layout="responsive"
          className="w-full transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </motion.div>
);

export default function Tabs_Desc_alt({ data }) {
  const [activeTab, setActiveTab] = useState(Object.keys(data.tabs)[0]);

  return (
    <div className="flex flex-col px-5 py-12 max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.h1 
        style={{fontSize:"2.25rem"}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-4xl md:text-5xl font-bold leading-tight text-center text-gray-900 uppercase mb-12"
      >
        {data.heading}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(data.tabs).map(([key, { title, icon }]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center py-4 px-6 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 ${
              activeTab === key
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(key)}
          >
            
            {title}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <TabContent key={activeTab} {...data.tabs[activeTab]} />
      </AnimatePresence>

    </div>
  );
}