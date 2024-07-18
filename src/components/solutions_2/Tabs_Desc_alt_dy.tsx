"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const TabContent = ({ title, content, image }) => (
  <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto max-md:mt-10">
          <div className="flex gap-4 px-2.5 text-xl font-semibold leading-6 text-black uppercase">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6769d18e500d5f6d55b1919390b4064c9fcbe6302a290c00018351c365c079f?apiKey=dedff2e04f3045829c86df72e70dd24a&"
              className="shrink-0 self-start mt-2.5 w-4 aspect-[1.23]"
              alt=""
            />
            <div className="flex-1">
              {title}
            </div>
          </div>
          <div className="mt-9 text-base leading-7 text-neutral-500">
            {content}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
        <Image
          src={image}
          alt={title}
          width={800}
          height={288}
          className="grow w-full aspect-[2.78] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  </div>
);

export default function Tabs_Desc_alt({ data }) {
  const [activeTab, setActiveTab] = useState(Object.keys(data.tabs)[0]);

  return (
    <div className="flex flex-col px-5 max-w-6xl mx-auto">
      <h1 className="w-full text-4xl font-bold leading-tight text-black uppercase mb-8">
        {data.heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(data.tabs).map(([key, { title }]) => (
          <button
            key={key}
            className={`flex items-center justify-center py-4 px-6 text-lg font-semibold rounded-xl shadow-sm transition-colors ${
              activeTab === key
                ? 'bg-orange-400 text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(key)}
          >
            {title}
          </button>
        ))}
      </div>
      <TabContent {...data.tabs[activeTab]} />
    </div>
  );
}
