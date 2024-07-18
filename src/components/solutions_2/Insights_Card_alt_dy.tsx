"use client";
import React from 'react';
import Image from 'next/image';

const InsightsCard = ({ title, content, imageSrc }) => (
  <div className="flex flex-col w-[32%] max-md:w-full card">
    <div className="flex flex-col grow justify-center w-full font-semibold text-white bg-black leading-[120%] max-md:mt-4">
      <div className="flex overflow-hidden relative flex-col px-10 py-10 w-full aspect-[0.9] mix-blend-plus-lighter max-md:px-5">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative text-2xl uppercase">
          {title}
        </div>
        <div className="relative mt-10 text-base leading-6 text-justify max-md:mt-10">
          {content}
        </div>
        <div className="flex relative gap-2 self-start mt-11 text-sm font-bold text-orange-400 uppercase max-md:mt-10">
          {/* Placeholder for the "Read more" section if needed */}
        </div>
      </div>
    </div>
  </div>
);  

const InsightsCards = ({ data }) => {
  return (
    <div className="self-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 flex-wrap max-md:flex-col max-md:gap-0">
        {data.map((card, index) => (
          <InsightsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default InsightsCards;
