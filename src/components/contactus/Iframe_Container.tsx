"use client"
import React, { useState } from 'react';

const DemoTab = ({ iframe }) => (
  <div className="w-full h-[calc(100vh-150px)] min-h-[500px]">
    <iframe src={iframe} title="Demo Scheduler" className="w-full h-full border-0"></iframe>
  </div>
);

export default function ScheduleDemo() {
  const [activeTab, setActiveTab] = useState('all');

  const tabData = {
    all: {
      title: "ALL TYPES / ENGLISH",
      iframe: "https://meetings.hubspot.com/info9419/market-inside-platform-demo?embed=true"
    },
    spanish: {
      title: "FOR ENGLISH / SPANISH SPEAKERS",
      iframe: "https://meetings.hubspot.com/surendra2?embed=true"
    },
    russian: {
      title: "FOR ENGLISH / RUSSIAN SPEAKERS",
      iframe: "https://meetings.hubspot.com/renu1?embed=true"
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <h1 className="mt-10 md:mt-28 text-2xl md:text-4xl font-bold leading-tight text-black uppercase text-center">
        SCHEDULE A DEMO
      </h1>
      <h2 className="mt-4 text-xl md:text-3xl font-semibold leading-tight text-neutral-400 text-center">
        Select Your Preferred Languages For Demo
      </h2>
      <div className="flex flex-wrap justify-center gap-2 md:gap-5 mt-8 md:mt-14 w-full max-w-[746px]">
        {Object.entries(tabData).map(([key, { title }]) => (
          <button
            key={key}
            className={`py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-semibold leading-4 uppercase transition-colors ${activeTab === key
                ? 'bg-amber-600 text-white'
                : 'bg-zinc-50 text-black hover:bg-zinc-100'
              }`}
            onClick={() => setActiveTab(key)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="mt-8 md:mt-14 w-full max-w-[853px] bg-white rounded-lg shadow-md overflow-hidden">
        <DemoTab {...tabData[activeTab]} />
      </div>
    </div>
  );
}
