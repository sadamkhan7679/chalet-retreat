import React from 'react'

import DiscoverProperties from './DiscoverProperties'
import DiscoverRegions from './DiscoverRegions'
import FreeBooking from './FreeBooking'
import HomeHero from './HomeHero'
import Properties from './Properties'
import ShowWithUs from './ShowWithUs'

const HomeBody = ({properties}: any) => {
  return (
    <>
      <HomeHero />
      <Properties properties={properties} />
      <FreeBooking />
      <DiscoverProperties />
      <DiscoverRegions />
      <ShowWithUs />
    </>
  )
}

export default HomeBody
