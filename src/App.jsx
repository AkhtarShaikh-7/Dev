import React from 'react'
import Navbar from './component/Navbar'
import "./app.css"
import Hero from './component/Hero'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App