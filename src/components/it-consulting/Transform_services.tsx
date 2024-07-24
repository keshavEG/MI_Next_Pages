import Image from 'next/image';
import React from 'react';

export default function Transform() {
  return (
    <div className="flex flex-col">
      <div className="w-full text-4xl font-bold leading-10 text-black text-center uppercase max-md:max-w-full">
        Transform Your Services From Global Trade Data
      </div>
      <div className="flex gap-5 justify-between items-start self-center px-5 mt-10 max-md:flex-col max-md:items-center max-md:mt-10">
        <div className="flex flex-col items-center max-md:w-full max-md:items-center">
          <Image
            loading="lazy"
            src="/modern_icon_itc.png"
            width={79}
            height={79}
            alt="Modernized Strategies"
            className="aspect-square"
            sizes="(max-width: 768px) 100vw, 79px"
          />
          <div className="mt-5 text-xl font-semibold leading-6 text-orange-400 capitalize">
            Modernized Strategies
          </div>
          <div className="self-stretch mt-5 text-base leading-6 text-center text-neutral-500">
            Keep up-to-date with the dynamic technology upgrades in the
            international market which companies are demanding for the most as
            requirements.
          </div>
        </div>
        <div className="flex flex-col items-center max-md:w-full max-md:items-center">
          <Image
            loading="lazy"
            src="/improved_mech_itc.png"
            width={79}
            height={79}
            alt="Improved Mechanism"
            className="aspect-square"
            sizes="(max-width: 768px) 100vw, 79px"
          />
          <div className="mt-5 text-xl font-semibold leading-6 text-orange-400 capitalize">
            Improved Mechanism
          </div>
          <div className="self-stretch mt-5 text-base leading-6 text-center text-neutral-500">
            Create innovative roadmaps and build upgraded version of your
            business's system in compliance with the required data for your
            clients.
          </div>
        </div>
        <div className="flex flex-col items-center max-md:w-full max-md:items-center">
          <Image
            loading="lazy"
            src="/automated_ops_itc.png"
            width={79}
            height={79}
            alt="Automated Operation"
            className="aspect-square"
            sizes="(max-width: 768px) 100vw, 79px"
          />
          <div className="mt-5 text-xl font-semibold leading-6 text-orange-400 capitalize">
            Automated Operation
          </div>
          <div className="self-stretch mt-5 text-base leading-6 text-center text-neutral-500">
            Utilise the application programming interface (API) in our global
            trade intelligence platform to simplify and max out the final output
            of your business operations.
          </div>
        </div>
      </div>
    </div>
  );
}
