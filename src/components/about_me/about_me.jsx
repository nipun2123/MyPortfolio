import { div, head } from 'framer-motion/client';
import './about_me.scss';
import React, { useState} from "react";
import BubbleUI, { defaultOptions } from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import skillData from "./skills.jsx";
import SkillBubble from "./skill_bubble"



const about_me = () => {


    const getStockBubbles = () => {
        return skillData.slice(0, 20).map((skill, i) => {
          return <SkillBubble {...skill} key={i} />;
        });
      };
      const stockBubbles = getStockBubbles();
      
      const [options, setOptions] = useState({
        size: 100,
        minSize: 12,
        gutter: 8,
        provideProps: true,
        numCols: 6,
        fringeWidth: 160,
        yRadius: 130,
        xRadius: 220,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 5,
      });

  return (
    
  <div className='wrapper'>
    <div className='title'>
    <h1>About Me</h1>
    </div>
  <div className='row m-auto'>

     <div className='col-md-5 m-auto' >   
    <div className='card col-md-12' >
    <div className='card-body'>
    <h5 class="card-title">Experience</h5>
   
    <ol class="activity-feed">
        <li class="feed-item feed-item-secondary">
            <time class="date" datetime="9-25">Sep 25</time>
            <span class="text">Responded to need <a href="#">"Volunteer opportunity"</a></span>
        </li>
        <li class="feed-item feed-item-success">
            <time class="date" datetime="9-24">Sep 24</time>
            <span class="text">Added an interest <a href="#">"Volunteer Activities"</a></span>
        </li>
        <li class="feed-item feed-item-info">
            <time class="date" datetime="9-23">Sep 23</time>
            <span class="text">Joined the group <a href="single-group.php">"Boardsmanship Forum"</a></span>
        </li>
        <li class="feed-item feed-item-warning">
            <time class="date" datetime="9-21">Sep 21</time>
            <span class="text">Responded to need <a href="#">"In-Kind Opportunity"</a></span>
        </li>

    </ol>
    </div>
</div>
</div>

<div className='col-md-5 m-auto' >
<div className='card col-md-12' >
<div className='card-body'>
<h5 class="card-title">Qualification</h5>
<ol class="activity-feed">
   
    <li class="feed-item feed-item-danger">
        <time class="date" datetime="9-18">Sep 18</time>
        <span class="text">Created need <a href="#">"Volunteer Opportunity"</a></span>
    </li>
    <li class="feed-item">
        <time class="date" datetime="9-17">Sep 17</time>
        <span class="text">Attending the event <a href="single-event.php">"Some New Event"</a></span>
    </li>
</ol>
</div>
</div>
</div>

</div>

<div className='row mt-3 m-auto'>
    <div className='col-md-5 m-auto'>
    <div className='card col-md-12'>
<div className='card-body'>
<h5 class="card-title">Skills</h5>
<React.Fragment>
   
   <BubbleUI className="bubbleUI" options={options}>
     {stockBubbles}
   </BubbleUI>
  
 </React.Fragment>
 </div>
 </div>
 </div>
 </div>
</div>

  )
}

export default about_me
