"use client"
import React from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'

const LicenseHeader = () => {
    return (
        <div className="bg-gradient-to-br from-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill=%22%23FF5722%22 fill-opacity=%22.1%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-30"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
                        <DotLottiePlayer
                            src="https://lottie.host/d91975e8-eafb-4584-aa71-89b991bcb875/YpFOtFaI58.json"
                            autoplay
                            loop
                            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '500px' }}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 leading-tight uppercase">
                            TRANSFORM YOUR SUPPLY CHAIN BUSINESS ABILITIES INTO AN EFFICIENT BUSINESS <span className="text-orange-500">CODE OF OPERATIONS</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Market Inside allows users to access and acquire the raw data, consisting of offline records for inbound and outbound shipments, to deliver information on the global supply chains.
                        </p>
                        <button className="bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-md">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicenseHeader
