export default function Explore_Through(){
    return(
    <div
  className="flex flex-col pb-3.5 max-w-full bg-orange-400 rounded-full w-[1240px] max-md:pr-5"
  
>
  <div className="flex flex-col items-end px-16 pb-20 rounded-full bg-neutral-50 max-md:pl-5 max-md:max-w-full">
    <div className="flex flex-col items-start mb-4 w-full max-md:max-w-full">
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div className="mt-72 text-6xl font-bold text-black uppercase leading-[66px] max-md:mt-10 max-md:text-4xl max-md:leading-[53px]">
              Explore Through A Wide Database!
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto max-w-full rounded-full bg-neutral-200 h-[414px] w-[970px]" />
          </div>
        </div>
      </div>
      <div className="justify-center items-start px-5 py-3 mt-3 max-w-full text-sm font-bold leading-4 uppercase bg-white rounded-md border border-solid border-zinc-400 text-stone-300 w-[287px] max-md:pr-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent focus:outline-none w-full"
        />
      </div>
      <button
        type="submit"
        className="justify-center px-6 py-3 mt-5 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5"
      >
        Free Trial
      </button>
    </div>
  </div>
</div>

    )
}