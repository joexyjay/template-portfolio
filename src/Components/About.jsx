import React from 'react'

import '../styles/About.css'

const About = () => {
  // const calculate_age = () => {
  //   var today = new Date();
  //   var birthDate = new Date("1994-06-24");
  //   var age_now = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age_now--;
  //   }
  //   return age_now;
  // }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        "I am a passionate software engineer, on a mission to craft digital experiences that blend seamless functionality with stunning design. With a keen eye for detail and a love for clean, efficient code, I thrive on turning complex ideas into elegant solutions. Whether it's building robust backend systems with Node.js and Express, crafting dynamic user interfaces with React, or optimizing database performance with MongoDB, I'm dedicated to delivering top-notch results that exceed expectations. Let's collaborate and bring your digital vision to life!"
      </div>
    </div>
  )
}
export default About;
