import Image from 'next/image';
import React from 'react';

export default function Resource_Center() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="mt-32 text-6xl font-bold text-black uppercase leading-[66px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Resource Center
      </div>
      <div className="mt-3 text-base leading-7 text-neutral-500 max-md:max-w-full">
        Browse ZoomInfo’s library of free educational resources for B2B
        professionals
      </div>
      <button className="justify-center px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
        Free Trial
      </button>
      <div className="self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="/Video_preview.png"
              width={800}
              height={536}
              alt="Resource Image"
              className="grow w-full aspect-[1.49] max-md:mt-6 max-md:max-w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2 self-start text-center text-black whitespace-nowrap leading-[120%]">
                <Image
                  loading="lazy"
                  src="/webinar_icon.png"
                  width={20}
                  height={20}
                  alt="Webinar Icon"
                  className="shrink-0 w-5 aspect-square fill-zinc-400"
                />
                <div>WEBINAR</div>
              </div>
              <div className="mt-3 text-4xl font-bold leading-10 text-black uppercase max-md:max-w-full">
                How to Build and Scale an Effective ABM Demand-Gen Strategy
              </div>
              <div className="mt-3 leading-7 text-neutral-500 max-md:max-w-full">
                Join us live to get the building blocks that will help you
                incorporate account-based experiences in an informed way.
              </div>
              <div className="shrink-0 mt-3 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full" />
              <div className="flex gap-1.5 self-start py-2.5 mt-3 text-sm font-semibold leading-4 text-amber-600 uppercase">
                <div>FEBRUARY 7 </div>
                <div>3:30 AM ET</div>
              </div>
              <button className="justify-center self-start px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                Read more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
