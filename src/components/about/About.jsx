import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>

            </article>

            <article className="about_card">
              <FaUniversity className='about__icon'/>
              <h5>University</h5>
              <small>BTU</small>
             

            </article>

            <article className="about_card">
              <FaJava className='about__icon'/>
              <FaReact className='about__icon'/>
              <h5>Favorite Language</h5>
              <small>Java / React</small>
            </article>

        
          </div>
          <div className='letstalktext'>
           <p>
          I'm creative and detailed individual and have the capacity to develop an effective and efficient solution with no
          tolerance for errors.
          </p>
          <div className='letstalk'>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
        </div>     
        </div>
      </div>
    </section>
  )
}

export default About