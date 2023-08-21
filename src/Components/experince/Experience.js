import React from 'react'
import './experience.css'
import { AiOutlineHtml5,AiOutlineGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript, DiBootstrap, DiReact, DiAngularSimple } from 'react-icons/di'
import { SiMongodb, SiMysql, SiTailwindcss,SiVisualstudiocode } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'
import { FaNode } from 'react-icons/fa'
import videoBg from '../../Assets/Project.mp4'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills I Have</h5>
      <h2>Tools and Technologies</h2>

      <div className='container experience_container'>
      {/* <video src={videoBg} autoPlay loop muted />
      <div className='overlay'></div> */}
        <div className='experience_content'>
        {/* <video src={videoBg} autoPlay loop muted /> */}
        
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px orangered  ' }}>
            <AiOutlineHtml5 className='experience_details-icon' style={{ color: 'orangered' }} />
            <div>
              <h4>HTML</h4>
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px BLUE' }}>
            <DiCss3 className='experience_details-icon' style={{ color: 'blue' }} />
            <div>
              <h4>CSS</h4>
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px yellow' }}>
            <DiJavascript className='experience_details-icon' style={{ color: 'yellow' }} />
            <div>
              <h4>Javasript</h4>
            </div>
          </article>
          <article className='experience_details' style={{boxShadow:'0px 0px 6px #810CAB' }}>
            <DiBootstrap className='experience_details-icon' style={{ color: '#810CA8'}} />
            <div>
              <h4>Bootstrap</h4>
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px #2192FF' }}>
            <SiTailwindcss className='experience_details-icon' style={{ color: '#2192FF' }} />
            <div>
              <h4>Tailwind CSS</h4>
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px #2192FF' }}>
            <DiReact className='experience_details-icon' style={{ color: '#2192FF' }} />
            <div>
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px #810CAB' }}>
            <TbBrandRedux className='experience_details-icon' style={{ color: '#810CA8' }} />
            <div>
              <h4>Redux</h4>
            </div>
          </article>
          <article className='experience_details' style={{boxShadow:'0px 0px 6px #CD1818' }}>
            <DiAngularSimple className='experience_details-icon' style={{ color: '#CD1818' }} />
            <div>
              <h4>Angular</h4>
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px #4E9F3D' }}>
            <FaNode className='experience_details-icon' style={{ color: '#4E9F3D' }} />
            <div>
              <h4>Node.js</h4>
            </div>
          </article>
          <article className='experience_details' style={{boxShadow:'0px 0px 6px #1E5128' }}>
            <SiMongodb className='experience_details-icon' style={{ color: '#1E5128' }} />
            <div>
              <h4>MongoDB</h4>
            </div>
          </article>
          {/* <article className='experience_details'  style={{boxShadow:'0px 0px 6px #790252' }}>
            <SiMysql className='experience_details-icon' style={{ color: '#790252' }} />
            <div>
              <h4>SQL</h4>
            </div>
          </article> */}
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px blue' }}>
            <SiVisualstudiocode className='experience_details-icon' style={{ color: "blue "}} />
            <div>
              <h4>VS Code</h4>
            </div>
          </article>
          <article className='experience_details'  style={{boxShadow:'0px 0px 6px red' }}>
            <AiOutlineGithub className='experience_details-icon' style={{ color: "red "}} />
            <div>
              <h4>Github</h4>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Experience
