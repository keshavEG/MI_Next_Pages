"use client"
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function Globe_Data() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -70, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 70, -30, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight lg:leading-[1.1] text-neutral-800 mb-6">
              <motion.span 
                className="block text-orange-500 mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Global Trade
              </motion.span>
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Intelligence Platform
              </motion.span>
            </h1>
            <motion.p 
              className="text-lg sm:text-xl leading-7 sm:leading-8 text-stone-600 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Unlock global trade insights with our comprehensive platform. Access real-time data, analyze market trends, and make informed decisions to stay ahead in international commerce.
            </motion.p>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Platform
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
            className="lg:w-1/2 w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            >
              <DotLottiePlayer
                src="https://lottie.host/d91975e8-eafb-4584-aa71-89b991bcb875/YpFOtFaI58.json"
                autoplay
                loop
                style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: '195+', label: 'Countries Covered' },
            { value: '2B+', label: 'Trade Records' },
            { value: '3M+', label: 'Companies' },
            { value: '10 Years', label: 'Historical Data' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-stone-600 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}