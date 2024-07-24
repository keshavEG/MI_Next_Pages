import React from 'react';

const InsightsSection: React.FC = () => {
    return (
        <div className='insight-section'>
            <section className="flex flex-col">
                <h1 className="insight-section-heading justify-center self-center max-w-full text-3xl font-bold leading-10 text-center uppercase w-[882px] max-md:max-w-full">
                    <span className="text-neutral-400">Industry-Insights Served Through Smart Global </span>
                    <span className="text-black">Supply Chain Intelligence</span>
                </h1>
                <div className="supply-card flex flex-col justify-center px-9 mt-20 w-full bg-white border border-solid border-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex-wrap content-start px-px pb-8 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="each-insight-div flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                        Gain Actionable Insights Into Global Trade
                                    </h2>
                                    <p className="pr-5 mb-7 justify-center mt-7 text-base leading-7 text-neutral-500">
                                        Obtain in-depth information on global imports and exports, and keep in touch with what's happening around the global supply chain.
                                    </p>
                                </div>
                            </div>

                            <div className="each-insight-div flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                        Conduct A Thorough & Smart Analysis
                                    </h2>
                                    <p className="pr-5 mb-7 justify-center mt-7 text-base leading-7 text-neutral-500">
                                        Cultivate analysis with raw data serving data specifications of different kinds namely country, HS Code, buyer, supplier, ports, and total values.
                                    </p>
                                </div>
                            </div>

                            <div className="each-insight-div flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                        Tap Into The History of Supply Chains
                                    </h2>
                                    <p className="pr-5 mb-7 justify-center mt-7 text-base leading-7 text-neutral-500">
                                        Access the historical data of the global supply chain dating back to the year 2010 and get a comprehensive view of the global markets.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                        Easy Access To Data For A Lifetime
                                    </h2>
                                    <p className="pr-5 justify-center mt-7 text-base leading-7 text-neutral-500">
                                        The conversion into the easy-to-use Excel format allows any user to utilise the acquired data whenever and wherever they want on any device.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightsSection;