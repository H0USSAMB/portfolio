import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aamil0l', 'template_bcro2rm', form.current, 'hazbqDKPhl0TUdKiK')
      .then((result) => {
        console.log(result.text);
        setMessage(result.text)
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section className='contact' id='contact'>
      <h2 className="title">Contact Me</h2>
           <div className='line'></div> 
        <form className='form_contact' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input required type="text" name="user_name" />
          <label>Email</label>
          <input required type="email" name="user_email" />
          <label>Message</label>
          <textarea required name="message" />
          <button type='submit'>SEND</button>
        </form>
      
    

      

    </section>

  );
};
export default Contact