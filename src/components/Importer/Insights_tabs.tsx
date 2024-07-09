import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="flex flex-col px-7 pt-9 pb-20 bg-zinc-50 max-md:pl-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86db070e02b39683feaba7d24e42736420b7bc0d222631ead99c921fd2b017?apiKey=1d97127843014888b916aa6ba331e743&"
              className="w-full aspect-[1.79] max-md:mr-2.5"
            />
            <div className="mt-14 text-xl font-semibold leading-6 text-orange-400 capitalize max-md:mt-10">
              Electronics
            </div>
            <div className="mt-7 text-base leading-7 text-neutral-500">
              The highest importing commodities for the year 2020, in the
              pre-pandemic environment, were electronic products. The products
              such as laptops, cellular networks, mobile phones, webcams,
              headgears found an increasing demand in the countries,{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col px-7 pt-9 pb-20 bg-zinc-50 max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d7918a062591c3820681a766c8e9521871bbc56f4767d1740ae9d6a27e9a2d9?apiKey=1d97127843014888b916aa6ba331e743&"
              className="w-full aspect-[1.79] max-md:mr-2"
            />
            <div className="mt-14 text-xl font-semibold leading-6 text-orange-400 capitalize max-md:mt-10">
              Industrial Machinery
            </div>
            <div className="mt-6 text-base leading-7 text-neutral-500">
              Industrial machinery is the highly demanded component of industrial
              production for manufacturing different final products. China is the
              largest producer and exporter of industrial machinery and other
              countries import most of their machinery from China only.
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col px-7 pt-9 pb-20 bg-zinc-50 max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c400a8090463f0b8c0b45b75f3a7cf92737ce47272eeb670a871fa517b94396?apiKey=1d97127843014888b916aa6ba331e743&"
              className="w-full aspect-[1.79] max-md:mr-2"
            />
            <div className="mt-14 text-xl font-semibold leading-6 text-orange-400 capitalize max-md:mt-10">
              Fuels And Oils
            </div>
            <div className="mt-7 text-base leading-7 text-neutral-500">
              Petroleum and natural gas are the core industries that give 'fuel'
              or energy to different industries. Russia and Middle-East countries
              are the largest producers of oil in the world and export the highest
              to geographical locations such as China, the EU, and the USA.{" "}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default function Insights() {
  return (
    <div className="flex gap-4 justify-between px-5 mt-11 max-md:flex-wrap max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9274a4c86cabda3f671c2fcddfcdf968dddd3b663faca6b6e038d7d8155cc97?apiKey=1d97127843014888b916aa6ba331e743&"
        className="shrink-0 my-auto border-solid aspect-square border-[3px] border-stone-300 stroke-[3px] stroke-stone-300 w-[45px]"
      />
      <Responsive />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e82c673e9f87b1c06da1083d980db574fe3b13e9cf121bf23386187f80e467?apiKey=1d97127843014888b916aa6ba331e743&"
        className="shrink-0 my-auto border-solid aspect-square border-[3px] border-stone-300 stroke-[3px] stroke-stone-300 w-[45px]"
      />
    </div>
  );
}
