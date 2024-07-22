"use client"

import React from 'react'
import './datalicense.css'
import LicenseHeader from '@/components/data-license/license-header'
import InsightsSection from '@/components/data-license/InsightsSection'
import HowDataIsPrepared from '@/components/data-license/HowDataIsPrepared'
import ValuableInsight from '@/components/data-license/ValuableInsight'
import { TradeAnalytics } from '@/components/research-report/TradeAnalytics'
import Letsmeet from '@/components/data-license/Letsmeet'


const DataLicense = () => {
    return (
        <div>
            <LicenseHeader />
            <InsightsSection />
            <HowDataIsPrepared />
            <TradeAnalytics />
            <Letsmeet />
            <ValuableInsight />
        </div>

    )
}

export default DataLicense