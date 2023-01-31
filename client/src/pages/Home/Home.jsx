import React from 'react'
import Slider from '../../components/Slider/Slider'
import Contact from '../../components/Contact/Contact'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Contact/>
    </div>
  )
}

export default Home