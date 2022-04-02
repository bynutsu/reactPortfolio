import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Experience</h2>
      
      <div className="experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermidiate</small>
             </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">

        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience