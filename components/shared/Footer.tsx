import type { NextPage } from "next";

export type FooterProps = {
  className?: string;
};

const Footer: NextPage<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`relative w-full overflow-hidden flex flex-col items-center justify-end text-left text-21xl text-black font-open-sans ${className}`}
    >
      <div className="w-full flex flex-row items-start justify-between relative">
        <img
          className="w-full relative h-[343.2px] object-cover mix-blend-darken z-[0]"
          alt=""
          src="/image-63@2x.png"
        />
        <div className="absolute top-[113px] left-[412px] flex flex-col items-center justify-start gap-[9px] z-[1]">
          <div className="w-[397px] flex flex-row items-start justify-start">
            <b className="relative leading-[120%] uppercase">
              Set Your Business
            </b>
          </div>
          <div className="w-[614px] flex flex-row items-start justify-start text-13xl">
            <b className="relative leading-[120%] uppercase">
              In Motion With Valuable Insights!
            </b>
          </div>
          <div className="w-44 relative h-[38px] text-sm text-white">
            <div className="absolute top-[0px] left-[calc(50% - 88px)] rounded-8xs bg-darkorange-200 w-44 h-[38px]">
              <b className="absolute top-[12px] left-[22px] leading-[100%] uppercase">
                Schedule A Demo
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative h-[600px] mt-[-50px] text-sm text-white">
        <div className="absolute h-[93.33%] w-full top-[6.67%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-start p-2.5 box-border">
          <div className="w-full relative bg-black h-[540px]" />
        </div>
        <div className="absolute w-[20.69%] top-[calc(50% + 160px)] right-[22.53%] left-[56.78%] flex flex-row items-center justify-start gap-[18px]">
          <div className="flex flex-row items-start justify-start p-2.5">
            <img
              className="w-[38px] relative h-[38px]"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <div className="rounded-8xs flex flex-col items-start justify-start py-2 px-[11px] border-[3px] border-solid border-white">
            <img
              className="w-[24.1px] relative h-[22px]"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start relative gap-[10px]">
            <img
              className="w-[49px] relative h-[34.3px] z-[0]"
              alt=""
              src="/vector2.svg"
            />
            <img
              className="w-[24.9%] absolute !m-[0] h-[42.86%] top-[28.57%] right-[35.1%] bottom-[28.57%] left-[40%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector3.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start relative gap-[10px]">
            <img
              className="w-[38px] relative h-[38px] z-[0]"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="w-[26.32%] absolute !m-[0] h-[42.37%] top-[28.68%] right-[36.84%] bottom-[28.95%] left-[36.84%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector5.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <img
              className="w-[39px] relative h-[39px]"
              alt=""
              src="/group1.svg"
            />
          </div>
        </div>
        <img
          className="absolute h-[45.17%] w-[18.47%] top-[0%] right-[75.85%] bottom-[54.83%] left-[5.68%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="absolute h-[12.67%] w-[18.56%] top-[48%] right-[75.75%] bottom-[39.33%] left-[5.68%] flex flex-row items-start justify-start p-2.5 box-border text-base">
          <div className="flex-1 relative leading-[177%] font-semibold">
            <p className="m-0 lowercase">{`Copyright © 2022 Market Inside. `}</p>
            <p className="m-0">
              <span className="uppercase">A</span>
              <span className="lowercase">ll rights reserved</span>
            </p>
          </div>
        </div>
        <div className="absolute top-[calc(50% - 174px)] left-[calc(50% - 196px)] h-[292px] flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start p-2.5 text-lg">
            <b className="relative leading-[177%] uppercase">MARKET INSIDE</b>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">
              About Us
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">
              Platform
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">Data</div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5 text-base">
            <div className="relative leading-[100%] font-semibold">Plans</div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">{`Research & Insights`}</div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">
              Privacy Policy
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">{`Terms & Conditions`}</div>
          </div>
        </div>
        <div className="absolute h-[49%] w-[11.1%] top-[21%] right-[32.19%] bottom-[30%] left-[56.71%] flex flex-col items-start justify-start gap-[2px]">
          <div className="flex flex-row items-start justify-start p-2.5 text-lg">
            <b className="relative leading-[177%] uppercase">SOLUTIONS</b>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[68px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              Importers
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[66px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              Exporters
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[58px] relative leading-[100%] font-semibold inline-block h-3 shrink-0">
              Logistics
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[82px] relative leading-[100%] font-semibold inline-block h-3 shrink-0">
              Corporation
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[142px] relative leading-[100%] font-semibold inline-block h-3 shrink-0">
              Financial Institutions
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[118px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              IT and Consulting
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[69px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              Law Firms
            </div>
          </div>
        </div>
        <div className="absolute h-[43.17%] w-[15.68%] top-[21%] right-[8.01%] bottom-[35.83%] left-[76.3%] flex flex-col items-start justify-start gap-[1px]">
          <div className="flex flex-row items-start justify-start p-2.5 text-lg">
            <b className="relative leading-[177%] uppercase">SOLUTIONS</b>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[68px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              Insurance
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[171px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              <p className="m-0">Consulting and Research</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">
              Sales and Marketing
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">
              Asset Management Companies
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[100%] font-semibold">
              Academic Institutions
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="w-[149px] relative leading-[100%] font-semibold inline-block h-[13px] shrink-0">
              Government Agencies
            </div>
          </div>
        </div>
        <div className="absolute h-[8.33%] w-[14.38%] top-[78.17%] right-[48.63%] bottom-[13.5%] left-[36.99%] rounded-lg bg-black box-border flex flex-row items-center justify-center p-2.5 text-lg">
          <b className="relative leading-[100%] uppercase">Schedule A Demo</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;