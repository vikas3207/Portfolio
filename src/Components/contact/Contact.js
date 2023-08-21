import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {RiWhatsappLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import ReactWhatsapp from 'react-whatsapp'
const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <TfiEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>vikaspiplodiya562@gmail.com</h5>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlKFQdGKjVVhPWxHbXHRQcmsTtMMHSHFJQwzZBGRfpQJcCcZcxTlGJqJmjnbTFTdCVqjJq' target='blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
          <BsInstagram className='contact_option_icon'/>
            <h4>Instagram</h4>
            <h5>mr.vikcy__19</h5>
            <a href='https://www.instagram.com/' target='blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
          <RiWhatsappLine className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+918120043207</h5>
            <a href='#' ><ReactWhatsapp className='whatsapp_message' number='+91 8120043207' massage='I am Interested'>Send a Message</ReactWhatsapp></a>
          </article>
        </div>
        {/* Contact Form Started */}
        <form action='https://formspree.io/f/mrgwqerr' method='POST'>
        <h5 style={{textAlign:'center'}}>Fill the form to address yourself</h5>
          <input type='text' name='Name' placeholder='Your Name' required />
           <input type='email' name='Email' placeholder='Your Email Address' required />
          <textarea placeholder='Your Suggestion...' name='Message' rows="7" />
          <button type='submit' className='btn btn-primary='>Submit</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact
