"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const TabContent = ({ title, content, image }) => (
  <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto max-md:mt-10">
          <div className="flex gap-4 px-2.5 text-xl font-semibold leading-6 text-black uppercase">
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
          layout="responsive"
          width={800}
          height={450}
          className="grow w-full aspect-[1.78] max-md:mt-10 max-md:max-w-full"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
