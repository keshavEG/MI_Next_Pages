"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "./Navbar.module.css"

const solutionsContent = {
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


export default function Navbar() {
  const [selectedSolution, setSelectedSolution] = useState("Sales Enablement");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (submenu: React.SetStateAction<string>) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === submenu ? "" : submenu);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4">
        <img className="h-full object-contain" alt="Market Inside logo" src="/milogo-1@2x.png" />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="uppercase text-sm font-semibold hover:text-orange-500 transition-colors">Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-6 bg-gray-900 shadow-lg rounded-md">
                        <div className="flex">
                          <div className="w-1/4 space-y-4 pr-6 border-r border-gray-700">
                            {Object.keys(solutionsContent).map((key) => (
                              <a
                                key={key}
                                href="#"
                                className={`block p-2 rounded text-white ${selectedSolution === key ? "bg-gray-800 font-semibold" : "hover:bg-gray-800"
                                  }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedSolution(key);
                                }}
                              >
                                {key}
                              </a>
                            ))}
                          </div>
                          <div className="w-3/4 pl-6">
                            <h3 className="text-orange-500 text-xl font-bold mb-4">{solutionsContent[selectedSolution].title}</h3>
                            <p className="text-white text-base mb-6">{solutionsContent[selectedSolution].description}</p>
                            <div className="grid grid-cols-2 gap-6">
                              {solutionsContent[selectedSolution].sections.map((section, index) => (
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
                    <NavigationMenuTrigger className="uppercase text-sm font-semibold hover:text-orange-500 transition-colors">Product</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[750px] p-6 bg-gray-900 shadow-lg rounded-md">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="bg-black p-6 rounded-md">
                            <h3 className="text-orange-500 text-xl font-bold mb-3">Platform</h3>
                            <p className="text-white text-sm mb-4">Our comprehensive data platform for international trade insights.</p>
                            <div className="bg-gray-800 h-20 w-20 rounded-md flex items-center justify-center mb-4">
                              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <ul className="text-white text-sm space-y-2">
                              <li>• Real-time data updates</li>
                              <li>• Advanced analytics tools</li>
                              <li>• Customizable dashboards</li>
                            </ul>
                          </div>
                          <div className="bg-black p-6 rounded-md">
                            <h3 className="text-orange-500 text-xl font-bold mb-3">API</h3>
                            <p className="text-white text-sm mb-4">Integrate our powerful data directly into your applications.</p>
                            <div className="bg-gray-800 h-20 w-20 rounded-md flex items-center justify-center mb-4">
                              <span className="text-orange-500 text-4xl">&#9668;&#9658;</span>
                            </div>
                            <ul className="text-white text-sm space-y-2">
                              <li>• RESTful API</li>
                              <li>• Comprehensive documentation</li>
                              <li>• Flexible data formats</li>
                            </ul>
                          </div>
                          <div className="bg-black p-6 rounded-md">
                            <h3 className="text-orange-500 text-xl font-bold mb-3">Data License</h3>
                            <p className="text-white text-sm mb-4">Full access to our extensive trade database for your organization.</p>
                            <div className="bg-gray-800 h-20 w-20 rounded-md flex items-center justify-center mb-4">
                              <span className="text-white text-4xl font-bold">A</span>
                            </div>
                            <ul className="text-white text-sm space-y-2">
                              <li>• Comprehensive data sets</li>
                              <li>• Regular updates</li>
                              <li>• Customizable data feeds</li>
                            </ul>
                          </div>
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
                  {/* <NavigationMenuItem>
                    <a href="#" className="navbar-links uppercase text-sm font-semibold hover:text-orange-500 transition-colors">Plan</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="#" className="navbar-links uppercase text-sm font-semibold hover:text-orange-500 transition-colors">Research & Insights</a>
                  </NavigationMenuItem> */}
                  {/* <a className="navbar-links" href="#" >Data</a>
                <a className="navbar-links" href="#" >Plans</a>
                <a className="navbar-links" href="#" >Research & Insights</a> */}
                </NavigationMenuList>
              </NavigationMenu>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black">
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
            {/* Let's Talk */}
            <a style={{ textDecoration: "none", color: 'white'}} href="/contactus">Let's Talk</a>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white">
          <div className="px-4 py-2">
            <button onClick={() => toggleMobileSubmenu("solutions")} className="w-full text-left py-2 flex justify-between items-center">
              <span>SOLUTIONS</span>
              <span>{mobileSubmenuOpen === "solutions" ? "▲" : "▼"}</span>
            </button>
            {mobileSubmenuOpen === "solutions" && (
              <div className="pl-4">
                {Object.keys(solutionsContent).map((key) => (
                  <a style={{ textDecoration: 'none', color: 'white' }} key={key} href="#" className="block py-2 text-sm" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                    {key}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => toggleMobileSubmenu("product")} className="w-full text-left py-2 flex justify-between items-center">
              <span>PRODUCT</span>
              <span>{mobileSubmenuOpen === "product" ? "▲" : "▼"}</span>
            </button>
            {mobileSubmenuOpen === "product" && (
              <div className="pl-4">
                <a style={{ textDecoration: 'none', color: 'white' }} href="#" className="block py-2 text-sm" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Platform</a>
                <a style={{ textDecoration: 'none', color: 'white' }} href="#" className="block py-2 text-sm" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>API</a>
                <a style={{ textDecoration: 'none', color: 'white' }} href="#" className="block py-2 text-sm" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Data License</a>
              </div>
            )}
            <a style={{ textDecoration: 'none', color: 'white' }} href="#" className="block py-2" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >DATA</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="#" className="block py-2" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>PLAN</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="#" className="block py-2" onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>RESEARCH & INSIGHTS</a>
          </div>
          <div className="px-4 py-2 flex flex-col space-y-2">
            <button className="py-2 px-4 bg-black text-white text-sm uppercase font-bold rounded hover:bg-gray-800 transition-colors">
              Login
            </button>
            <button className="py-2 px-4 bg-orange-500 text-white text-sm uppercase font-bold rounded hover:bg-orange-600 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}



