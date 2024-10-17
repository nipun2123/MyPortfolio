import React, { useState } from 'react'
import {motion} from "framer-motion"


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: 
    {pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: "1", type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: "1", duration: 0.01 },
    }}
  ,
};

const ToggleButton = ({setOpen}) => {
 
  return (
    <button onClick={() =>setOpen(prev=>!prev)}>


<motion.svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">

<motion.path d="M5 20H31" stroke="black" stroke-width="2" stroke-linecap="round" variants={{open:{d:"M6 21.3848L24.3848 3"}, close:{d:"M5 20H31"}}} />
<motion.path d="M5 13H31" stroke="black" stroke-width="2" stroke-linecap="round"  variants={{open:{opacity:0}, close:{opacity:1}}} />
<motion.path d="M5 6H31" stroke="black" stroke-width="2" stroke-linecap="round" variants={{open:{d:"M6 3.01839L24.3848 21.4032"}, close:{d:"M5 6H31"}}}  />

</motion.svg>


{/* <motion.svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">

<motion.path d="M5 20H31" stroke="black" stroke-width="2" stroke-linecap="round" initial={draw.hidden} animate={draw.visible} variants={{open:{d:"M6 21.3848L24.3848 3"}, close:{d:"M5 20H31"}}} />
<motion.path d="M5 13H31" stroke="black" stroke-width="2" stroke-linecap="round" initial={draw.hidden} animate={draw.visible}  variants={{open:{opacity:0}, close:{opacity:1}}} />
<motion.path d="M5 6H31" stroke="black" stroke-width="2" stroke-linecap="round" initial={draw.hidden} animate={draw.visible} variants={{open:{d:"M6 3.01839L24.3848 21.4032"}, close:{d:"M5 6H31"}}}  />

</motion.svg> */}

{/* 
<svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M6 21.3848L24.3848 3" stroke="black" stroke-width="2" stroke-linecap="round"/>
<g filter="url(#filter0_d_0_1)">
<path d="M6 3.01839L24.3848 21.4032Z" fill="#D9D9D9"/>
<path d="M6 3.01839L24.3848 21.4032" stroke="black" stroke-width="2" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_0_1" x="1" y="2.01839" width="36" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>  */}






    </button>
  )
}

export default ToggleButton
