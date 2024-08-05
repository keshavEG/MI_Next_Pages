"use client"
import * as React from "react";
import Image from 'next/image';

const stats = [
  { value: '195 +', label: 'Countries trade data' },
  { value: '29 +', label: 'Exclusive countries' },
  { value: '2B +', label: 'Shipment records' },
  { value: '3M +', label: 'Importer exporter' },
];

export default function Platform_Globe() {
  return (
    <div className=" py-10 relative w-full h-screen bg-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/Product_Platform_Globe_bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
      />
      
      {/* Content container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 h-full flex flex-col justify-center">
        <h1 className="text-[40px] font-bold mb-6 max-w-[600px] leading-tight">
          MARKET INSIDE IS TRUSTED BY BUSINESSES AND CONSUMERS AROUND THE WORLD
        </h1>
        
        <p className="text-gray-600 mb-12 max-w-[600px] text-[15px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
        
        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-8 max-w-[600px]">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-[28px] font-bold text-[#FFA500]">{stat.value}</div>
              <div className="text-[13px] text-gray-600 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}