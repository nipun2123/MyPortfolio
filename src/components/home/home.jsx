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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas nibh risus, non finibus felis pellentesque at. Duis magna mauris, ultrices sed turpis nec, consectetur mollis nisl. Duis ultrices ex a nulla suscipit, vel pellentesque ante aliquet. Quisque dapibus porta dolor.
                </span>
            </div>
            <div className="buttonContainer">

            <a href="#Contact Me">
                <button>
                    Contact Me
                </button>
                </a>

                <a href="#">
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
        <img className='image' src="/profile.png" alt="My Pic" />
        </div>
    </div>
  )
}

export default home
