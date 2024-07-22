import React from 'react'
import Image from 'next/image'

const LicenseHeader = () => {
    return (
        <div>
            <div className='datalicense-header'>
                <main className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <section className="first-datalicense-img flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                        <Image width={400} height={400} alt='' src='/globeicon2.png' />
                    </section>
                    <section className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                            <h1 className="justify-center px-5 font-semibold text-400 uppercase leading-[45px] max-md:max-w-full">
                                Transform your supply chain business abilities into an efficient business{' '}
                                <span className="text-orange-400">code of operations</span>
                            </h1>
                            <section className="second-datalicense-img flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                                <Image width={400} height={400} alt='' src='/globeicon2.png' />
                            </section>
                            <p className="supply-para justify-center px-5 mt-7 text-base leading-7 text-neutral-500 max-md:max-w-full">
                                Market Inside allows users to access and acquire the raw data, consisting of offline records for inbound and outbound shipments, to deliver information on the global supply chains.
                            </p>
                            <button className="justify-center self-start ml-12 px-6 py-3 mt-7 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                                Get in Touch
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default LicenseHeader