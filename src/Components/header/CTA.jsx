import React from 'react'
import Resume from '../../Assets/Vikas_Resum_2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={Resume} className='btn'>Download CV</a>
    <a href='#contact' className=' btn btn-primary'>Let's Connect</a> 
      
    </div>
  )
}

export default CTA
