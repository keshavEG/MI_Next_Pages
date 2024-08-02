"use client"
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function Globe_Data() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-4">
              <span className="block text-orange-500">GLOBAL</span>
              <span className="block text-orange-500">IMPORT-EXPORT</span>
              <span className="block">TRADE INTELLIGENCE</span>
            </h1>
            <p className="text-lg sm:text-xl leading-7 text-gray-600 mb-8 max-w-2xl">
              The World's Largest Online Global Trade Intelligence With In-Depth Insights Into International Trade Markets
            </p>
            <div className="flex items-center">
              {/* <span className="text-2xl font-bold text-orange-500 mr-2">AD</span>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">→</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 w-full max-w-lg md:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DotLottiePlayer
              src="https://lottie.host/d91975e8-eafb-4584-aa71-89b991bcb875/YpFOtFaI58.json"
              autoplay
              loop
              style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-50 to-transparent z-0"></div>
    </div>
  );
}