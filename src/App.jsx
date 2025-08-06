import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'




const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our Programs" title="What We Offer" />
      <Programs />
      <About />
      <Campus />
    </div>
  )
}

export default App
