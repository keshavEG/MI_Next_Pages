"use client"

import * as React from "react";
import { useState } from 'react';

const tabs = [
  { id: 'global-data', label: 'GLOBAL DATA' },
  { id: 'engage-customers', label: 'ENGAGE CUSTOMERS' },
  { id: 'win-faster', label: 'WIN FASTER' },
];

const contentCards = {
  'global-data': [
    { title: 'ACCOUNT BASED MARKETING', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: '683532162897b39d5ba43c3763adf6cfc8323dcaf59456e37eea8c9f918c8639' },
    { title: 'CHAT', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: '034a37730f7d3b7a20faed17a117fde1e6dd27ee9dae8b3cff0fdeb9c9a379b0' },
    { title: 'SALES ENGAGEMENT', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: '27fb15fc39e19b335d8c14df5152ebb4d1aeab3eefb69840461e3063a59ba180' },
  ],
  'engage-customers': [
    { title: 'EMAIL VERIFICATION', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: '5bfe1a649da3cbcf61af5b074120b6e4698bb2994d6f6a4d84dc1691bbd88b58' },
    { title: 'LEAD CAPTURE', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: '4275d9c9ccaa1f36691f0f49d924733977ff81b8564e04d96a783a1967fa0a29' },
  ],
  'win-faster': [
    { title: 'CUSTOM CARD 1', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: 'placeholder_icon_id_1' },
    { title: 'CUSTOM CARD 2', description: 'Lorem ipsum dolor sit amet, consectetur.', icon: 'placeholder_icon_id_2' },
  ],
};

export default function SoftwareSprawlComponent() {
  const [activeTab, setActiveTab] = useState('global-data');

  return (
    <div className="max-w-[931px] mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        STOP SOFTWARE SPRAWL AND GET MORE DONE
      </h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
        {/* Tabs */}
        <div className="w-full lg:w-1/4 pr-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`block w-full text-left p-2 mb-2 rounded-lg focus:outline-none ${activeTab === tab.id ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {contentCards[activeTab].map((card, index) => (
            <div key={index} className="border p-4 flex items-center">
              <img
                loading="lazy"
                src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${card.icon}?apiKey=1d97127843014888b916aa6ba331e743&`}
                className="shrink-0 self-start object-cover w-8 h-8 mr-4"
                alt="Icon"
              />
              <div className="flex flex-col">
                <div className="text-sm font-semibold leading-4 text-black uppercase">
                  {card.title}
                </div>
                <div className="mt-1.5 text-base leading-5 text-neutral-500">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}