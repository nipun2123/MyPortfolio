import React from 'react'
import "./home.scss"
import {animate, motion} from "framer-motion"


const itemVariants = {
   initial:{
    x:-500,
    opacity:0
   },
   animate:{
    x: 0,
    opacity:1,
    transition:{
        duration:1
    }
   },

   scrolldown:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat: Infinity
    }
   }

  

} 
const home = () => {
  return (
    <div className="home">

        <motion.div className="wrap" variants={itemVariants} initial="initial" animate="animate">
            <div className="textContainer" >
                <h1 >Software Engineer</h1>
                <span className="description">
                Welcome! I'm Nipun Amarakoon, a passionate and results-oriented software engineer 
                with a strong background in full-stack development.
                 With expertise in Java Spring Boot, microservices architecture, and AWS, 
                 I’ve built scalable, impactful solutions that are both efficient and resilient. 
                 My approach combines a strong foundation in backend technologies with responsive 
                 front-end design, ensuring seamless and user-centered applications. Dedicated to 
                 delivering high-quality software that truly makes a difference, I’m excited to bring 
                 innovative ideas to life. Let’s build something extraordinary together!
                 </span>
            </div>
            <div className="buttonContainer">

            <a href="#Contact Me">
                <button>
                    Contact Me
                </button>
                </a>

                <a href='/Nipun-Amarakoon-CV.pdf' download={'Nipun-Amarakoon.pdf'}>
                <button>
                    Download CV
                </button>
                </a>


                
            </div>
            <motion.div className='scrolldown' variants={itemVariants} animate="scrolldown">
                <img src="/arrow.png" alt="Scroll Down"    />
            </motion.div>
        </motion.div>

        <div>
        <img className='image' src="/profile.webp" alt="My Pic" />
        </div>
    </div>
  )
}

export default home
