import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Video_Solutions_3({ data }) {
  if (!data || !data.videoSrcSet) {
    console.log("No Image");
    return null;
  }

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-10 items-center justify-center max-w-6xl mx-auto"
        >
          <div className="w-full md:w-1/2 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <Image 
                src={data.videoSrcSet} 
                alt="" 
                width={500} 
                height={500} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full z-10"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-5/12 p-5"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 relative inline-block">
              {data.title}
              {/* <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 transform -skew-x-12"></span> */}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {data.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-bold text-white bg-orange-500 rounded-full group focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <span className="absolute left-0 w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">Learn More</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}