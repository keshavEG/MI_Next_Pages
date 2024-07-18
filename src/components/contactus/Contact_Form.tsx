"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';

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

  return (
    <div className="flex flex-col px-6 py-10 bg-white md:px-20 md:py-16">
      <div className="self-center mt-10 max-w-full md:w-[943px] md:mt-36">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col mt-10 md:mt-0">
              <h1 className="text-4xl font-bold text-black uppercase leading-tight md:text-6xl md:leading-[66px]">
                contact us
              </h1>
              <div className="flex items-start gap-5 mt-10 text-xl text-black md:mt-12">
                <Image
                  loading="lazy"
                  src="/phone_icon.png"
                  className="shrink-0 w-[50px] h-[50px]"
                  alt="Phone icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <div className="text-center">Call Us Directly</div>
                  <div className="mt-1.5 font-semibold uppercase">+44 20 3966 8508</div>
                  <div className="mt-1.5 text-base text-center text-orange-400">
                    See more local number
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 mt-10 md:mt-12">
                <Image
                  loading="lazy"
                  src="/chat_icon.png"
                  className="shrink-0 w-[55px] h-[55px]"
                  alt="Chat icon"
                  width={55}
                  height={55}
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-6 text-black">Chat with our sales team</div>
                  <button className="justify-center px-6 py-3 mt-2 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 md:px-5">
                    Chat with sales
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-5 mt-10 md:mt-12">
                <Image
                  loading="lazy"
                  src="/calendar_icon.png"
                  className="shrink-0 w-[50px] h-[50px]"
                  alt="Calendar icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-6 text-center text-black">Get a product demo</div>
                  <button className="justify-center px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 md:px-5">
                    Schedule A Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-10 md:ml-5 md:w-6/12 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col grow text-sm font-bold leading-4 text-stone-300 md:mt-10">
              <h2 className="text-3xl font-semibold leading-10 text-neutral-400 md:max-w-full">
                Grow your business with us
              </h2>
              <input
                {...register("email")}
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              <input
                {...register("firstName")}
                type="text"
                placeholder="FIRST NAME"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400"
              />
              {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
              <input
                {...register("lastName")}
                type="text"
                placeholder="LAST NAME"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400"
              />
              {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
              <input
                {...register("companyName")}
                type="text"
                placeholder="COMPANY NAME"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400"
              />
              {errors.companyName && <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
              <input
                {...register("companySize")}
                type="text"
                placeholder="COMPANY SIZE"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400"
              />
              {errors.companySize && <span className="text-red-500 text-xs mt-1">{errors.companySize.message}</span>}
              <input
                {...register("phoneNumber")}
                type="tel"
                placeholder="PHONE NUMBER"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400"
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
              <button
                type="submit"
                className="justify-center self-start px-6 py-3 mt-5 text-white uppercase rounded-md bg-stone-500"
              >
                Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;