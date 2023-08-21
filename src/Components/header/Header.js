import React from 'react'
import './header.css'
import CTA from './CTA'
import SocialLink from './SocialLink'
import MineImg from '../../Assets/Mine-Img-removebg.png'
import { AiFillDownSquare } from 'react-icons/ai'

// import videoBg from '../../Assets/experience_bg.mp4'
import videoBg from '../../Assets/4k background footage (ideal for Blockchain Website).mp4' 

const Header = () => {
  return (
    <header>
      {/* <div  className='overlay'></div> */}
      <video src={videoBg} autoPlay loop muted />
      <div className='container header_container'>
        <h5>Hello I am </h5>
        <h1>Vikas</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        {/* <div className='header-mid-container'> */}
        <SocialLink />
            <div className='mine_img'>
            <img src={MineImg} alt='Mine-Img' />
          </div>
         

        <a href='#contact' className='scoll-down'>Scroll Down <AiFillDownSquare className='scroll-icon' /> </a>
      </div>

      {/* </div> */}
    </header>

  )
}

export default Header
