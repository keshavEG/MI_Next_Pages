import Image from 'next/image';

export default function Maximize_Potential() {
  return (
    <div className='maximize-div'>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-5 text-black uppercase max-md:max-w-full">
              Maximise the Potential of Artificial Intelligence
            </div>
            <div className="mt-5 text-base leading-7 text-neutral-500 max-md:max-w-full">
              Our machine learning technologies integrate the collected raw
              shipment data into Excel spreadsheets with clean import-export
              records.
            </div>
          </div>
        </div>
        <div className="maximize-img-div flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
          <div className="relative grow shrink-0 max-w-full aspect-[0.73] w-[174px] max-md:mt-10">
            <Image
              src="/robot_product_platform.png"
              alt="Bot Data"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
