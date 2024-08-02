"use client"
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Frequent_Questions() {

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className="platform-faq-div flex flex-col px-5 text-3xl font-semibold leading-10 text-neutral-400">
            <div className="w-full text-4xl font-bold text-black uppercase max-md:max-w-full">
                Frequently Asked Questions
            </div>
            <Accordion type="single" collapsible className="w-full mt-16 max-md:mt-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex gap-5 self-start items-start mr-auto text-left">
                        <div className="flex-1">
                            How do platforms help consumers?
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl text-neutral-500 text-center max-md:max-w-full text-left">
                    Chiefly, Market Inside Platform is ideally suitable for buyers, suppliers, logistics firms, law firms, and insurance companies to get an idea of the global trade data and determine market insights 
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="flex gap-5 self-start items-center mt-8 mr-auto text-left max-md:flex-wrap">
                        <div className="flex-1">
                        Can you determine market trends using Platform?
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl text-neutral-500 text-center max-md:max-w-full text-left">
                        Yes, you can discover trends of any region, get detailed insights of the global import export market and determine scope of the potential market. 
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="flex gap-5 self-start items-center mt-10 mr-auto text-left max-md:flex-wrap max-md:mt-10">
                        <div className="flex-1">
                        What is the price for Platform?
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl text-neutral-500 text-center max-md:max-w-full text-left">
                    Depending upon the need of the country/ continent, we offer customized price ranges to the clients. For better idea of the plan, you're free to reach out to the info@marketinsidedata.com.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="flex gap-5 self-start items-center mt-10 mr-auto text-left max-md:flex-wrap max-md:mt-10">
                        <div className="flex-1">
                            How is Market Inside Different from Other Market Intelligence Platform?
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3.5 pb-16 mt-9 w-full text-base leading-7 rounded-xl text-neutral-500 text-center max-md:max-w-full text-left">
                    Our dashboard offers detailed country information of 195+ countries having historical data since 2010 which is periodically updated. It includes 7 comprehensive data fields such as Transit, Suez Canal, Mirror, Statistical, Cargo, Exclusive, Detailed etc.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
