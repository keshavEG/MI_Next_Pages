import Image from "next/image";

export default function Webinar_Cards(){
    return(
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 text-base leading-4 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2.5 self-start text-center text-black whitespace-nowrap leading-[120%]">
                    <Image
                    loading="lazy"
                    src="/webinar_icon.png"
                    width={20}
                    height={20}
                    alt="Webinar Icon"
                    className="shrink-0 w-5 aspect-square fill-zinc-400"
                    />
                    <div>WEBINAR</div>
                </div>
                <div className="mt-5 text-3xl font-bold leading-10 uppercase text-neutral-400 max-md:max-w-full">
                    2024 GTM Predictions Series: Warm Calling Puts Old-School
                </div>
                <div className="mt-5 leading-7 text-neutral-500 max-md:max-w-full">
                    Join us live to get the building blocks that will help you
                    incorporate account-based experiences in an informed way.
                </div>
                <div className="shrink-0 mt-5 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full" />
                <div className="flex gap-1.5 self-start py-2.5 mt-5 text-sm font-semibold text-amber-600 uppercase">
                    <div>FEBRUARY 7 </div>
                    <div>3:30 AM ET</div>
                </div>
                <div className="justify-center self-start px-6 py-3 mt-5 text-sm font-bold text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                    Read more...
                </div>
                <div className="flex gap-2.5 self-start mt-24 text-center text-black whitespace-nowrap leading-[120%] max-md:mt-10">
                    <Image
                        loading="lazy"
                        src="/webinar_icon.png"
                        width={20}
                        height={20}
                        alt="Webinar Icon"
                        className="shrink-0 w-5 aspect-square fill-zinc-400"
                    />
                    <div>WEBINAR</div>
                </div>
                <div className="mt-7 text-3xl font-bold leading-10 uppercase text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
                    15 Minutes to Sales Mastery: What You Should Have Said
                </div>
                <div className="mt-7 leading-7 text-neutral-500 max-md:mr-2.5 max-md:max-w-full">
                    Join us live to get the building blocks that will help you
                    incorporate account-based experiences in an informed way.
                </div>
                <div className="shrink-0 mt-6 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full" />
                <div className="flex gap-1.5 self-start py-2.5 mt-7 text-sm font-semibold text-amber-600 uppercase">
                    <div>FEBRUARY 7 </div>
                    <div>3:30 AM ET</div>
                </div>
                <div className="justify-center self-start px-6 py-3 mt-7 text-sm font-bold text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                    Read more...
                </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 text-base leading-4 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2.5 self-start text-center text-black whitespace-nowrap leading-[120%]">
                    <Image
                        loading="lazy"
                        src="/webinar_icon.png"
                        width={20}
                        height={20}
                        alt="Webinar Icon"
                        className="shrink-0 w-5 aspect-square fill-zinc-400"
                    />
                    <div>WEBINAR</div>
                </div>
                <div className="mt-5 text-3xl font-bold leading-10 uppercase text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
                    Steal ZoomInfo’s Cold Email Formula
                </div>
                <div className="mt-5 leading-7 text-neutral-500 max-md:max-w-full">
                    Join us live to get the building blocks that will help you
                    incorporate account-based experiences in an informed way.
                </div>
                <div className="shrink-0 mt-5 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full" />
                <div className="flex gap-1.5 self-start py-2.5 mt-5 text-sm font-semibold text-amber-600 uppercase">
                    <div>FEBRUARY 7 </div>
                    <div>3:30 AM ET</div>
                </div>
                <div className="justify-center self-start px-6 py-3 mt-5 text-sm font-bold text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                    Read more...
                </div>
                <div className="flex gap-2.5 self-start mt-24 text-center text-black whitespace-nowrap leading-[120%] max-md:mt-10">
                    <Image
                        loading="lazy"
                        src="/webinar_icon.png"
                        width={20}
                        height={20}
                        alt="Webinar Icon"
                        className="shrink-0 w-5 aspect-square fill-zinc-400"
                    />
                    <div>WEBINAR</div>
                </div>
                <div className="mt-5 text-3xl font-bold leading-10 uppercase text-neutral-400 max-md:max-w-full">
                    2024 GTM Predictions Series: Warm Calling Puts Old-School
                </div>
                <div className="mt-5 leading-7 text-neutral-500 max-md:max-w-full">
                    Join us live to get the building blocks that will help you
                    incorporate account-based experiences in an informed way.
                </div>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full" />
                <div className="flex gap-1.5 self-start py-2.5 mt-5 text-sm font-semibold text-amber-600 uppercase">
                    <div>FEBRUARY 7 </div>
                    <div>3:30 AM ET</div>
                </div>
                <div className="justify-center self-start px-6 py-3 mt-5 text-sm font-bold text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                    Read more...
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}