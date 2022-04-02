import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt=''/>
          </div>
            <h3>Flappy Bird / Java</h3>
             <div className='portfolio__item-cta'>

             </div>
        </article>

          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG2} alt=''/>
              </div>
              <h3>Chess / Java </h3>
              <div className='portfolio__item-cta'>

              </div>
          </article>

          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG3} alt=''/>
              </div>
              <h3>Banking App / Java</h3>
              <div className='portfolio__item-cta'>
              </div>
          </article>
      </div>
    </section>
  )
}

export default Portfolio