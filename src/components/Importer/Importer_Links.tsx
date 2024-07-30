'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { pagelinks } from "@/constants";

// Function to shuffle an array
function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Importer_Links() {
  const pathname = usePathname();
  const [randomLinks, setRandomLinks] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Split the pathname into parts
    const pathParts = pathname.split('/').filter(part => part);
    console.log("Path parts:", pathParts);

    // Assuming the category is always at index 1
    if (pathParts.length > 1) {
      setCategory(pathParts[1]);
    }

    // Get the links based on the category
    let categoryLinks: string[] = [];
    pagelinks.forEach((item) => {
      if (item[pathParts[1]]) {
        categoryLinks = item[pathParts[1]];
      }
    });

    // Filter out the current path parts from the links
    const filteredLinks = categoryLinks.filter(link => !pathParts.includes(link.toLowerCase()));

    // Shuffle the links and select a subset
    const shuffledLinks = shuffle([...filteredLinks]).slice(0, 6);
    setRandomLinks(shuffledLinks);
  }, [pathname]);

  return (
    <div className="solution-links-div flex flex-col leading-[120%] items-center mx-4 md:my-8">
      <div className="self-center text-4xl font-bold text-black uppercase max-md:max-w-full">
        For more solutions
      </div>
      <div className="flex gap-5 px-5 mt-12 text-lg font-semibold text-white capitalize max-md:flex-wrap max-md:mt-10">
        {randomLinks.map((link) => (
          <Link key={link} href={`/solutions/${category}/${link.replace(/\s+/g, '-').toLowerCase()}`} legacyBehavior>
            <a className="flex-wrap justify-center content-start px-3.5 py-1.5 bg-orange-400 rounded-3xl whitespace-nowrap">
              {link}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
