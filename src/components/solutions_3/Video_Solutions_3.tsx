import React from "react";
import Image from "next/image";

export default function Video_Solutions_3({ data }) {
    if (!data || !data.videoSrcSet) {
        console.log("No Image")
        return null;
      }
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="flex flex-wrap gap-5 w-full max-w-6xl">
        <div className="flex flex-col w-full md:w-6/12 p-5">
          <h2 className="text-5xl font-extrabold text-orange-500 mb-4 text-center md:text-left">
            {data.title}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed text-justify md:text-left">
            {data.description}
          </p>
        </div>
        <div className="relative w-full md:w-6/12">
          <Image
            loading="lazy"
            src={data.videoSrcSet}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg shadow-lg"
            
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <Image
                src="/play_button.png"
                alt="Play button"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
