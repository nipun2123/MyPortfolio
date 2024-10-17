import React from 'react'
import {stagger, animate, motion } from "framer-motion"


const variants = {
  open:{
    transform: "scale(1)", opacity: 1, filter: "blur(0px)" ,
     delay: stagger(0.05)
  },
  close:{
    transform: "scale(0.5)", opacity: 0, filter: "blur(10px)",
    delay: stagger(0.05)
  },
}

const ItemLinks = () => {

const items = [
    "HomePage",
    "About Me",
    "What I Do",
    "Portfolio",
    "Contact"
]

  return (
    <motion.div className='links' >
        {items.map(item=>(
            <motion.a href={`#${item}`} key={item} variants={variants} >{item} </motion.a>
        ))}
    </motion.div>
  )
}

export default ItemLinks
