import { useState } from 'react'

import './App.css'
import { Achievement, CTA, Categories, Companies, Courses, Feedback, Footer, Hero, Navbar } from './components'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </>
  )
}

export default App
