"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { motion } from 'framer-motion';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  companySize: z.string().min(1, { message: "Company size is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col px-6 py-10 bg-gradient-to-br from-white to-orange-50 md:px-20 md:py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="self-center mt-10 max-w-full w-full md:w-[943px] md:mt-36">
        <div className="flex flex-col md:flex-row md:gap-10">
          <motion.div className="flex flex-col w-full md:w-6/12" variants={itemVariants}>
            <div className="flex flex-col mt-10 md:mt-0">
              <h1 className="text-4xl font-bold text-neutral-800 uppercase leading-tight md:text-6xl md:leading-[66px]">
                contact us
              </h1>
              <motion.div className="flex items-start gap-5 mt-10 text-xl text-neutral-700 md:mt-12" variants={itemVariants}>
                <Image
                  loading="lazy"
                  src="/phone_icon.png"
                  className="shrink-0 w-[50px] h-[50px]"
                  alt="Phone icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <div className="font-medium">Call Us Directly</div>
                  <div className="mt-1.5 font-semibold uppercase text-orange-500">+44 20 3966 8508</div>
                  <div className="mt-1.5 text-base text-orange-400 hover:underline cursor-pointer">
                    See more local numbers
                  </div>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-5 mt-10 md:mt-12" variants={itemVariants}>
                <Image
                  loading="lazy"
                  src="/chat_icon.png"
                  className="shrink-0 w-[55px] h-[55px]"
                  alt="Chat icon"
                  width={55}
                  height={55}
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-6 text-neutral-700 font-medium">Chat with our sales team</div>
                  <motion.button 
                    className="justify-center px-6 py-3 mt-2 text-sm font-bold leading-4 text-white uppercase rounded-md bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Chat with sales
                  </motion.button>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-5 mt-10 md:mt-12" variants={itemVariants}>
                <Image
                  loading="lazy"
                  src="/calendar_icon.png"
                  className="shrink-0 w-[50px] h-[50px]"
                  alt="Calendar icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-6 text-neutral-700 font-medium">Get a product demo</div>
                  <motion.button 
                    className="justify-center px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule A Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="flex flex-col w-full mt-10 md:w-6/12 md:mt-0" variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col grow text-sm font-medium leading-4 text-neutral-600 md:mt-10">
              <h2 className="text-3xl font-semibold leading-10 text-neutral-700 md:max-w-full">
                Grow your business with us
              </h2>
              <motion.input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                variants={itemVariants}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              <motion.input
                {...register("firstName")}
                type="text"
                placeholder="First Name"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                variants={itemVariants}
              />
              {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
              <motion.input
                {...register("lastName")}
                type="text"
                placeholder="Last Name"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                variants={itemVariants}
              />
              {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
              <motion.input
                {...register("companyName")}
                type="text"
                placeholder="Company Name"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                variants={itemVariants}
              />
              {errors.companyName && <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
              <motion.input
                {...register("companySize")}
                type="text"
                placeholder="Company Size"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                variants={itemVariants}
              />
              {errors.companySize && <span className="text-red-500 text-xs mt-1">{errors.companySize.message}</span>}
              <motion.input
                {...register("phoneNumber")}
                type="tel"
                placeholder="Phone Number"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                variants={itemVariants}
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
              <motion.button
                type="submit"
                className="justify-center self-start px-6 py-3 mt-5 text-white uppercase rounded-md bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Start Free Trial
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;