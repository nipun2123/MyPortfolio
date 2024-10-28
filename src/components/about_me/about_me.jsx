import { div, head } from 'framer-motion/client';
import './about_me.scss';
import React, { useState, useRef} from "react";
import BubbleUI, { defaultOptions } from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import skillData from "./skills.jsx";
import SkillBubble from "./skill_bubble";
import {motion, useScroll, useTransform} from "framer-motion";
import Collapse from 'react-bootstrap/Collapse';
import { useMediaQuery } from 'react-responsive';

const about_me = () => {

  
  const handleDesktopMediaQueryChange = (matches) => {

    setExOpen(true);
    setQuOpen(true);
    setSkOpen(true);

  }

  const handleTabletMediaQueryChange = (matches) => {
   
    setExOpen(true);
    setQuOpen(true);
    setSkOpen(false);
  }

  const handleMobileMediaQueryChange = (matches) => {

    setExOpen(false);
    setQuOpen(false);
    setSkOpen(false);
  }


  const isDesktopOrLaptop = useMediaQuery(
    { minWidth: 1340 },
    undefined,
    handleDesktopMediaQueryChange
  )
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTablet = useMediaQuery(
    {maxWidth: 1340},
    undefined,
    handleTabletMediaQueryChange
  )

  const isMobile = useMediaQuery(
    {maxWidth: 768},
    undefined,
    handleMobileMediaQueryChange
  )
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })




  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0,1], [0,700])

    const getStockBubbles = () => {
        return skillData.slice(0, 20).map((skill, i) => {
          return <SkillBubble {...skill} key={i} />;
        });
      };
      const stockBubbles = getStockBubbles();
      
      const [options, setOptions] = useState({
        size: 90,
        minSize: 50,
        gutter: 5,
        provideProps: true,
        numCols: 12,
        fringeWidth: 160,
        yRadius: 130,
        xRadius: 320,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 10,
      });

      

      const [exOpen, setExOpen] = useState(!isMobile);
      const [quOpen, setQuOpen] = useState(!isMobile);
      const [skOpen, setSkOpen] = useState(!isMobile);
      

     function handleExBtn(e){
      if(isTablet && !exOpen){
        setSkOpen(false);
      }
      if(isMobile){
        setQuOpen(false);
        setSkOpen(false);
      }
      
         setExOpen(!exOpen);
     }

     function handleQuBtn(e){
      if(isTablet && !quOpen){
        setSkOpen(false);
      }
      if(isMobile){
        setExOpen(false);
        setSkOpen(false);
      }
         setQuOpen(!quOpen);
     }

     function handleSkBtn(e){
      if(!skOpen){
        setQuOpen(false);
        setExOpen(false);
      }
      if(isMobile){
        setExOpen(false);
        setQuOpen(false);
      }
      
         setSkOpen(!skOpen);
     }


     

  return (
    
  <div   className='wrapper'  >
    <div className='title' ref={ref} >
    <h1>About Me</h1>
    </div>
   



    <motion.div  style={{y}} className='contentWrapper' >
  <div className='row m-auto'>


     <div className='experience col-md-5 m-auto' >   
    <div className='card col-md-12' >
    <div className='card-body'>
      <div className='titleBar'>
    <h5 className="card-title">Experience</h5>
    <a  type="button"  onClick={handleExBtn} aria-controls="experienceCollapse"
        aria-expanded={exOpen}>
    <motion.svg width="30" height="30" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg" 
     animate={exOpen? "open": "closed"}>
      
      <motion.path d="M24 21.3848L42.3848 3" stroke="white" strokeWidth="2" strokeLinecap="round" variants={{open:{opacity:0}, close:{opacity:1}}}/>
      <motion.path d="M5 3L23.3848 21.3848" stroke="white" strokeWidth="2" strokeLinecap="round" variants={{open:{d:"M5 3H31"}, close:{d:"M5 3L23.3848 21.3848"}}}/>
    </motion.svg>
  </a>
  </div>
  <Collapse in={exOpen}>
    <div id="experienceCollapse">
    <ol className="activity-feed">
       
        <li className="feed-item feed-item-success">
            <time className="date">June 2022 to Present</time>
            <span className="text"><b>Software Engineer</b>
              <br />
              Visiro Global Solutions - Colombo, Sri Lanka
            </span>
        </li>
        <li className="feed-item feed-item-danger">
            <time className="date" >July 2023 to Sep 2023</time>
            <span className="text"><b>Freelance Software Engineer - UK</b></span>
        </li>
        <li className="feed-item">
            <time className="date">July 2019 to Nov 2021</time>
            <span className="text"><b>Associate Software Engineer </b>
              <br />
              Visiro Global Solutions - Colombo, Sri Lanka
            </span>
        </li>

    </ol>
    </div>
    </Collapse>
    </div>
</div>
</div>

<div className='qualification col-md-5 m-auto' >
<div className='card col-md-12' >
<div className='card-body'>
<div className='titleBar'>
  <h5 className="card-title">Qualification</h5>

<a  type="button"  onClick={handleQuBtn} aria-controls="qualificationCollapse"
        aria-expanded={quOpen}>
    <motion.svg width="30" height="30" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={quOpen? "open": "closed"}>
      
      <motion.path d="M24 21.3848L42.3848 3" stroke="white" strokeWidth="2" strokeLinecap="round" variants={{open:{opacity:0}, close:{opacity:1}}}/>
      <motion.path d="M5 3L23.3848 21.3848" stroke="white" strokeWidth="2" strokeLinecap="round" variants={{open:{d:"M5 3H31"}, close:{d:"M5 3L23.3848 21.3848"}}}/>
    </motion.svg>
  </a>  
</div>

<Collapse in={quOpen}>
<div id="qualificationCollapse">

<ol className="activity-feed">

<li className="feed-item feed-item-success">
        <time className="date" >2022 to 2023</time>
        <span className="text"><b>MSc. In Advanced Computer Science [Commendation] </b> 
        <br />
        University of Northumbria, UK 
        </span>
    </li>
   
    <li className="feed-item feed-item-danger">
        <time className="date" >2020 to 2021</time>
        <span className="text"><b>BSc. (Hons) in Software Engineering [1st class] </b> 
        <br />
        Cardiff Metropolitan University, UK 
        </span>
    </li>
    <li className="feed-item">
        <time className="date">2017 to 2020</time>
        <span className="text"><b>Higher Diploma in Software Engineering </b> 
        <br />
        Java Institute for Advanced Technology, Sri Lanka
        </span>
    </li>
</ol>

</div>

</Collapse>

</div>
</div>
</div>

</div>

<div className='skill row mt-3 m-auto'>
    <div className='col-md-8 m-auto'>
    <div className='card col-md-12'>
<div className='card-body'>

<div className='titleBar'>
<h5 className="card-title">Skills</h5>

<a  type="button"  onClick={handleSkBtn} aria-controls="skillCollapse"
        aria-expanded={skOpen}>
    <motion.svg width="30" height="30" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={skOpen? "open": "closed"}>
      
    <motion.path d="M24 21.3848L42.3848 3" stroke="white" strokeWidth="2" strokeLinecap="round" variants={{open:{opacity:0}, close:{opacity:1}}}/>
      <motion.path d="M5 3L23.3848 21.3848" stroke="white" strokeWidth="2" strokeLinecap="round" variants={{open:{d:"M5 3H31"}, close:{d:"M5 3L23.3848 21.3848"}}}/>
    </motion.svg>
  </a>  
</div>


<Collapse in={skOpen}>
<div id="skillCollapse">

<React.Fragment>
   
   <BubbleUI className="bubbleUI" options={options}>
     {stockBubbles}
   </BubbleUI>
  
 </React.Fragment>
 </div>
 </Collapse>

 </div>
 </div>
 </div>
 </div>
 </motion.div>


</div>

  )
}

export default about_me
