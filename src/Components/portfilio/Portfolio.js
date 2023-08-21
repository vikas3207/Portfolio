import React from 'react'
import './portfolio.css'
import videoBg from '../../Assets/Project.mp4'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container potfolio_container'>
        <article className='portfolio_items'>
          <div className='portfolio_item_img'>
            <img src='https://mir-s3-cdn-cf.behance.net/projects/404/ee228f161689619.Y3JvcCwyMTYwLDE2ODksMCwzMg.png' alt='Project_Img' />
          </div>
          <h5>This is a Portfilio item title</h5>
          <p>A project is any undertaking, carried out individually or collaboratively and possibly involving research or design, that is carefully planned to achieve a particular goal. <a href='#'>Learn more...</a></p>
          <div className='portfolio_items-cta'>
            <a href='#' className='btn' target='blank'>Github</a>
            <a href='#' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_items'>
          <div className='portfolio_item_img'>
            <img src='https://mir-s3-cdn-cf.behance.net/projects/404/ee228f161689619.Y3JvcCwyMTYwLDE2ODksMCwzMg.png' alt='Project_Img' />
          </div>
          <h5>This is a Portfilio item title</h5>
          <p>A project is any undertaking, carried out individually or collaboratively and possibly involving research or design, that is carefully planned to achieve a particular goal. <a href='#'>Learn more...</a></p>
          <div className='portfolio_items-cta'>
            <a href='#' className='btn' target='blank'>Github</a>
            <a href='#' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_items'>
          <div className='portfolio_item_img'>
            <img src='https://img.freepik.com/free-vector/log-landing-page-web-template_23-2148276575.jpg?w=360' alt='Project_Img' />
          </div>
          <h5>This is a Portfilio item title</h5>
          <p>A project is any undertaking, carried out individually or collaboratively and possibly involving research or design, that is carefully planned to achieve a particular goal. <a href='#'>Learn more...</a></p>
          <div className='portfolio_items-cta'>
            <a href='#' className='btn' target='blank'>Github</a>
            <a href='#' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        
     

      </div>

    </section>
  )
}

export default Portfolio
