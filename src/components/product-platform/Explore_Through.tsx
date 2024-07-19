import React from 'react';

export default function Explore_Through() {
  return (
    <div className="flex flex-col items-center pb-3.5 w-full bg-orange-400 rounded-full">
      <div className="flex flex-col items-center px-16 pb-20 rounded-full bg-neutral-50 w-full max-md:px-5">
        <div className="flex flex-col items-center mb-4 w-full text-center">
          <div className="flex gap-5 w-full max-md:flex-col max-md:gap-0 items-center justify-center">
            <div className="flex flex-col w-[24%] max-md:w-full items-center">
              <div className="mt-72 text-6xl font-bold text-black uppercase leading-[66px] max-md:mt-10 max-md:text-4xl max-md:leading-[53px]">
                Explore Through A Wide Database!

                <div className="flex justify-center items-start px-5 py-3 max-w-full text-sm font-bold leading-4 uppercase bg-white rounded-md border border-solid border-zinc-400 text-stone-300 w-[287px] max-md:w-full">
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
            <div className="flex flex-col w-[76%] max-md:w-full items-center">
              <div className="shrink-0 max-w-full rounded-full bg-neutral-200 h-[414px] w-[970px]" />
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-5">
            {/* <div className="flex justify-center items-start px-5 py-3 max-w-full text-sm font-bold leading-4 uppercase bg-white rounded-md border border-solid border-zinc-400 text-stone-300 w-[287px] max-md:w-full">
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
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}