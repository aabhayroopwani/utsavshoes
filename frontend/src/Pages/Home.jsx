import React from 'react'
import Hero from '../Components/Hero/Hero'
import Feature from '../Components/Feature/Feature'
import Productf from '../Components/Productf/Productf'
import { Banner } from '../Components/Banner/Banner'
import Featured from '../Components/Productf/Featured'
import { Smbanner } from '../Components/Smbanner/Smbanner'
import { Bannersmall } from '../Components/Smbanner/Bannersmall'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Productf/>
      <Banner/>
      <Featured/>
      <Smbanner/>
      <Bannersmall/>
    </div>
  )
}

export default Home