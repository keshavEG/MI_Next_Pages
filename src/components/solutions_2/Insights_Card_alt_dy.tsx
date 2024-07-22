"use client";

import React from 'react';
import Image from 'next/image';
import ReadMoreDialog from '../solutions/Read_More_Cards';

const InsightsCard = ({ title, content, imageSrc }) => (
  <div className="relative w-full sm:w-[48%] lg:w-[32%] aspect-[4/3] overflow-hidden rounded-lg shadow-lg mb-6 group">
    <Image
      src={imageSrc}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition-opacity duration-300">
      <div className="p-6 flex flex-col justify-between h-full text-white">
        <h3 className="text-xl font-bold mb-2 uppercase">{title}</h3>
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">{content}</p>
          <ReadMoreDialog title={title} />
        </div>
      </div>
    </div>
  </div>
);

const InsightsCards = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-12">
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

export default InsightsCards;
