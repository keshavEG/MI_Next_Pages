import Image from 'next/image';

const Component = () => {
  return (
    <div className="flex flex-col px-2.5 pt-2.5">
      <div className="text-4xl font-bold leading-10 text-center text-black uppercase max-md:max-w-full">
        Millions of sellers at over 500,000 companies beat their number with Apollo
      </div>
      <div className="flex gap-5 justify-between self-center mt-11 w-full max-w-[893px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {/* <div className="relative shrink-0 max-w-full aspect-[0.9] w-[133px]">
          <Image
            loading="lazy"
            src="/badge1.png"
            layout="fill"
            objectFit="contain"
            alt="Image 1"
          />
        </div>
        <div className="relative shrink-0 max-w-full aspect-[0.9] w-[133px]">
          <Image
            loading="lazy"
            src="/badge2.png"
            layout="fill"
            objectFit="contain"
            alt="Image 2"
          />
        </div>
        <div className="relative shrink-0 max-w-full aspect-[0.9] w-[133px]">
          <Image
            loading="lazy"
            src="/badge3.png"
            layout="fill"
            objectFit="contain"
            alt="Image 3"
          />
        </div>
        <div className="relative shrink-0 max-w-full aspect-[0.9] w-[133px]">
          <Image
            loading="lazy"
            src="/badge4.png"
            layout="fill"
            objectFit="contain"
            alt="Image 4"
          />
        </div>
        <div className="relative shrink-0 max-w-full aspect-[0.9] w-[133px]">
          <Image
            loading="lazy"
            src="/badge5.png"
            layout="fill"
            objectFit="contain"
            alt="Image 5"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Component;
