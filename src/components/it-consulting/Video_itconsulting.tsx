import Image from "next/image"

export default function Video(){
    return(
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[421px] max-md:px-5">

        <Image 
          src="/it_consulting_bg.png"
          layout="fill"
          objectFit="cover"
          alt="It Consulting"
        />
        <div className="flex relative gap-5 justify-between mt-4 w-full max-w-[1107px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col text-white max-md:max-w-full">
            <div className="text-5xl font-extrabold uppercase leading-[55px] max-md:max-w-full max-md:text-4xl">
              IT AND CONSULTING
            </div>
            <div className="justify-center p-2.5 mt-1.5 text-xl leading-8 lowercase max-md:max-w-full">
              Expand the horizons of your IT and Consulting business with our
              trade data intelligence platform. Identify the region with highest
              demand, most efficient and cost effective trade route, and forecates
              the potential future trade disruption, for your client business
              expansion by targeted market strategies.
            </div>
          </div>
          <div className="flex justify-center items-center self-start px-16 mt-3.5 rounded-full aspect-square bg-white bg-opacity-90 max-md:px-5">
            <Image
            src="/play_button_it_consulting.png"
            width={120}
            height={120}
            alt="Play Button"
            />
          </div>
        </div>
      </div>
    )
}