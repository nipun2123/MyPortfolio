import "./Portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react";


const items = [
    {
    id:1,
    title:"VibezVenue (Ongoing)",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim aut commodi dicta nam cumque praesentium error similique odio omnis quod labore unde eius, perspiciatis vero voluptatum, ad dolorum vitae?"
},
{
  id:2,
  title:"Automated Detection of Schizophrenia Patients",
  img:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim aut commodi dicta nam cumque praesentium error similique odio omnis quod labore unde eius, perspiciatis vero voluptatum, ad dolorum vitae?"
},
{
    id:3,
    title:"Traffic Fine Penalty Control web application ",
    img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim aut commodi dicta nam cumque praesentium error similique odio omnis quod labore unde eius, perspiciatis vero voluptatum, ad dolorum vitae?"
},
{
    id:4,
    title:"Laboratory Appointment System",
    img:"https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim aut commodi dicta nam cumque praesentium error similique odio omnis quod labore unde eius, perspiciatis vero voluptatum, ad dolorum vitae?"
},
{
    id:5,
    title:"Handy Man Android Application  ",
    img:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim aut commodi dicta nam cumque praesentium error similique odio omnis quod labore unde eius, perspiciatis vero voluptatum, ad dolorum vitae?"
},
];

const Single =({item}) =>{

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0,1], [-300,300])
    return (
        <section>
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div style={{y}} className="textContainer">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="buttonContainer">
              <button>See code</button>
              <button>See live</button>
              </div>
            </motion.div>
            </div>
          </div>
            
        </section>
    )
};


const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
    
  return (
    <div className="portfolio" ref={ref}>

    <div className="progress">
      <h1>Featured Works</h1>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
    </div>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>

  )
}

export default Portfolio
