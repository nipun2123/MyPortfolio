import "./Contact.scss"
import {motion, useInView} from "framer-motion"
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const variants ={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_hi3vkhn', 'template_cdw97ma', form.current, {
          publicKey: '8NFcfj2rPRhrzkuY8',
        })
        .then(
          () => {
            alert('Thank you!');
          },
          (error) => {
            alert('Ops Something went wrong! Please try again.', error.text);
          },
        );
    };


  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <div className="textContainer">
            <h1>Contact Me</h1>
            <div className="details">
                <h2>Email</h2>
                <span>nipun.jayasanka10@gmail.com</span>
            </div>
            <div className="details">
                <h2>Phone</h2>
                <span>+44 7435430676</span>
            </div>
        </div>
      
      <div className="formContainer">
                
        <motion.form ref={form} onSubmit={sendEmail} >
                <input type="text"  name="name" required placeholder="Name"/>
                <input type="email" name="email" required placeholder="Email"/>
                <textarea rows={8} name="message" placeholder="Message"/>
                <button>Submit</button>
            </motion.form>

      </div>
    </motion.div>
  )
}

export default Contact
