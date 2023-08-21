import React from 'react'
import './About.css'
import AboutMyImg from '../../Assets/About-MyImg.jpg'
import { FaAward,FaGraduationCap} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'



const About = () => {

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_myImg'>
          <div className='myImg'>
            <img src={AboutMyImg} alt='My-Image' />
          </div>
        </div>
        <div className='about_content'>
        <p>Hello there! I'm Vikas Kumar Piplodiya.I'm committed to constantly enhancing my skills and knowledge. 
        I thrive in a collaborative environment, where teamwork and effective communication drive creativity and deliver outstanding results. 
        I believe that the web is a canvas of endless possibilities, where innovation and imagination come to life. 
        Let's connect and explore how I can be a valuable asset to your team or business.</p>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Front-End Developer</small> <br/>
              <small> At Function Up</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 Year as Technical Recruiter</small><br/>
              <small>At Lancesoft Inc.</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Internship</h5>
              <small>5 Month in Web Development</small><br/>
              <small>At Cyber Flax</small>
              
            </article>
          </div>
          <div className='plan_details'>
        
        <div><FaGraduationCap /><span>MCA FROM IPS ACADEMY, INDORE IN May 2019 - May 2021</span></div>
        <div><FaGraduationCap /><span>BSC (CS) FROM S.N. GOVT. PG COLLEGE, KHANDWA IN Jun 2016 – Jun 2019</span></div>
        <div><FaGraduationCap /><span>Class 12th FROM SCHOLARS’ DEN SCHOOL, KHANDWA IN 2016 </span></div>
        <div><FaGraduationCap /><span>Class 10th FROM ST. AUGUSTINE HIGH SCHOOL, PUNASA IN 2014 </span></div>
      

        </div>
         
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
