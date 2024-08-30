import React from 'react'
import Carousel from './Carousel'
import HomepageAbout from './HomepageAbout'
import Serviceitem from './Serviceitem'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Carousel />
      <HomepageAbout />
      <Serviceitem />
      <Footer />
    </div>
  )
}

export default Home
