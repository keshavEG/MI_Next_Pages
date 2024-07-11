export default function Resource_Center(){
    return(
        <div className="flex flex-col items-center px-5">

        <div className="mt-32 text-6xl font-bold text-black uppercase leading-[66px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Resource Center
        </div>
        <div className="mt-3 text-base leading-7 text-neutral-500 max-md:max-w-full">
          Browse ZoomInfo’s library of free educational resources for B2B
          professionals
        </div>
        <div className="justify-center px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
          Free Trial
        </div>
        <div className="self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c156c264431b8c45442c4259b5e9f04d8f32b90fc4b766778e04f470ad4ce26?apiKey=1d97127843014888b916aa6ba331e743&"
                className="grow w-full aspect-[1.49] max-md:mt-6 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2 self-start text-center text-black whitespace-nowrap leading-[120%]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/438a799a67c2e2e8d248f3d43d2a44ab7bba5e9783710366ddcfb74769f7f0bf?apiKey=1d97127843014888b916aa6ba331e743&"
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
                <div className="justify-center self-start px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                  Read more...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}