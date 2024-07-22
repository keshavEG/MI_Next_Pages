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
    className="mt-8"
  >
    <p className="text-lg leading-7 text-gray-700 mb-6">{content}</p>
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={600}
        layout="responsive"
        className="w-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  </motion.div>
);

export default function Tabs_Desc({ data }) {
  const [activeTab, setActiveTab] = useState(Object.keys(data.tabs)[0]);

  return (
    <div className="flex flex-col px-5 py-12 max-w-6xl mx-auto">
      <motion.h1
      style={{fontSize:"2.25rem"}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-4xl md:text-5xl font-bold leading-tight text-center text-gray-900 uppercase mb-12"
      >
        {data.heading}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {Object.entries(data.tabs).map(([key, { title, icon }]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center py-3 px-4 text-base sm:text-lg font-semibold rounded-lg shadow-sm transition-all duration-300 ${
              activeTab === key
                ? 'bg-orange-400 text-white'
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