import React from 'react'
import Header from '../Header/Header'
import Build from './Build/Build'
import Hero from './Hero/Hero'
import Investment from './Investment/Investment'
import Meet from './Meet/Meet'
import Priority from './Priority/Priority'

const Homescreen = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Priority />
        <Build />
        <Investment />
        <Meet />
    </div>
  )
}

export default Homescreen