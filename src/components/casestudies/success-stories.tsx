import React from 'react';
import CompanyCard from './CompanyCard';

interface Company {
  name: string;
  logo: string;
  description: string;
}

const companies: Company[] = [
  {
    name: "Arrow International",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/966630e73659a11bee952ec31565f5fc0d01470d5b3bd32ec72296500b45e6c8?apiKey=eb52322d8492475fa80e1000b081f742&",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    name: "Multi Group",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/5289edb32a823ce3978fc254804403577a4bffb4ba6699f9ceaa1013b0979cb9?apiKey=eb52322d8492475fa80e1000b081f742&",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    name: "Dotted International",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f88a4d0b16ca7e94611b394bb57fee5830957a5015fb807458b2058b91ee7a6?apiKey=eb52322d8492475fa80e1000b081f742&",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section className="flex flex-col">
      <h2 className="justify-center self-center px-5 max-w-full text-4xl font-bold leading-10 text-center text-black uppercase w-[717px] max-md:max-w-full">
        Hear more success stories from companies like yours
      </h2>
      <div className="flex flex-col px-9 py-8 mt-5 w-full bg-zinc-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className={`${rowIndex > 0 ? 'mt-10' : ''} max-md:max-w-full`}>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {companies.map((company, index) => (
                <CompanyCard key={index} company={company} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;