import React from "react";
import Image from "next/image";

export default function Video({ data }) {
  return (
    <div className="flex flex-col justify-center text-white">
      <div className="flex overflow-hidden relative flex-col items-center px-20 py-16 w-full min-h-[372px] max-md:px-5 max-md:max-w-full">
        <Image
          loading="lazy"
          src={data.videoSrcSet}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative text-6xl font-bold uppercase leading-[66px] max-md:text-4xl">
          {data.title}
        </div>
        <div className="relative mt-8 text-base leading-7 text-center w-[1000px] max-md:max-w-full">
          {data.description}
        </div>
        <button className="mt-8 border-white border-solid aspect-square border-[6px] stroke-[6px] stroke-white w-[58px] relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M33.0286 25.0298L16.6978 37.3607L16.6978 12.6978L33.0286 25.0298Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}
