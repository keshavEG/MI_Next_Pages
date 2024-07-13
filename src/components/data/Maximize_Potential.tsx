export default function Maximize_Potential(){
    return(
        <div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-10 text-black uppercase max-md:max-w-full">
                Maximise the Potential of Artificial Intelligence
              </div>
              <div className="mt-5 text-base leading-7 text-neutral-500 max-md:max-w-full">
                Our machine learning technologies integrate the collected raw
                shipment data into Excel spreadsheets with clean import-export
                records..
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/bot_data.png"
              className="grow shrink-0 max-w-full aspect-[0.73] w-[174px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    );
}   