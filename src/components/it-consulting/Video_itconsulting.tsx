import Image from "next/image"

export default function Video(){
    return(
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[421px] max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7ed417f8548604cf3ad40a48f34048f83af34d6426b2d2f02c1281d9b30b21?apiKey=1d97127843014888b916aa6ba331e743&"
          className="object-cover absolute inset-0 size-full"
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
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72fc1ed3beddc59237428c0485176b8b3a21b18ccfff4f58283a4c30e1ec0910?apiKey=1d97127843014888b916aa6ba331e743&"
              className="aspect-square w-[58px]"
            /> */}
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