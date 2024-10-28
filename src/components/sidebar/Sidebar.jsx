import React, { useState } from 'react'
import ItemLinks from './item_links/ItemLinks'
import ToggleButton from './toggle_button/ToggleButton'
import {motion} from "framer-motion"
import './Sidebar.scss';
import { clipPath } from 'framer-motion/client';


const Sidebar = () => {

    const [open,setOpen] = useState(false)

const variants = {
    open:{
        clipPath: "circle(1200px at 60px 50px)",
        transition: {
            type: "spring",
            sniffness: 20,
        }
    },
    closed:{
        clipPath: "circle(30px at 63px 50px)",
        transition: {
            delay: 0.1,
            type: "spring",
            sniffness: 400,
            damping: 10,
        }
    }
}

  return (
    <motion.div className='sidebar' 
    animate={open? "open": "closed"}
    >
      <motion.div className="il"     
    variants={variants} >
        <ItemLinks setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
    
  )
}

export default Sidebar
