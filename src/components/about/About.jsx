import React from 'react';
import './about.css';
import ME from '../../assets/aboutpic.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineComputer} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Achievements</h5>
              <small>3+ Achievements</small>
            </article>

            <article className='about__card'>
              <MdOutlineComputer className='about__icon'/>
              <h5>Skills</h5>
              <small>Experienced</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hello, My name is John Rey D. Sto Domingo, i am currently taking Bachelor of Science of Information Technology in Central Luzon State University.
            I'm currently striving to be a fullstack developer with a willingness to enhance my skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About