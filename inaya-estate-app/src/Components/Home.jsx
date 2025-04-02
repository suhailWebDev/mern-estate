import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Communities from './Communities'
import LatestBlog from './LatestBlog'
import PropertyList from './PropertyList'

function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <PropertyList/>
      <Communities/>
      <LatestBlog/>
    </>
  )
}

export default Home
