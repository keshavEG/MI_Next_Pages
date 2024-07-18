import PlansHeader from '@/components/plans/PlansHeader'
import React from 'react'
import './plans.css'
import PlanCards from '@/components/plans/PlanCards'
import TailoredPlan from '@/components/plans/TailoredPlan'
import AllPlans from '@/components/plans/AllPlans'
import CountryCard from '@/components/plans/CountryCard'

const Plans = () => {
  return (
    <div>
      <PlansHeader />
      <CountryCard />
      <PlanCards />
      <TailoredPlan />
      <AllPlans />
    </div>
  )
}

export default Plans