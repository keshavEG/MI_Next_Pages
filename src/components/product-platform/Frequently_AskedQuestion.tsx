"use client"
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Frequent_Questions(){

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return(
        <div className="flex flex-col px-5 text-3xl font-semibold leading-10 text-neutral-400">
        <div className="w-full text-4xl font-bold text-black uppercase max-md:max-w-full">
          Frequently Asked Questions
        </div>
            <Accordion type="single" collapsible className="w-full mt-16 max-md:mt-10">
            <AccordionItem value="item-1">
                <AccordionTrigger className="flex gap-5 self-start items-start mr-auto text-left">
                    <div className="flex-1">
                        What Is The Market Inside Dashboard?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl bg-zinc-50 text-neutral-500 text-center max-md:max-w-full">
                    {defaultContent}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="flex gap-5 self-start items-center mt-8 mr-auto text-left max-md:flex-wrap">
                    <div className="flex-1">
                        What Is New In The Market Inside?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl bg-zinc-50 text-neutral-500 text-center max-md:max-w-full">
                    {defaultContent}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="flex gap-5 self-start items-center mt-10 mr-auto text-left max-md:flex-wrap max-md:mt-10">
                    <div className="flex-1">
                        How Can Market Inside Help In Business Growth?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl bg-zinc-50 text-neutral-500 text-center max-md:max-w-full">
                    {defaultContent}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="flex gap-5 self-start items-center mt-10 mr-auto text-left max-md:flex-wrap max-md:mt-10">
                    <div className="flex-1">
                        How is Market Inside Different from Other Market Intelligence Platform?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl bg-zinc-50 text-neutral-500 text-center max-md:max-w-full">
                    {defaultContent}
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    );
}
