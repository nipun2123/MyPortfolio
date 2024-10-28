import "./Portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react";


const items = [
    {
    id:1,
    title:"VibezVenue (Ongoing)",
    img:"/portfolio/microservice.jpg",
    desc:"This is an event management and ticketing website based on microservice architecture. It incorporates service discovery with Eureka and utilizes Spring Cloud Gateway for API management. Authentication and authorization are handled through Keycloak. Resilience is ensured with the Circuit Breaker pattern using Resilience4J. Spring Cloud Sleuth is employed for request tracing, and Kafka enables event-driven architecture. For monitoring, Prometheus and Grafana provide real-time insights.",
    sub:"Technology included: Java, Spring, Kafka, Resilience4J, Zipkin, Docker, Kubernetes, PostgreSQL, Prometheus, Grafana.",
    code:"https://github.com/nipun2123/VibezVenue",
    demo:""
},
{
  id:2,
  title:"My Portfolio",
  img:"/portfolio/portfolio.jpg",
  desc:"This is a responsive website to represent my excellence.",
  sub:"Technology included: React.js, JavaScript, Bootstrap 5, CSS.",
  code:"https://github.com/nipun2123/MyPortfolio",
  demo:""
},
{
  id:3,
  title:"Automated Detection of Schizophrenia Patients",
  img:"/portfolio/deep-learning.jpg",
  desc:"This is a deep-learning investigation aimed at diagnosing schizophrenia based on EEG spectrogram images. It investigates the impact of utilizing different groups of EEG signals with a hybrid model consisting of ResNet50 and SVM and compares the performance of the hybrid model consisting of ResNet50 and SVM with a single SVM model.",
  sub:"Technology included: Python, CNN, ResNet50, SVM NumPy, and Matplotlib.",
  code:"https://github.com/nipun2123/Schizophrenia_detection",
  demo:""
},
{
    id:4,
    title:"Traffic Fine Penalty Control web application ",
    img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"This is a proposed web-based traffic penalty control system for Sri Lanka. Officers can view and issue penalties to drivers using the web application. Drivers can also view their penalty details. They will be able to pay fines at the police station, which also provides the facility to view license and penalty details.",
    sub:"Technology included: Java, Spring MVC, Spring Security, JSP, Hibernate, Thymeleaf, CSS, Bootstrap, and PostgreSQL.",
    code:"https://github.com/nipun2123/eMotor",
    demo:""
},
{
    id:5,
    title:"Laboratory Appointment System",
    img:"https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"This is a web-based laboratory appointment system that maintains patient appointments and test reports. Additionally, it manages patient and staff accounts.",
    sub:"Technology included: Java, Jersey, MySQL, JavaScript, jQuery, AJAX, Bootstrap, W3CSS.",
    code:"https://github.com/nipun2123/Laboratory_Appoinment_System",
    demo:""
},
{
    id:6,
    title:"Handy Man Android Application  ",
    img:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc:"This an Android application for buying and selling handyman services. Handymen can advertise their services and manage their assigned jobs. Clients can find suitable handymen and communicate with them through messaging via the app.",
    sub:"Technology included: Java, Firebase  .",
    code:"https://github.com/nipun2123/eBass",
    demo:""
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
              <p>{item.sub}</p>
              <div className="buttonContainer">
              <a href={item.code} target="_blank"><button>See code</button></a>
              <a href={item.demo}  target="_blank"><button>See live</button></a>
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
