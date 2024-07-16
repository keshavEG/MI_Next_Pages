// components/Tabs_Desc.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const TabContent = ({ title, content, image }) => (
  <div className="mt-8">
    {/* <h3 className="text-xl font-semibold mb-4">{title}</h3> */}
    <p className="text-base leading-7 text-neutral-500 mb-4">{content}</p>
    <Image src={image} alt={title} className="w-full rounded-lg shadow-md" width={500} height={300} />
  </div>
);

export default function Tabs_Desc({ data }) {
  const [activeTab, setActiveTab] = useState(Object.keys(data.tabs)[0]);

  return (
    <div className="flex flex-col px-5 max-w-6xl mx-auto">
      <h1 className="w-full text-4xl font-bold leading-tight text-center text-black uppercase mb-8">
        {data.heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(data.tabs).map(([key, { title }]) => (
          <button
            key={key}
            className={`flex items-center justify-center py-4 px-6 text-lg font-semibold rounded-xl shadow-sm transition-colors ${
              activeTab === key ? 'bg-orange-400 text-white' : 'bg-white text-black hover:bg-gray-100'
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
