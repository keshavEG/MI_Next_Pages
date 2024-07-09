import React from "react";
// import { ReactComponent as Play} from "../../../public/play-button-o-svgrepo-com.svg"
export default function Video() {
    return (
      <div className="flex flex-col justify-center text-white">
        <div
          className="flex overflow-hidden relative flex-col items-center px-20 py-16 w-full min-h-[372px] max-md:px-5 max-md:max-w-full"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/642c6eefdd8c96b63a1d394a70e2c6e5c0c88e2f9937bbf97f27c6d659484b1d?apiKey=1d97127843014888b916aa6ba331e743&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative text-6xl font-bold uppercase leading-[66px] max-md:text-4xl">
            IMPORTERS
          </div>
          <div className="relative mt-8 text-base leading-7 text-center w-[1000px] max-md:max-w-full">
            Search for suppliers and keep a track of the inbound and outbound
            shipments through global trade customs data. Find product sourcing
            from the largest online trade database with the company's details to
            filter through a large list of prospects for your business.
          </div>
          <button
  className="mt-8 border-white border-solid aspect-square border-[6px] stroke-[6px] stroke-white w-[58px] relative"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
  >
    <path
      d="M33.0286 25.0298L16.6978 37.3607L16.6978 12.6978L33.0286 25.0298Z"
      fill="white"
    />
  </svg>
</button>
        </div>
      </div>
    );
  }
