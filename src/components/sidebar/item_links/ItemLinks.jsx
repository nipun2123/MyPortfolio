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

const ItemLinks = ({setOpen}) => {

const items = [
    "Home",
    "About Me",
    "Featured Works",
    "Contact Me"
]

  return (
    <motion.div className='links' >
        {items.map(item=>(
            <motion.a  href={`#${item}`} key={item} variants={variants} onClick={() =>setOpen(prev=>!prev)} >{item} </motion.a>
        ))}
    </motion.div>
  )
}

export default ItemLinks
