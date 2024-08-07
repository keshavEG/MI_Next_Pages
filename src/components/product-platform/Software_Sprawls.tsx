"use client"

import * as React from "react";
import { useState } from 'react';

const tabs = [
  { id: 'data-field', label: 'DATA FIELD' },
  { id: 'industry', label: 'INDUSTRY' },
  { id: 'use-cases', label: 'USE CASES' },
];

const contentCards = {
  'data-field': [
    { title: 'Transit', description: 'Import and Export Insights of 196+ Countries.', icon: 'placeholder_icon_id_3' },
    { title: 'Detailed', description: 'Discover Global Trade Facts of Top 60 Countries.', icon: 'placeholder_icon_id_4' },
    { title: 'Suez Canal', description: 'Checkout 113+ Countries\' Data Passing via this Canal.', icon: 'placeholder_icon_id_5' },
    { title: 'Cargo', description: 'Access Cargo Data From over 200 Countries.', icon: 'placeholder_icon_id_6' },
    { title: 'Mirror', description: 'Dive Into the Mirror Trade Data of 195 Countries.', icon: 'placeholder_icon_id_7' },
  ],
  'industry': [
    { title: 'Importer', description: 'Get a Hang of Global Trade Data, Sellers & Suppliers.', icon: 'placeholder_icon_id_8' },
    { title: 'Exporter', description: 'Dive into Suppliers’s Network Available Worldwide.', icon: 'placeholder_icon_id_9' },
    { title: 'Logistics', description: 'Optimize Supply Chain & Connect with Potential Customers.', icon: 'placeholder_icon_id_10' },
    { title: 'Corporate', description: 'Identify Businesses and Spectrum of Buyers & Suppliers.', icon: 'placeholder_icon_id_11' },
    { title: 'Insurance', description: 'Examine Fraud Detection and Do Market Analysis.', icon: 'placeholder_icon_id_12' },
  ],
  'use-cases': [
    { title: 'Market Analysis', description: 'See where the import and export market curve goes.', icon: 'placeholder_icon_id_13' },
    { title: 'Risk Assessment', description: 'Take Precautionary Measures in Potential Risks.', icon: 'placeholder_icon_id_14' },
    { title: 'Lead Generation', description: 'Identify Prospective Clients Engaged in Int’l Trade.', icon: 'placeholder_icon_id_15' },
    { title: 'Competitive Analysis', description: 'Peak into your Competitor’s Trade Activities.', icon: 'placeholder_icon_id_16' },
    { title: 'Data Enhancement', description: 'Enriched Trade Data Driving Greater Value.', icon: 'placeholder_icon_id_17' },
  ],
};

export default function SoftwareSprawlComponent() {
  const [activeTab, setActiveTab] = useState('data-field');

  return (
    <div className="software-div max-w-[931px] py-10">
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
          {contentCards[activeTab]?.map((card, index) => (
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
