export default function Globe_Data(){
    return(
        <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-extrabold uppercase leading-[65px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              <span className="text-5xl font-bold text-orange-400 leading-[60px]">
                Global
              </span>
              <br />
              <span className="text-5xl font-bold text-orange-400 leading-[60px]">
                Import-Export
              </span>
              <br />
              <span className="text-5xl font-bold leading-[60px]">
                Trade Intelligence
              </span>
            </div>
            <div className="mt-9 text-xl leading-8 text-stone-500 max-md:max-w-full">
              The World's Largest Online Global Trade Intelligence With In-Depth
              Insights Into International Trade Markets
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6647ab42a7fcb935aa719ab65d33b4e2ac604fe6a7d08b94b30c7fde5583ae2e?"
            className="grow w-full aspect-[1.2] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
    );
}