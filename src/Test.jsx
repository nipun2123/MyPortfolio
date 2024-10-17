import "./App.scss"
import {motion} from "framer-motion"
import { useState } from 'react';

const Test = () => {

        const [open, setOpen] = useState(false)
      
        const variants = {
          visible: {
            opacity: 1
          },
          hidden: { opacity: 0 },
        };


  return (
    <div className="course">

    
        <motion.div className="box"  
        
        variants={variants} 
        initial={{opacity: 0.5, scale:1 }}
        // animate={{opacity: 0, scale:1 }}
        transition={{duration:2, delay:2}}
        animate={open? "visible": "hidden"}
        // whileInView={{opacity:1, scale:2}}
        drag
        >
           
        </motion.div>

        <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
      
    </div>
  )
}

export default Test
