import React from 'react'
import Pagehead from '../Components/About/Pagehead'
import Abouthead from '../Components/About/Abouthead'
import Aboutapp from '../Components/About/Aboutapp'
import Feature from '../Components/Feature/Feature'

export const About = () => {
  return (
    <div>
      <Pagehead/>
      <Abouthead/>
      <Aboutapp/>
      <Feature/>
    </div>
  )
}

export default About