"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function ExploreThroughWideDatabase() {
  return (
    <div className="relative  bg-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gray-100 rounded-bl-[100%] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-tr-[100%] z-0"></div>
      
      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8 mb-12 lg:mb-0">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            EXPLORE<br />THROUGH<br />A WIDE<br />DATABASE!
          </h1>
          <div className="w-full max-w-md">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full px-4 py-3 text-sm font-semibold uppercase bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 text-sm font-bold text-white uppercase bg-gray-700 rounded-md hover:bg-gray-800 transition duration-300 shadow-md"
          >
            FREE TRIAL
          </button>
        </div>
        
        {/* Right column */}
        <div style={{ zIndex: "-1"}} className="w-full lg:w-1/2 flex justify-center items-center">
          <DotLottiePlayer
            src="https://lottie.host/e05a8a1d-fa02-435e-af0a-0edcc0636f65/msaawEkbUo.json"
            autoplay
            loop
            style={{ width: '100%', height: '100%', maxWidth: '600px', maxHeight: '600px' }}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-orange-200 rounded-full opacity-50"></div>
    </div>
  );
}