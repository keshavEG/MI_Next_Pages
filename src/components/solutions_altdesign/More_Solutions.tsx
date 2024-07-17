export default function More_Solutions_alt(){
    return(
        <div className="flex flex-col items-center uppercase leading-[120%]">
    <div className="text-4xl font-bold text-black max-md:max-w-full">
      For more solutions
    </div>
    <div className="flex gap-5 justify-between self-stretch px-5 mt-12 w-full text-lg font-semibold text-orange-400 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="justify-center px-7 py-6 bg-white rounded-xl shadow-sm max-md:px-5">
          Importers
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="justify-center px-7 py-6 bg-white rounded-xl shadow-sm max-md:px-5">
          Exporters
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="justify-center px-6 py-6 bg-white rounded-xl shadow-sm max-md:px-5">
          Logistics
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="justify-center px-3.5 py-6 bg-white rounded-xl shadow-sm">
          Corporation
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="justify-center px-4 py-6 bg-white rounded-xl shadow-sm">
          Financial Institutions
        </div>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c28b8ee6af0fabd10e515651742a7e83508c06aa0d07ba5684c5c82d9a9982?apiKey=dedff2e04f3045829c86df72e70dd24a&"
      className="mt-12 max-w-full aspect-[50] w-[164px] max-md:mt-10"
    />
  </div>
    );
}