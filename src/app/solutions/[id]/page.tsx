"use client"
// solutions/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Video from '@/components/solutions/Video_Solutions';
import Tabs_Desc from '@/components/solutions/Tabs_Desc';
import Insights from '@/components/solutions/Insights_Solutions';
import getSolutionsData from '@/lib/solutionsData';
import Import_Links from '@/components/solutions/Links_Solutions';
import { BusinessInsights } from '@/components/shared/bussinessImsights/BusinessInsights';
import Importer_Links from '@/components/Importer/Importer_Links';

export default function Solutions({ params }) {
  const [solutionData, setSolutionData] = useState(null);

  useEffect(() => {
    const data = getSolutionsData();
    const solution = data.find((item) => item.id === params.id);

    if (!solution) {
      notFound();
    } else {
      setSolutionData(solution);
    }
  }, [params.id]);

  if (!solutionData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Video data={solutionData.video} />
      <Tabs_Desc data={solutionData.tabs} />
      <br />
      <br />
      <Insights data={solutionData.insights} />
      {/* <Import_Links /> */}
      <Importer_Links />
      <br />
      <br />
      <BusinessInsights />
    </div>
  );
}
