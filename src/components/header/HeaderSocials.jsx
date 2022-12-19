import React from 'react'
import {RiYoutubeFill} from 'react-icons/ri'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank"><RiYoutubeFill/></a>
        <a href="https://github.com" rel="noreferrer" target="_blank"><FaGithub /></a>
        <a href="https://facebook.com/fascinatingact" rel="noreferrer" target="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocials