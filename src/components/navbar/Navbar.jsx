import Sidebar from "../sidebar/Sidebar"
import "./Navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{opacity: 0, scale:0.5 }}
             animate={{opacity: 1, scale:1 }}
             transition={{duration:0.5}}
            >Nipun Amarakoon</motion.span>
    
   <a href="https://www.linkedin.com/in/nipun-amarakoon/"  target="_blank" >
   <img src="/linkedin.png" alt="Linkedin Icon" />
   </a>

   <a href="https://github.com/nipun2123/"  target="_blank" >
   <img src="/github.png" alt="Github Icon" />
   </a>         
         
       
        </div>
      
    </div>
  )
}

export default Navbar
