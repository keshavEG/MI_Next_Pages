"use client";

import React, { useState } from "react";
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";

interface SolutionContent {
  title: string;
  description: string;
  sections: Array<{ title: string; content: string }>;
}

interface ProductContent {
  title: string;
  description: string;
  icon: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutionsContent: Record<string, SolutionContent> = {
    "Sales Enablement": {
      title: "Sales Enablement",
      description: "Empower your sales team with data-driven insights and tools.",
      sections: [
        { title: "Importer", content: "Access comprehensive import data to identify potential buyers and market trends." },
        { title: "Exporter", content: "Analyze export patterns and discover new opportunities in global markets." },
        { title: "Logistics", content: "Optimize your supply chain with insights on shipping routes and carriers." },
      ],
    },
    "Market Research Analysis": {
      title: "Market Research Analysis",
      description: "Gain deep insights into market trends and consumer behavior.",
      sections: [
        { title: "Industry Reports", content: "Access detailed reports on various industries and sectors." },
        { title: "Consumer Insights", content: "Understand consumer preferences and buying patterns." },
        { title: "Competitor Analysis", content: "Stay ahead with comprehensive competitor intelligence." },
      ],
    },
    "Risk Analysis & Investment Management": {
      title: "Risk Analysis & Investment Management",
      description: "Make informed decisions with our advanced risk assessment tools.",
      sections: [
        { title: "Risk Modeling", content: "Utilize sophisticated models to quantify and mitigate risks." },
        { title: "Portfolio Management", content: "Optimize your investment portfolio with data-driven strategies." },
        { title: "Market Forecasting", content: "Predict market trends with our AI-powered forecasting tools." },
      ],
    },
    "Use Cases": {
      title: "Use Cases",
      description: "Explore real-world applications of our solutions across industries.",
      sections: [
        { title: "E-commerce", content: "Enhance your online retail strategy with market insights." },
        { title: "Manufacturing", content: "Optimize production and supply chain with trade data." },
        { title: "Financial Services", content: "Improve risk assessment and investment decisions." },
      ],
    },
  };

  const productContent: Record<string, ProductContent> = {
    Platform: {
      title: "Platform",
      description: "Our comprehensive data platform for international trade insights.",
      icon: "📊",
    },
    API: {
      title: "API",
      description: "Integrate our powerful data directly into your applications.",
      icon: "🔌",
    },
    "Data License": {
      title: "Data License",
      description: "Full access to our extensive trade database for your organization.",
      icon: "📜",
    },
  };

  const currentSolution = activeDropdown && solutionsContent[activeDropdown] ? solutionsContent[activeDropdown] : solutionsContent["Sales Enablement"];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4">
        <img className="h-8 object-contain" alt="Market Inside logo" src="/milogo-1@2x.png" />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="uppercase text-sm font-semibold hover:text-orange-500 transition-colors"
                  onMouseEnter={() => setActiveDropdown("solutions")}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6 bg-gray-900 shadow-lg rounded-md">
                    <div className="flex">
                      <div className="w-1/4 space-y-4 pr-6 border-r border-gray-700">
                        {Object.keys(solutionsContent).map((key) => (
                          <a
                            key={key}
                            href="#"
                            className={`block p-2 rounded text-white ${
                              activeDropdown === key ? "bg-gray-800 font-semibold" : "hover:bg-gray-800"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(key);
                            }}
                          >
                            {key}
                          </a>
                        ))}
                      </div>
                      <div className="w-3/4 pl-6">
                        <h3 className="text-orange-500 text-xl font-bold mb-4">
                          {currentSolution.title}
                        </h3>
                        <p className="text-white text-base mb-6">
                          {currentSolution.description}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                          {currentSolution.sections.map((section, index) => (
                            <div key={index}>
                              <h4 className="text-orange-500 font-semibold mb-2">{section.title}</h4>
                              <p className="text-white text-sm">{section.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="uppercase text-sm font-semibold hover:text-orange-500 transition-colors"
                  onMouseEnter={() => setActiveDropdown("product")}
                >
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] p-6 bg-gray-900 shadow-lg rounded-md">
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(productContent).map(([key, value]) => (
                        <div key={key} className="bg-black p-6 rounded-md">
                          <h3 className="text-orange-500 text-xl font-bold mb-3">{value.title}</h3>
                          <p className="text-white text-sm mb-4">{value.description}</p>
                          <div className="bg-gray-800 h-20 w-20 rounded-md flex items-center justify-center mb-4">
                            <span className="text-4xl">{value.icon}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="abc">
                    <a
                      style={{ textDecoration: 'none', color: 'black' }}
                      href="#"
                      className="navbar-links uppercase text-sm font-semibold transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                    >
                      Data
                    </a>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="abc">
                    <a
                      style={{ textDecoration: 'none', color: 'black' }}
                      href="#"
                      className="navbar-links uppercase text-sm font-semibold transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                    >
                      Plans
                    </a>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <a
                      style={{ textDecoration: 'none', color: 'black' }}
                      href="#"
                      className="navbar-links uppercase text-sm font-semibold transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                    >
                      Research & Insights
                    </a>
                  </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Login and Let's Talk buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="py-2 px-4 bg-black text-white text-sm uppercase font-bold rounded hover:bg-gray-800 transition-colors">
            Login
          </button>
          <button className="py-2 px-4 bg-orange-500 text-white text-sm uppercase font-bold rounded hover:bg-orange-600 transition-colors">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900 text-white"
          >
            <div className="px-4 py-2 flex flex-col space-y-2">
              <MobileMenuItem title="Solutions" items={solutionsContent} />
              <MobileMenuItem title="Product" items={productContent} />
              <Link href="/data" className="block py-2">DATA</Link>
              <Link href="/plans" className="block py-2">PLAN</Link>
              <Link href="/research-insights" className="block py-2">RESEARCH & INSIGHTS</Link>
            </div>
            <div className="px-4 py-2 flex flex-col space-y-2">
              <button className="py-2 px-4 bg-black text-white text-sm uppercase font-bold rounded hover:bg-gray-800 transition-colors">
                Login
              </button>
              <button className="py-2 px-4 bg-orange-500 text-white text-sm uppercase font-bold rounded hover:bg-orange-600 transition-colors">
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface MobileMenuItemProps {
  title: string;
  items: Record<string, SolutionContent | ProductContent>;
}

function MobileMenuItem({ title, items }: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-2 flex justify-between items-center"
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4"
          >
            {Object.entries(items).map(([key, value]) => (
              <div key={key} className="py-2">
                <h3 className="text-orange-500 font-semibold">{value.title}</h3>
                <p className="text-sm text-gray-300">{'sections' in value ? value.description : (value as ProductContent).description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
