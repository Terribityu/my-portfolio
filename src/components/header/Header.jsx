import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pic1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Rey Sto Domingo</h1>
        <h5 className="text-light">BSIT Student</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header