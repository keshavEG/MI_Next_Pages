"use client"
import Image from "next/image";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function Globe_Data(){
    return(
      <div className="flex flex-col px-20 py-16 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[55%] max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-extrabold uppercase leading-[65px] text-neutral-700 max-md:text-4xl max-md:leading-[52px]">
              <span className="text-5xl font-bold text-orange-400 leading-[60px]">Global</span>
              <br />
              <span className="text-5xl font-bold text-orange-400 leading-[60px]">Import-Export</span>
              <br />
              <span className="text-5xl font-bold leading-[60px]">Trade Intelligence</span>
            </div>
            <div className="mt-9 text-xl leading-8 text-stone-500 max-md:max-w-full">
              The World's Largest Online Global Trade Intelligence With In-Depth Insights Into International Trade Markets
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[45%] max-md:w-full">
          <div className="relative w-full h-0 pb-[83.33%] max-md:pb-[125%]"> {/* Maintain aspect ratio */}
          <DotLottiePlayer
            src="https://lottie.host/e05a8a1d-fa02-435e-af0a-0edcc0636f65/msaawEkbUo.json"
            autoplay
            loop
            style={{ width: '100%', height: '100%', maxWidth: '600px', maxHeight: '600px' }}
          />
          </div>
        </div>
      </div>
    </div>
    );
}