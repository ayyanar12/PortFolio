import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import linkedin from '../../image/linkedin.png'
import leetcode from '../../image/leetcode.png'
import codechef from '../../image/codechef.png'
import gitup from '../../image/gitup.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_x482rli', 'template_3md79di', form.current, 
             'mmbhNCbtiwWFp2Bxx')
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('email send');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section className="contactpage">
        <div className="clients">
            <h1 className="contactpagetitle">Education details</h1>
            <h2 className="cliensdesc">Bachelor of Engineering</h2>
            <p className='contect'><span className='college'>Adhi College of Enginnering and technology</span>
               <span className="dept">Computer Science</span>
               <span className="cgpa">CGPA-8.4</span>
            </p>
            <h2 className='cliensdesc'>HSC</h2>
            <p className='contect'><span className='college'>St.Joseph Higher Seconndary School</span>
               
               <span className="cgpa">90%</span>
            </p>
            <h2 className='cliensdesc'>SSLC</h2>
            <p className='contect'><span className='college'>St.Joseph Higher Seconndary School</span>
               
               <span className="cgpa">90%</span>
            </p>

    
            
        </div>
        <div className="contact">
            <h1 className="contactpagetitle">contact me</h1>
            <span className="contactdesc"></span>
            <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='your name' className="name" name='from_name' required />
                <input type="email" placeholder='your email' className="email" name='from_email' required />
                <textarea className="message" rows='5' placeholder='your message' name='message' required></textarea>
                <button type='submit' className="submitbutton">submit</button>
                <div className="links">
                    <a href="https://leetcode.com/u/ayyanarg/"> <img src={leetcode} alt="leetcode" className="link"/></a>
                    <a href="https://www.linkedin.com/in/ayyanar-g-8b31a2286/"> <img src={linkedin} alt="linkedin" className="link"/></a>
                    <a href="https://github.com/ayyanar12"> <img src={gitup} alt="gitup" className="link"/></a>
                    <a href="https://www.codechef.com/users/ayyanarg"> <img src={codechef} alt="codechef" className="link"/></a>
                    
                    
                  
                </div>
            </form>
        </div>
        
    </section>
  )
}

export default Contact