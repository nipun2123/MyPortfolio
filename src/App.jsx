import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import AboutMe from './components/about_me/about_me'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
  return (
   <div>
       <article>

<link rel="stylesheet" href="assets/css/kaiadmin.min.css"/>
</article>

    <section id="Home"> <Navbar/> 
    <Home/> 
    </section>
    <section id="About Me">
      <AboutMe/>
    </section>

      <Portfolio id="Featured Works" />

     <section id="Contact Me">
      <Contact/>
    </section>

   </div>
  )
}

export default App
