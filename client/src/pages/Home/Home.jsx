import React from 'react'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      <Contact/>
    </div>
  )
}

export default Home