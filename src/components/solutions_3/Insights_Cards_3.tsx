"use client";

import React from 'react';
import Image from 'next/image';
import ReadMoreDialog from '../solutions/Read_More_Cards';

const InsightsCard = ({ title, content, imageSrc }) => (
  <div className="relative w-full sm:w-[48%] lg:w-[32%] aspect-[4/3] overflow-hidden rounded-lg shadow-lg mb-6 group bg-gray-50 hover:bg-white transition-all duration-300">
    <Image
      src={imageSrc}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="p-6 flex flex-col justify-end h-full text-white">
        <h3 className="text-xl font-bold mb-2 uppercase">{title}</h3>
        <p className="text-sm leading-relaxed">{content}</p>
        <ReadMoreDialog title={title} />
      </div>
    </div>
  </div>
);

const InsightsCards_3 = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        {data.heading}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {data.items.map((card, index) => (
          <InsightsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default InsightsCards_3;
