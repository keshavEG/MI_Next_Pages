"use client";
import React from 'react';
import Image from 'next/image';


const InsightsCard = ({ title, content, imageSrc }) => (
  <div className="flex flex-col w-[32%] max-md:w-full card">
    <div className="flex flex-col grow justify-center w-full font-semibold text-white bg-black leading-[120%] max-md:mt-4">
      <div className="flex overflow-hidden relative flex-col px-10 py-10 w-full aspect-[0.9] mix-blend-plus-lighter max-md:px-5">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative text-2xl uppercase">
          {title}
        </div>
        <div className="relative mt-10 text-base leading-6 text-justify max-md:mt-10">
          {content}
        </div>
        <div className="flex relative gap-2 self-start mt-11 text-sm font-bold text-orange-400 uppercase max-md:mt-10">
          {/* Placeholder for the "Read more" section if needed */}
        </div>
      </div>
    </div>
  </div>
);  

const InsightsCards = () => {
  const cards = [
    {
      title: "INDUSTRIAL MACHINERY",
      content: "Industrial machinery is the highly demanded component of industrial production for manufacturing different final products. China is the largest producer and exporter of industrial machinery and other countries import most of their machinery from China only. The total import-export of industrial machinery totalled a worth of $5.0 trillion in the year 2021.",
      imageSrc: "/industrial_machinery_insights.png" // Adjust paths as needed
    },
    {
      title: "ELECTRONICS",
      content: "The highest importing commodities for the year 2020, in the pre-pandemic environment, were electronic products. The products such as laptops, cellular networks, mobile phones, webcams, headgears found an increasing demand in the countries, especially with the new rising trend of 'work from home'. Electronics' trade totalled $7.0 trillion in 2021.",
      imageSrc: "/electronics_insights.png"
    },
    {
      title: "FUELS AND OILS",
      content: "Petroleum and natural gas are the core industries that give 'fuel' or energy to different industries. Russia and Middle-East countries are the largest producers of oil in the world and export the highest to geographical locations such as China, the EU, and the USA. The imports-exports of fuels and oils totalled a worth of $5.0 trillion in 2021.",
      imageSrc: "/fuel_oil_importer_alt.png"
    },
    {
      title: "PHARMACEUTICALS",
      content: "The imports of pharmaceuticals, especially drugs rose in 2020 and continued to increase so along with a demand for medicinal devices and products due to COVID-19. Commodities such as drugs, vaccines, and immunological products were traded the highest in 2021. Total imports and exports totalled $1.6 trillion in 2021.",
      imageSrc: "/pharma_alt.png"
    },
    {
      title: "OTHERS",
      content: "Plastics, Optical & Medical Instruments, Chemicals, Metals, and Minerals are also one of the demanding industries whose commodities are imported worldwide the highest. Trade insights on these commodities can also be found in our trade intelligence platform online.",
      imageSrc: "/others_insights.png"
    }
  ];

  return (
    <div className="self-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 flex-wrap max-md:flex-col max-md:gap-0">
        {cards.map((card, index) => (
          <InsightsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default InsightsCards;