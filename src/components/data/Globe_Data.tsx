"use client"
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function Globe_Data() {
  return (
    <div className="relative flex flex-col bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 23, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:py-20 max-w-7xl mx-auto w-full h-full">
        <motion.div 
          className="lg:w-[55%] mb-10 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight lg:leading-[1.1] text-neutral-700 mb-6">
            <motion.span 
              className="block text-orange-400 mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Global
            </motion.span>
            <motion.span 
              className="block text-orange-400 mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Import-Export
            </motion.span>
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Trade Intelligence
            </motion.span>
          </h1>
          <motion.p 
            className="text-lg sm:text-xl leading-7 sm:leading-8 text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The World's Largest Online Global Trade Intelligence With In-Depth Insights Into International Trade Markets
          </motion.p>
          <motion.button 
            className="px-6 sm:px-8 py-3 bg-orange-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
            <motion.span 
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="lg:w-[45%] w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          >
            <DotLottiePlayer
              src="https://lottie.host/d91975e8-eafb-4584-aa71-89b991bcb875/YpFOtFaI58.json"
              autoplay
              loop
              style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}