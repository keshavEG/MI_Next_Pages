import React from 'react';
import Image from 'next/image';

export default function Maps() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <h1 className="text-5xl font-bold text-black uppercase mb-4 md:mb-0 tracking-wide">GET IN TOUCH</h1>
        <div className="hidden md:block w-px h-12 bg-black mx-8"></div>
        <h2 className="text-3xl font-semibold text-gray-400 uppercase text-center md:text-left tracking-wide">REACH US OUR OFFICE ADDRESS</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/5">
          <div className="flex items-start mb-8">
            <div className="w-12 h-12 mr-6 flex-shrink-0">
              <Image
                src="/building_contactus.png"
                alt="Location"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="text-xl leading-tight">York Eco Business Centre (Office 12), Amy Johnson Way, York, England YO30 4TN</p>
          </div>
          <div className="border-b border-gray-300 mb-8"></div>
          
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 mr-6 flex-shrink-0">
              <Image
                src="/mail_contactUs.png"
                alt="Email"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="text-xl">info@marketinsidedata.com</p>
          </div>
          <div className="border-b border-gray-300 mb-8"></div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 mr-6 flex-shrink-0">
              <Image
                src="/phone_contactus.png"
                alt="Phone"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xl leading-tight">+44 20 3966 8508</p>
              <p className="text-xl leading-tight">+44 20 3966 8507</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-3/5 h-96 md:h-[500px]">
          <iframe
            src="https://maps.google.com/maps?q=York%20Eco%20Business%20Centre%20(Office%2012)%2C%20Amy%20Johnson%20Way%2C%20York%2C%20England%20%20YO30%204TN&t=&z=9&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}