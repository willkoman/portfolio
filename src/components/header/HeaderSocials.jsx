import React from 'react'
import {RiYoutubeLine, RiTwitterLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/william-krasnov/" alt="linkedin" input type="button" target="_blank" rel="noopener noreferrer"><RiLinkedinLine/><i className="fab fa-linkedin"></i></a>
        <a href="https://www.twitter.com/willkoofficial/" alt="twitter" input type="button" target="_blank" rel="noopener noreferrer"><RiTwitterLine/><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/willko/" alt="youtube" input type="button" target="_blank" rel="noopener noreferrer"><RiYoutubeLine/><i className="fab fa-youtube"></i></a>
        <a href="https://www.github.com/willkoman/" alt="github" input type="button" target="_blank" rel="noopener noreferrer"><RiGithubLine/><i className="fab fa-github"></i></a>
    </div>
  )
}

export default HeaderSocials