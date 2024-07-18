"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  fullName: z.string().min(1, { message: "Full name is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
});

export default function ReadMoreDialog({ title }) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="mt-auto text-orange-500 hover:text-orange-600 transition-colors duration-300 text-sm font-semibold">
          Read More
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-orange-600 mb-4">Know More About</DialogTitle>
          <p className="text-lg font-semibold text-gray-800">{title}</p>
        </DialogHeader>
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-4 text-gray-700">Get connected with us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>
            <div>
              <input
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              />
              {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
            </div>
            <div>
              <PhoneInput
                country={'us'}
                inputProps={{
                  ...register("phoneNumber"),
                  required: true,
                }}
                onChange={(value) => setValue("phoneNumber", value)}
                containerClass="w-full"
                inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                buttonClass="border border-gray-300 rounded-l-md hover:bg-gray-100 transition-all duration-300"
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 font-semibold"
            >
              Get Free Trial
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}