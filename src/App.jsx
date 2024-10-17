import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import AboutMe from './components/about_me/about_me'
import Test from './components/about_me/Test'

function App() {
  return (
   <div>
       <article>

<link rel="stylesheet" href="assets/css/kaiadmin.min.css"/>
</article>

    <section id="HomePage"> <Navbar/> <Home/> </section>
    <section id="About Me"><AboutMe/></section>
    <section id="What I Do">Portfoloio 3</section>
    <section id="Portfolio">Portfoloio 4</section>
    <section id="Contact">Portfoloio 5</section>

   </div>
  )
}

export default App
