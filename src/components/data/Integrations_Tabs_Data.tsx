"use client"
import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Integrations_Tabs_Data() {
    const [activeTab, setActiveTab] = useState('countries_trade_data');

  const tabData = [
    { id: 'countries_trade_data', label: "Countries' Trade Data", icon: "🌎" },
    { id: 'shipment_data', label: "Shipment Data", icon: "🚢" },
    { id: 'company_data', label: "Company Data", icon: "🏢" },
    { id: 'contacts_data', label: "Contacts Data", icon: "📞" },
    { id: 'geographical_data', label: "Geographical Data", icon: "🗺️" },
  ];

  const contentData = {
    countries_trade_data: {
      title: "29+ EXCLUSIVE COUNTRIES",
      content: "Angola, Burundi, Nicaragua, Guatemala, Turkey, Thailand, Singapore, Nigeria, Ghana, Bangladesh, Zimbabwe, Liberia, Malawi, Fiji, Tanzania, Uzbekistan, Zambia, Bolivia, DR Congo, And Other Countries."
    },
    shipment_data: {
      title: "54+ DETAILED COUNTRIES",
      content: "Angola, Burundi, Nicaragua, Singapore, Turkey, Thailand, Nigeria, Vietnam, Indonesia, Botswana, Russia, Ghana, Ivory Coast, Zimbabwe, Fiji, Namibia, Lesotho And More."
    },
    company_data: {
      title: "1M+ GLOBAL COMPANIES",
      content: "Access detailed information on over 1 million companies worldwide. Data includes company profiles, financial information, industry classification, and trade activities."
    },
    contacts_data: {
      title: "5M+ BUSINESS CONTACTS",
      content: "Reach out to over 5 million business contacts across various industries. Our database includes contact details, job titles, and company affiliations for key decision-makers."
    },
    geographical_data: {
      title: "200+ COUNTRIES AND REGIONS",
      content: "Explore geographical data for over 200 countries and regions. This includes trade statistics, economic indicators, and regional trade agreements for comprehensive market analysis."
    }
  };

    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col px-9 pt-16 pb-8 w-full max-w-[1274px] rounded-xl bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-1.5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-2xl font-semibold leading-7 text-orange-400 uppercase max-md:max-w-full">
                    integrations
                  </div>
                  <div className="mt-2 text-4xl font-bold leading-10 text-black uppercase max-md:max-w-full">
                    Extensive global
                    <br />
                    trade data
                  </div>
                  <div className="mt-5 text-base leading-7 text-neutral-500 max-md:max-w-full">
                    Acquire trade insights of over 195 Countries from our
                    import-export data online platform and do maximum utilization
                    of 20+ different filters such as Country, HS Code, Product
                    Description, Port Names, Importer or Exporter Name, and more.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1757f124b85b9afba2b93cafc8d26121be00a84496738606e794d57bda7b5a0?apiKey=dedff2e04f3045829c86df72e70dd24a&"
                  className="grow w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>

          <div>
          <div className="w-full max-w-[1274px] bg-white rounded-xl shadow-lg overflow-hidden mt-8">
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
    <TabsList className="flex w-full p-0 bg-gray-100">
      {tabData.map((tab, index) => (
        <TabsTrigger
          key={tab.id}
          value={tab.id}
          className={`flex items-center justify-center gap-2 px-2 py-3 flex-1 transition-all duration-300 ease-in-out
            ${activeTab === tab.id
              ? 'bg-orange-400 text-orange'
              : 'bg-white text-black-400 hover:bg-black-100'
            }
            ${index !== 0 ? 'border-l border-gray-200' : ''}
          `}
        >
          <span className="text-xl">{tab.icon}</span>
          <span className="font-semibold text-sm uppercase hidden md:inline">{tab.label}</span>
        </TabsTrigger>
      ))}
    </TabsList>
    {Object.entries(contentData).map(([key, { title, content }]) => (
      <TabsContent key={key} value={key} className="p-6">
        <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </TabsContent>
    ))}
  </Tabs>
</div>
            </div>
        </div>

        
      </div>
    );
  }