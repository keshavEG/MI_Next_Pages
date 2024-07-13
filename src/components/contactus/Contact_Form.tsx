"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
    <div className="flex flex-col px-20 py-16 bg-white max-md:px-5">
      <div className="self-center mt-36 max-w-full w-[943px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <h1 className="text-6xl font-bold text-black uppercase leading-[66px] max-md:text-4xl">
                contact us
              </h1>
              <div className="flex gap-5 justify-between mt-12 text-xl leading-6 text-black max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c721f16b3d2335378e39b7f31acda123e17eb69a912536e3e0b39eb0d7a628e3?apiKey=dedff2e04f3045829c86df72e70dd24a&"
                  className="shrink-0 self-start aspect-square w-[50px]"
                  alt="Phone icon"
                />
                <div className="flex flex-col">
                  <div className="text-center">Call Us Directly</div>
                  <div className="mt-1.5 font-semibold uppercase">+44 20 3966 8508</div>
                  <div className="mt-1.5 text-base text-center text-orange-400">
                    See more local number
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec7913950372c7985a6fb1d732c2bf539ae9f58ac36a1c15d7179beb3f043a28?apiKey=dedff2e04f3045829c86df72e70dd24a&"
                  className="shrink-0 self-start mt-0 aspect-[0.85] fill-blue-950 w-[55px]"
                  alt="Chat icon"
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-6 text-black">Chat with our sales team</div>
                  <button className="justify-center px-6 py-3 mt-2 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                    Chat with sales
                  </button>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/713e2b49f13f0d6dc44f8faf8324592c151ee5da9afe1527d449e935563da86e?apiKey=dedff2e04f3045829c86df72e70dd24a&"
                  className="shrink-0 self-start aspect-[1.02] w-[50px]"
                  alt="Calendar icon"
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-6 text-center text-black">Get a product demo</div>
                  <button className="justify-center px-6 py-3 mt-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500 max-md:px-5">
                    Schedule A Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col grow text-sm font-bold leading-4 text-stone-300 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-semibold leading-10 text-neutral-400 max-md:max-w-full">
                Grow your business with us
              </h2>
              <input
                {...register("email")}
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5 max-md:max-w-full"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              <input
                {...register("firstName")}
                type="text"
                placeholder="FIRST NAME"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5 max-md:max-w-full"
              />
              {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
              <input
                {...register("lastName")}
                type="text"
                placeholder="LAST NAME"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5 max-md:max-w-full"
              />
              {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
              <input
                {...register("companyName")}
                type="text"
                placeholder="COMPANY NAME"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5 max-md:max-w-full"
              />
              {errors.companyName && <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
              <input
                {...register("companySize")}
                type="text"
                placeholder="COMPANY SIZE"
                className="justify-center items-start px-5 py-3 mt-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5 max-md:max-w-full"
              />
              {errors.companySize && <span className="text-red-500 text-xs mt-1">{errors.companySize.message}</span>}
              <input
                {...register("phoneNumber")}
                type="tel"
                placeholder="PHONE NUMBER"
                className="justify-center items-start px-5 py-3 mt-5 uppercase bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5 max-md:max-w-full"
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
              <button
                type="submit"
                className="justify-center self-start px-6 py-3 mt-5 text-white uppercase rounded-md bg-stone-500 max-md:px-5"
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