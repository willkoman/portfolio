import React from 'react'
import {RiYoutubeLine, RiTwitterLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/william-krasnov/" target="_blank" rel="noreferrer"><RiLinkedinLine/><i className="fab fa-linkedin"></i></a>
        <a href="https://www.twitter.com/willkoofficial/" target="_blank" rel="noreferrer"><RiTwitterLine/><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/willko/" target="_blank" rel="noreferrer"><RiYoutubeLine/><i className="fab fa-youtube"></i></a>
        <a href="https://www.github.com/willkoman/" target="_blank" rel="noreferrer"><RiGithubLine/><i className="fab fa-github"></i></a>
    </div>
  )
}

export default HeaderSocials