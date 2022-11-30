import React from 'react'
import ButtonSaya from './ButtonSaya'

const Intro = () => {
  return (
    <div className="sectionI text-light intro">
        <div className="container text-center">
          <img className="avatar" src="circle.png"/>
            <h1>Yesha Jessica Pontoan</h1>
            <p>Front-End Web Developer</p>
            <a target="_blank" href="https://web.facebook.com/yesha.jessica.9" className="social-media">
            <i class="bi bi-facebook"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/ye.shajp" className="social-media">
            <i class="bi bi-instagram"></i>
            </a>
            <a target="_blank" href="https://github.com/YeshaJessicaPontoan" className="social-media">
            <i class="bi bi-github"></i>
            </a>
            <div className="row">
              <div className="col">
                <ButtonSaya 
                  text="Hire Me"
                  link="s21930005@student.unklab.ac.id"
                  warna="danger"
                />    
              </div>
            </div>
        </div>
    </div>
  )
}

export default Intro