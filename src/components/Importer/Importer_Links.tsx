import React from "react";
import Link from "next/link";

export default function Importer_Links() {
  return (
    <div className="flex flex-col leading-[120%] items-center">
      <div className="self-center text-4xl font-bold text-black uppercase max-md:max-w-full">
        For more solutions
      </div>
      <div className="flex gap-5 px-5 mt-12 text-lg font-semibold text-white capitalize max-md:flex-wrap max-md:mt-10">
        <Link href="/importers" legacyBehavior>
          <a className="flex-wrap justify-center content-start px-3.5 py-1.5 whitespace-nowrap bg-orange-400 rounded-3xl">
            Importers
          </a>
        </Link>
        <Link href="/financial-institutions" legacyBehavior>
          <a className="flex-wrap justify-center content-start px-3.5 py-1.5 bg-orange-400 rounded-3xl">
            Financial Institutions
          </a>
        </Link>
        <Link href="/consulting-research" legacyBehavior>
          <a className="flex-wrap justify-center content-start px-3.5 py-1.5 bg-orange-400 rounded-3xl">
            Consulting and Research
          </a>
        </Link>
        <Link href="/exporters" legacyBehavior>
          <a className="flex-wrap justify-center content-start px-3.5 py-1.5 whitespace-nowrap bg-orange-400 rounded-3xl">
            Exporters
          </a>
        </Link>
        <Link href="/sales-marketing" legacyBehavior>
          <a className="flex-wrap justify-center content-start px-5 py-1.5 bg-orange-400 rounded-3xl max-md:px-5">
            Sales and Marketing
          </a>
        </Link>
        <Link href="/it-consulting" legacyBehavior>
          <a className="flex-wrap justify-center content-start px-4 py-1.5 bg-orange-400 rounded-3xl">
            IT and Consulting
          </a>
        </Link>
      </div>
    </div>
  );
}
