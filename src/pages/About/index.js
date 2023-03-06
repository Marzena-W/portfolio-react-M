import React from 'react';
import myImage from '../../images/avatar.png';
import './style.css';

function About() {
  return (
      <div>
        <div className='headers'>
          <h2 className='main-header'> Hi, I'm Maggie</h2>
          <p className="about-header">welcome to my web developer portfolio</p>
        </div>

        <div className='about-para'>
          <img className='myimg' src={myImage} alt="my avatar" />
          <p className="paragraph">I'm passionate about developing
            innovative UI/UX solutions for the web. I started my journey as a
            graphic designer while studying physics, and I was completely hooked on
            the world of computers. With time I've built my passion for coding and
            I've begun studying web development. I'm focused on creating
            accessible and user-friendly digital experiences. </p>
        </div>
      </div>
  )
}

export default About;