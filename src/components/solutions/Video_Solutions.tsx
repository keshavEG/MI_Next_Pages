import React from "react";
import Image from "next/image";

export default function Video({ data }) {
  return (
    <div className="flex flex-col justify-center text-white">
      <div className="relative overflow-hidden w-full min-h-[372px]">
        <Image
          src={data.videoSrcSet}
          alt={data.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-20 py-16 max-md:px-5">
          <h1 className="text-6xl font-bold uppercase leading-[66px] max-md:text-4xl mb-8">
            {data.title}
          </h1>
          <p className="text-base leading-7 text-center max-w-[1000px]">
            {data.description}
          </p>
          <button className="mt-8 w-20 h-20 flex items-center justify-center bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300">
            <Image
              src="/play_button.png"
              alt="Play button"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
}