"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import ReadMoreDialog from '../solutions/Read_More_Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InsightsCard = ({ title, content, imageSrc }) => (
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 mx-2 cursor-pointer">
    <Image
      src={imageSrc}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-110 rounded-lg"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90 transition-all duration-300 sm:group-hover:transition-none"></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end transform group-hover:translate-y-0 transition-transform duration-300 sm:group-hover:transition-none">
      <h3 className="text-2xl font-bold mb-2 text-white uppercase transition-all duration-300 group-hover:mb-3 sm:group-hover:transition-none">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-200 transition-all duration-300 line-clamp-3 group-hover:line-clamp-none sm:group-hover:transition-none">{content}</p>
      <div className="mt-4 transition-all duration-300 group-hover:mt-5 sm:group-hover:transition-none">
        <ReadMoreDialog title={title} />
      </div>
    </div>
  </div>
);

const InsightsCards_3 = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="container mx-auto px-4 py-12 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          {data.heading}
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={goToPrev}
            className="group relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-md"
          >
            <span className="absolute inset-0 w-full h-full bg-orange-500"></span>
            <span className="relative text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </span>
          </button>
          <button
            onClick={goToNext}
            className="group relative inline-flex items-center justify-center p-4 px-5 py-5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-md"
          >
            <span className="absolute inset-0 w-full h-full bg-orange-500"></span>
            <span className="relative text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {data.items.map((card, index) => (
          <InsightsCard key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default InsightsCards_3;
