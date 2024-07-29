"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Webinar_Cards() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true, 
            timeZone: 'America/New_York'
        }) + ' ET';
    };

    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options).toUpperCase();
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const webinarData = [
        {
            title: '2024 GTM Predictions Series: Warm Calling Puts Old-School',
            date: currentTime,
        },
        {
            title: '15 Minutes to Sales Mastery: What You Should Have Said',
            date: currentTime,
        },
        {
            title: "Steal ZoomInfo’s Cold Email Formula",
            date: currentTime,
        }
    ];

    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {webinarData.map((webinar, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full p-5 bg-white rounded-lg shadow-md"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
                    >
                        <div className="flex flex-col grow text-base leading-4 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-2.5 self-start text-center text-black whitespace-nowrap leading-[120%]">
                                <motion.div initial="hidden" animate="visible" variants={imageVariants}>
                                    <Image
                                        loading="lazy"
                                        src="/webinar_icon.png"
                                        width={20}
                                        height={20}
                                        alt="Webinar Icon"
                                        className="shrink-0 w-5 aspect-square fill-zinc-400"
                                    />
                                </motion.div>
                                <div>WEBINAR</div>
                            </div>
                            <div className="mt-5 text-3xl font-bold leading-10 uppercase text-neutral-400 max-md:max-w-full">
                                {webinar.title}
                            </div>
                            <div className="mt-5 leading-7 text-neutral-500 max-md:max-w-full">
                                Join us live to get the building blocks that will help you incorporate account-based experiences in an informed way.
                            </div>
                            <div className="shrink-0 mt-5 h-px border border-dashed bg-stone-300 border-stone-300 max-md:max-w-full" />
                            <div className="flex gap-1.5 self-start py-2.5 mt-5 text-sm font-semibold text-amber-600 uppercase">
                                <div>{formatDate(webinar.date)}</div>
                                <div>{formatTime(webinar.date)}</div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: '#4a4a4a' }}
                                whileTap={{ scale: 0.95 }}
                                className="justify-center self-start px-6 py-3 mt-5 text-sm font-bold text-white uppercase rounded-md bg-stone-500 max-md:px-5"
                            >
                                Read more...
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
