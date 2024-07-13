"use client";
import Image from "next/image";
import styles from "./Default_Globe.module.css";

export default function Default_Globe() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <Image
            src="/globe_plans.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="grow w-full aspect-[1.08] max-md:mt-7 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold leading-10 text-black uppercase max-md:max-w-full">
              choose
            </div>
            <div className="text-6xl font-bold text-black uppercase leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
              <span className="text-orange-400">the</span>{" "}
              <span className="text-orange-400">Right Plan</span> <br />
              for Your Business
            </div>
            <div className="flex gap-5 mt-16 max-md:flex-wrap max-md:mt-10">
              <div className="flex gap-5 justify-between">
                <div
                  className="shrink-0 border-white border-solid bg-neutral-200 border-[18px] h-[87px] w-[87px] rounded-full"
                />
                <div className="flex flex-col my-auto">
                  <div className="shrink-0 h-1.5 bg-white rounded-2xl" />
                  <div className="shrink-0 mt-3 h-1.5 bg-white rounded-2xl" />
                  <div className="shrink-0 mt-3 bg-white rounded-2xl h-[5px]" />
                  <div className="shrink-0 mt-3 h-1.5 bg-white rounded-2xl" />
                </div>
              </div>
              <div className="flex gap-5 justify-between">
                <div className={styles.icon}>
                  <svg
                    width="87"
                    height="87"
                    viewBox="0 0 87 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43.5" cy="43.5" r="40" fill="#F7F7F7" />
                    <path
                      d="M34.5 43.5L43.5 52.5L59.5 36.5"
                      stroke="#FFC107"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col my-auto">
                  <div className="shrink-0 bg-white rounded-2xl h-[5px]" />
                  <div className="shrink-0 mt-3 h-1 bg-white rounded-2xl" />
                  <div className="shrink-0 mt-3 bg-white rounded-2xl h-[5px]" />
                  <div className="shrink-0 mt-3 h-1.5 bg-white rounded-2xl" />
                </div>
              </div>
              <div className="flex gap-5 justify-between">
                <div
                  className="shrink-0 border-white border-solid bg-neutral-200 border-[18px] h-[87px] w-[87px] rounded-full"
                />
                <div className="flex flex-col my-auto">
                  <div className="shrink-0 h-1 bg-white rounded-2xl" />
                  <div className="shrink-0 mt-3.5 h-1 bg-white rounded-2xl" />
                  <div className="shrink-0 mt-3 bg-white rounded-2xl h-[5px]" />
                  <div className="shrink-0 mt-3 h-1 bg-white rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}