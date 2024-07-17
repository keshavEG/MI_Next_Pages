import React from "react";
import Image from "next/image";

export default function Video_Alt() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-bold text-orange-400 uppercase leading-[66px] max-md:max-w-full max-md:text-4xl">
              IMPORTERS
            </div>
            <div className="mt-3 text-base leading-7 text-justify text-neutral-500 max-md:max-w-full">
              Search for suppliers and keep a track of the inbound and outbound
              shipments through global trade customs data. Find product sourcing
              from the largest online trade database with the company's details
              to filter through a large list of prospects for your business.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="relative grow w-full aspect-[1.96] max-md:mt-4 max-md:max-w-full">
            <Image
              loading="lazy"
              src="/importer_alt.png"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-14 h-14">
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
    </div>
  );
}
