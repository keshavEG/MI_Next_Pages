import React from 'react';

interface Company {
  name: string;
  logo: string;
  description: string;
}

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center px-8 py-12 w-full text-black bg-white rounded-xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="flex gap-5 text-3xl font-semibold leading-10">
            <img loading="lazy" src={company.logo} alt={`${company.name} logo`} className="shrink-0 aspect-square w-[79px]" />
            <h3 className="justify-center self-start">{company.name}</h3>
          </div>
          <p className="justify-center mt-7 text-xl leading-6">{company.description}</p>
          <div className="flex gap-2 self-start mt-7 text-sm font-bold leading-4 uppercase">
            <span>Read more</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f68d30ef2e8bcc998ac9112b78477d0ac1f31d2dcf1fc22f759dede5de66272?apiKey=eb52322d8492475fa80e1000b081f742&" alt="" className="shrink-0 my-auto w-3 border-2 border-black border-solid aspect-[1.2] stroke-[2px] stroke-black" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;