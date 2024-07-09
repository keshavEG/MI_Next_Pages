import type { NextPage } from "next";

export type FooterProps = {
  className?: string;
};

const Footer: NextPage<FooterProps> = ({ className = "" }) => {
  return (
    <footer
    >
      <div className="flex flex-col pt-12">
      <div className="flex flex-col items-center px-20 pb-16 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="z-10 mt-0 w-full max-w-[1260px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base font-semibold leading-7 text-white uppercase max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/989adb8c0b9ce1d51a4fec7d86df503c575302e6acec1142a8569cd5dc02dd79?apiKey=1d97127843014888b916aa6ba331e743&"
                  className="w-full aspect-square"
                />
                <div className="mt-7">
                  Copyright © 2022 Market Inside. <br />
                  <span className="uppercase">A</span>ll rights reserved
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-2.5 mt-32 text-sm font-semibold leading-4 text-white max-md:mt-10">
                <div className="text-lg font-bold leading-8 uppercase">
                  MARKET INSIDE
                </div>
                <div className="mt-5">About Us</div>
                <div className="mt-5">Platform</div>
                <div className="mt-5">Data</div>
                <div className="mt-5 text-base">Plans</div>
                <div className="mt-5 max-md:mr-1.5">Research & Insights</div>
                <div className="mt-5">Privacy Policy</div>
                <div className="mt-5 max-md:mr-1.5">Terms & Conditions</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-2.5 mt-32 text-sm font-semibold leading-4 text-white max-md:mt-10">
                <div className="text-lg font-bold leading-8 uppercase">
                  SOLUTIONS
                </div>
                <div className="mt-6">Importers</div>
                <div className="mt-6">Exporters</div>
                <div className="mt-6">Logistics</div>
                <div className="mt-6">Corporation</div>
                <div className="mt-6">Financial Institutions</div>
                <div className="mt-6">IT and Consulting</div>
                <div className="mt-6">Law Firms</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-2.5 mt-32 text-sm font-semibold leading-4 text-white max-md:mt-10">
                <div className="text-lg font-bold leading-8 uppercase">
                  SOLUTIONS
                </div>
                <div className="mt-5">Insurance</div>
                <div className="mt-5 leading-4">
                  Consulting and Research
                  <br />
                </div>
                <div className="mt-5">Sales and Marketing</div>
                <div className="mt-5">Asset Management Companies</div>
                <div className="mt-5">Academic Institutions</div>
                <div className="mt-5">Government Agencies</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-10 ml-28 max-w-full w-[591px] max-md:flex-wrap">
          <div className="justify-center self-start p-2.5 mt-2.5 text-xl font-bold leading-5 text-white uppercase bg-black rounded-lg border-2 border-white border-solid">
            Schedule A Demo
          </div>
          <div className="flex flex-auto gap-5 justify-between items-start py-2.5 pl-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b9a186960c9f1e110ffb5343685789880e51c48a261645c91cb404a8a0164?apiKey=1d97127843014888b916aa6ba331e743&"
              className="shrink-0 aspect-square fill-white w-[38px]"
            />
            <div className="flex justify-center items-center px-3 py-2 rounded-md border-white border-solid border-[3px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c701b68bb251b64ba1f082e37f171352152476b39e6d07ecf8ec14777671531f?apiKey=1d97127843014888b916aa6ba331e743&"
                className="w-6 aspect-[1.09]"
              />
            </div>
            <div className="flex justify-center items-center self-stretch my-auto">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8999ca53da97051c543581ff81f232258d96eb93825214d73111ce77e74a24b?apiKey=1d97127843014888b916aa6ba331e743&"
                className="border-4 border-white border-solid aspect-[1.45] stroke-[3.6px] stroke-white w-[49px]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8675524e27527de77857a7123a3c62ff07faab2dca0ac244fe0354644aafe7d9?apiKey=1d97127843014888b916aa6ba331e743&"
                className="aspect-square fill-white w-[38px]"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d12d15406f0c1c3653cecf0b62f54a3c830983eb9c25ed1a189420ab2216d7?apiKey=1d97127843014888b916aa6ba331e743&"
              className="shrink-0 self-stretch aspect-square w-[39px]"
            />
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;