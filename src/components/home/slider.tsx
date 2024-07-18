import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

function Slider() {
    return (
        <div>
            <div className="flex justify-center items-center px-16 py-16 text-lg font-semibold leading-5 text-black bg-neutral-50 max-md:px-5">
                <div className="flex gap-5 justify-between px-2 max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d5d186849f46d3ab57ec11f43fed5db2e0a724c59dbc5aa81a57d6f7923dd22?"
                        className="shrink-0 my-auto border-solid border-stone-300 stroke-[3px] stroke-stone-300 w-[45px]"
                    />
                    <div className="flex gap-5 justify-between py-5 pr-3.5 pl-5 bg-white rounded-xl shadow-sm">
                        <Image
                            loading="lazy"
                            src="/shipicon.png"
                            width={200}
                            height={200}
                            alt=""
                            className="shrink-0 aspect-[0.97] w-[60px]"
                        />
                        <div className="my-auto">
                            2B +<br />
                            Shipments
                            <br />
                            Count{" "}
                        </div>
                    </div>
                    <div className="flex gap-2.5 justify-between px-8 py-5 bg-white rounded-xl shadow-sm max-md:px-5">
                        <Image
                            loading="lazy"
                            src="/globeicon.png"
                            width={200}
                            height={200}
                            alt=""
                            className="shrink-0 aspect-square w-[62px]"
                        />
                        <div>
                            3M Total
                            <br />
                            Exporter <br />
                            Importer
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between px-5 py-5 bg-white rounded-xl shadow-sm">
                        <Image
                            loading="lazy"
                            src="/mapicon.png"
                            width={200}
                            height={200}
                            alt=""
                            className="shrink-0 aspect-[1.49] w-[86px]"
                        />
                        <div>
                            +195
                            <br />
                            Countries <br />
                            Trade Data
                        </div>
                    </div>
                    <div className="flex gap-0 justify-between py-2.5 pr-5 pl-2.5 bg-white rounded-xl shadow-sm">
                        <Image
                            loading="lazy"
                            src="/globeicon2.png"
                            width={200}
                            height={200}
                            alt=""
                            className="shrink-0 max-w-full aspect-[1.28] w-[86px]"
                        />
                        <div className="mt-5">
                            Global <br />
                            Trade Data
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b9e613d850f39caebe49955d10503d4475bbd50f1cfef70c11dc57c2e7bc61?"
                        className="shrink-0 my-auto border-solid border-stone-300 stroke-[3px] stroke-stone-300 w-[45px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Slider