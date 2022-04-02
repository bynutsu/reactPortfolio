import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/giorgi-nutsubidze-285ba9235/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/bynutsu" target="_blank"><FaGithub/></a>         
    </div>
  )
}

export default HeaderSocial