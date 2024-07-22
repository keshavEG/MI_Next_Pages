"use client";
import React from "react";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { usePathname } from "next/navigation";
import { headings } from "@/constants";

interface BusinessInsightsProps {
  backgroundImageSrc: string;
}

export const BusinessInsights: React.FC<BusinessInsightsProps> = () => {
  const pathname = usePathname();

  // Extract the last part of the url
  const currentPath = pathname.split("/").pop();

  const { title, subtitle } = headings[currentPath] || headings["default"];

  return (
    <section style={{ background: "#f1f2f5" }} className="flex flex-col justify-center font-bold text-black uppercase leading-[120%]">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full mix-blend-darken min-h-[343px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c8eeb9c255f5c0e6e592165eae6371ea851415d4df869aea5311345257c4726?apiKey=eb52322d8492475fa80e1000b081f742&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col items-center mt-8 mb-2 max-w-full w-[1314px]">
          <Heading level={2} className="justify-center text-4xl">
            {title}
          </Heading>
          <Heading level={3} className="text-center justify-center self-stretch mt-2.5 text-2xl max-md:max-w-full">
            {subtitle}
          </Heading>
          <Button className="mt-2.5">Schedule A Demo</Button>
        </div>
      </div>
    </section>
  );
};
