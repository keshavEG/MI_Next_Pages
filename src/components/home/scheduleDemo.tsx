import React from 'react'
import { Col, Row } from 'react-bootstrap'

function ScheduleDemo() {
    return (
        <div>
            <div className="video-div">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch pb-7 my-auto text-4xl font-bold leading-10 text-orange-400 uppercase max-md:mt-10">
                            <div className="flex gap-5 justify-between">

                                <div className='schedule-first-img'>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a09f767e19581d9705bd3613af1f68954b4dea015329a99e81a1cfa09abe8fe?"
                                        className="shrink-0 self-start max-w-full aspect-square w-[127px]"
                                    />

                                </div>

                                <div className='schedule-heading-text'>
                                    Set The Markets <br />
                                    <span className="text-orange-400">In</span> Motion
                                </div>

                            </div>
                            <div className='schedule-second-img'>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a09f767e19581d9705bd3613af1f68954b4dea015329a99e81a1cfa09abe8fe?"
                                    
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-between pt-2.5 pr-2.5 mt-1 max-md:mt-10 max-md:max-w-full">
                            <div className="text-base leading-8 text-black lowercase max-md:max-w-full">
                                <span className="uppercase">G</span>et a comprehensive view of
                                international trade between countries to set your
                                business in a particular direction and drive growth for
                                your business while keeping up to date with the latest
                                information. Watch the video from Market Inside, providing its
                                introduction with a quick glance at how our services help
                                businesses.
                            </div>
                            <button className="justify-center self-start px-6 py-3 mt-7 text-sm font-bold leading-4 text-white uppercase bg-orange-400 rounded-md max-md:px-5">
                                Schedule A Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleDemo