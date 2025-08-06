import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'





const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our Programs" title="What We Offer" />
      <Programs />
    </div>
  )
}

export default App
