import React from 'react'

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
        {/* <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://instagram.com" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div> */}
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/joexyjay" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://twitter.com/joexyjay" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/joseph-ethethowo-1426b3183" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials