"use client";

import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Video from '@/components/solutions/Video_Solutions';
import Tabs_Desc from '@/components/solutions/Tabs_Desc';
import Insights from '@/components/solutions/Insights_Solutions';
import Video_Alt from '@/components/solutions_2/Video_Solutions_alt_dy';
import Tabs_Desc_alt from '@/components/solutions_2/Tabs_Desc_alt_dy';
import InsightsCards from '@/components/solutions_2/Insights_Card_alt_dy';
import Importer_Links from '@/components/Importer/Importer_Links';
import { BusinessInsights } from '@/components/shared/bussinessImsights/BusinessInsights';
import getSolutionsData from '@/lib/solutionsData';
import Video_Solutions_3 from '@/components/solutions_3/Video_Solutions_3';
import Tabs_Desc_3 from '@/components/solutions_3/Tab_Desc_3';
import InsightsCards_3 from '@/components/solutions_3/Insights_Cards_3';
import "./solutions.css"

export default function Solutions({ params }) {
  const [solutionData, setSolutionData] = useState(null);
  const [layoutType, setLayoutType] = useState(1);

  const validCategories = ["sector", "industry", "usecase"];
  const layoutMapping = {
    industry: 1,
    sector: 2,
    usecase: 3,
  };

  useEffect(() => {
    const data = getSolutionsData();
    const solution = data.find((item) => item.id === params.id && item.categories.includes(params.category));

    if (!solution || !validCategories.includes(params.category)) {
      notFound();
    } else {
      setSolutionData(solution);
      setLayoutType(layoutMapping[params.category]);
    }
  }, [params.category, params.id]);

  if (!solutionData) {
    return <div>Loading...</div>;
  }

  const renderComponents = () => {
    switch (layoutType) {
      case 1:
        return (
          <>
            <Video data={solutionData.video} />
            <Tabs_Desc data={solutionData.tabs} />
            <br />
            <br />
            <Insights data={solutionData.insights} />
          </>
        );
      case 2:
        return (
          <>
            <Video_Alt data={solutionData.video} />
            <Tabs_Desc_alt data={solutionData.tabs} />
            <br />
            <br />
            <InsightsCards data={solutionData.cards} />
          </>
        );
      case 3:
        return (
          <>
            <Video_Solutions_3 data={solutionData.video} />
            <Tabs_Desc_3 data={solutionData.tabs} />
            <br />
            <br />
            <InsightsCards_3 data={solutionData.cards} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderComponents()}
      <Importer_Links />
      <br />
      <br />
      <BusinessInsights />
    </div>
  );
}
