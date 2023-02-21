import React from 'react'
import {RiYoutubeLine, RiTwitterLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/william-krasnov/" input type="button" target="_blank" rel="noopener noreferrer"><p>Linkedin</p><RiLinkedinLine/><i className="fab fa-linkedin"></i></a>
        <a href="https://www.twitter.com/willkoofficial/" input type="button" target="_blank" rel="noopener noreferrer"><p>Twitter</p><RiTwitterLine/><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/willko/" input type="button" target="_blank" rel="noopener noreferrer"><p>Youtube</p><RiYoutubeLine/><i className="fab fa-youtube"></i></a>
        <a href="https://www.github.com/willkoman/" input type="button" target="_blank" rel="noopener noreferrer"><p>Github</p><RiGithubLine/><i className="fab fa-github"></i></a>
    </div>
  )
}

export default HeaderSocials