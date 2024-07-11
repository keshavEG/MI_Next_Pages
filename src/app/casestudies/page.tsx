"use client"

import FirstComponent from '@/components/casestudies/first-component'
import React from 'react'
import './casestudies.css'
import SuccessStories from '@/components/casestudies/success-stories'
import { BusinessInsights } from '@/components/shared/bussinessImsights/BusinessInsights'

const Casestudies = () => {

    
    return (
        <div>
            <FirstComponent />
            <SuccessStories />
            <BusinessInsights backgroundImageSrc={''} />
        </div>
    )
}

export default Casestudies