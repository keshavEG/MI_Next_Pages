import React from 'react';

const InsightsSection: React.FC = () => {
    return (
        <div className='insight-section'>
            <section className="flex flex-col">
                <h1 className="insight-section-heading justify-center self-center max-w-full text-3xl font-bold leading-10 text-center uppercase w-[882px] max-md:max-w-full">
                    {/* <span className="text-neutral-400">Industry-Insights Served Through Smart Global </span> */}
                    <span className="text-black">How <span className="text-neutral-400">Data License </span>Work ?</span>
                </h1>
                <div className="supply-card flex flex-col justify-center px-9 mt-20 w-full bg-white border border-solid border-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex-wrap content-start px-px pb-8 max-md:max-w-full">
                        <div className="custom-responsiv flex max-md:flex-col max-md:gap-0">
                            <div className="each-insight-div flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="innner-license-div flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                    Select the Dataset You Need
                                    </h2>
                                    <p className="pr-5 mb-7 justify-center mt-7 text-base leading-7 text-neutral-500">
                                    Choose from a wide range of trade data licenses. Depending on your requirements, we offer data sets based on targeted regions, industries, ports, commodity-wise, etc.
                                    </p>
                                </div>
                            </div>

                            <div className="each-insight-div flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="innner-license-div flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                    Choose File Format
                                    </h2>
                                    <p className="pr-5 mb-7 justify-center mt-7 text-base leading-7 text-neutral-500">
                                    We provide data in all forms. You can opt for offline mode ( excel, CSV file) or via top cloud partners AWS, Snowflake.
                                    </p>
                                </div>
                            </div>

                            <div className="each-insight-div flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="innner-license-div flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                    Get Protected Datasets
                                    </h2>
                                    <p className="pr-5 mb-7 justify-center mt-7 text-base leading-7 text-neutral-500">
                                    The datasets provided will be secured in an encrypted format to seamlessly integrate with your analytical engine.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="innner-license-div flex flex-col grow max-md:mt-10">
                                    <h2 className="pr-5 justify-center text-xl font-semibold leading-6 text-black uppercase">
                                    Take the Leverage of Data License
                                    </h2>
                                    <p className="pr-5 justify-center mt-7 text-base leading-7 text-neutral-500">
                                    There you go! Use the Data License and access the trade data in your system.
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