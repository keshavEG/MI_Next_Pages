import React from 'react';
import { Button } from './Button';
import { Heading } from './Heading';

interface BusinessInsightsProps {
  backgroundImageSrc: string;
}

export const BusinessInsights: React.FC<BusinessInsightsProps> = ({ backgroundImageSrc }) => {
  return (
    <section style={{ background: '#f1f2f5'}} className="flex flex-col justify-center font-bold text-black uppercase leading-[120%]">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full mix-blend-darken min-h-[343px] max-md:px-5 max-md:max-w-full">
        {/* <img loading="lazy" src={backgroundImageSrc} alt="" className="object-cover absolute inset-0 size-full" /> */}
        <div className="flex relative flex-col items-center mt-8 mb-2 max-w-full w-[614px]">
          <Heading level={2} className="justify-center text-4xl">Set Your Business</Heading>
          <Heading level={3} className="justify-center self-stretch mt-2.5 text-3xl max-md:max-w-full">
            In Motion With Valuable Insights!
          </Heading>
          <Button className="mt-2.5">Schedule A Demo</Button>
        </div>
      </div>
    </section>
  );
};