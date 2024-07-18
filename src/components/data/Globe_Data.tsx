import Image from "next/image";

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
            <Image
              loading="lazy"
              src="/globe_data.png"
              alt="Globe"
              layout="fill"
              objectFit="cover"
              className="w-full h-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    );
}