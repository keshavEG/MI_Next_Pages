'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { pagelinks } from "@/constants";


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

  // Extract the last part of the url
  const currentPath = pathname.split('/').pop();

  useEffect(() => {

    const filteredLinks = pagelinks.filter(link => link.toLowerCase() !== currentPath?.toLowerCase());

    const shuffledLinks = shuffle([...filteredLinks]).slice(0, 6);
    setRandomLinks(shuffledLinks);
  }, [currentPath]);

  return (
    <div className="flex flex-col leading-[120%] items-center">
      <div className="self-center text-4xl font-bold text-black uppercase max-md:max-w-full">
        For more solutions
      </div>
      <div className="flex gap-5 px-5 mt-12 text-lg font-semibold text-white capitalize max-md:flex-wrap max-md:mt-10">
        {randomLinks.map((link) => (
          <Link key={link} href={`/solutions/${link.replace(/\s+/g, '-').toLowerCase()}`} legacyBehavior>
            <a className="flex-wrap justify-center content-start px-3.5 py-1.5 bg-orange-400 rounded-3xl whitespace-nowrap">
              {link}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
