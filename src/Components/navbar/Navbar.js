import React, { useState } from 'react'
import './navbar.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {GiBookStorm} from 'react-icons/gi'
import {TiContacts} from 'react-icons/ti'

const Navbar = () => {
  const[activeNav,setActiceNav] = useState('#')
  return (
    <nav>
    <a href='#' onClick={()=>setActiceNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href='#about' onClick={()=>setActiceNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href='#experience' onClick={()=>setActiceNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><GiBookStorm/></a>
    <a href='#contact' onClick={() => setActiceNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
      
    </nav>
  )
}

export default Navbar
