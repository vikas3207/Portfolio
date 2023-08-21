import React from 'react'
import './footer.css'
import { FaFacebookMessenger, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer">
      <div className='footer_container'>
        <div className='address_details'>
          <h5>Vikas Kumar Piplodiya</h5>
          <p>Frontend Developer</p>
          <p>Mobile:+918120043207</p>
        </div>
        <div className='social-connection'>
        <a href= 'https://www.facebook.com/vicky.piplodiya.7' target='blank'><span><FaFacebookMessenger className='social_connection_icon' /></span></a>
          <a href='https://www.instagram.com/mr.vicky__19/' target='blank'> <FaInstagramSquare className='social_connection_icon' /></a>
          <a href='https://www.linkedin.com/in/vikas-kumar-piplodiya-454700200/' target='blank'><FaLinkedinIn className='social_connection_icon' /></a>
          <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlKFQdGKjVVhPWxHbXHRQcmsTtMMHSHFJQwzZBGRfpQJcCcZcxTlGJqJmjnbTFTdCVqjJq' target='blank'> <MdAlternateEmail className='social_connection_icon' /></a>
        </div>
      </div>
      <p >Made with <AiOutlineHeart style={{color:'red'}}/> by - Vikas Kumar Piplodiya</p>
    </section>
  )
}

export default Footer
