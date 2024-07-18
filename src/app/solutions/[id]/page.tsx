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
import Video_Alt from '@/components/solutions_2/Video_Solutions_alt_dy';
import Tabs_Desc_alt from '@/components/solutions_2/Tabs_Desc_alt_dy';
import InsightsCards from '@/components/solutions_2/Insights_Card_alt_dy';

export default function Solutions({ params }) {
  const [solutionData, setSolutionData] = useState(null);
  const [isType1, setIsType1] = useState(false);

  const type1Ids = ["solution1", "id2", "id3"]; // Add the IDs for the original components
  // const type2Ids = ["id4", "id5", "id6"]; // Add the IDs for the alternate components

  useEffect(() => {
    const data = getSolutionsData();
    const solution = data.find((item) => item.id === params.id);

    if (!solution) {
      notFound();
    } else {
      setSolutionData(solution);
      setIsType1(type1Ids.includes(params.id));
    }
  }, [params.id]);

  if (!solutionData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isType1 ? (
        <>
          <Video data={solutionData.video} />
          <Tabs_Desc data={solutionData.tabs} />
          <br />
          <br />
          <Insights data={solutionData.insights} />
        </>
      ) : (
        <>
          <Video_Alt data={solutionData.video} />
          <Tabs_Desc_alt data={solutionData.tabs} />
          <br />
          <br />
          <InsightsCards data={solutionData.cards} />
        </>
      )}
      {/* <Import_Links /> */}
      <Importer_Links />
      <br />
      <br />
      <BusinessInsights backgroundImageSrc={''} />
    </div>
  );
}
