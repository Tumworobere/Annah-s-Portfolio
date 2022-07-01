import React from 'react'
// import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <About />
      <Projects />
      {/* <Header /> */}
      <Nav />     

      <Experience />
      <Services />     
      <Contact />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App