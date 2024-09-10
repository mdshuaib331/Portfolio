import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/img2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello...!!!<br />I'm MD Shuaib, living in Delhi.I hold a professional degree in Electronics and Communication Engineering with specialization in Artificial Intelligence and Machine Learning. I graduated in 2024 from a reputed University recognised as Netaji Subhas University of Technology(NSUT). </p>
                <p>My passion for frontend development is not only reflected in my extensive work but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Next JS</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF PRACTICE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>25+</h1>
            <p>HEALTHY REVIEWS</p>
        </div>
      </div>
    </div>
  )
}

export default About
